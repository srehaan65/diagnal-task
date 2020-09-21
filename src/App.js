import React, { Component, lazy, Suspense } from "react";
import "./App.css";
// import Content from "./components/Content";
import Header from "./components/Header";
import axios from "axios";
import data1 from "./data/CONTENTLISTINGPAGE-PAGE1.json";
import data2 from "./data/CONTENTLISTINGPAGE-PAGE2.json";
import data3 from "./data/CONTENTLISTINGPAGE-PAGE3.json";

const Content = React.lazy(() => import("./components/Content"));

class App extends Component {
  state = {
    loading: false,
    data: [],
    title: "",
    search: "",
    scrollTop: 0,
  };
  myRef = React.createRef();
  componentDidMount() {
    const content = data1.page["content-items"].content;
    const title = data1.page.title;
    this.setState({ data: content, title: title });
  }
  fetchImages2 = () => {
    console.log("fetching images 2");
    console.log(this.state.data.length >= 20);
    const content = data2.page["content-items"].content;
    if (this.state.data.length <= 20 && this.state.data.length < 40) {
      this.setState({ data: this.state.data.concat(content) });
    }
  };

  fetchImages3 = () => {
    console.log("fetching images 3");
    console.log(this.state.data.length >= 40 && this.state.data.length < 60);
    const content = data3.page["content-items"].content;
    if (this.state.data.length >= 40 && this.state.data.length < 60) {
      this.setState({ data: this.state.data.concat(content) });
    }
  };

  filtered = this.state.data;
  filterPoster = (value) => {
    this.setState({ search: value });
  };

  render() {
    console.log("App renders");
    const { data, title, search } = this.state;
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <Header title={title} filterPoster={this.filterPoster} />
        <Suspense fallback={<p>...</p>}>
          <Content
            data={filtered}
            fetchImages2={this.fetchImages2}
            fetchImages3={this.fetchImages3}
            // ref={this.myref}
            // onScroll={this.onScroll}
          />
        </Suspense>
      </div>
    );
  }
}

export default App;
