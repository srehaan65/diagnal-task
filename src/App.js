import React, { PureComponent } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import axios from "axios";
import whyDidYouUpdate from "why-did-you-update";

// whyDidYouUpdate(React);

class App extends PureComponent {
  state = {
    loading: false,
    data: [],
    title: "",
    search: "",
  };

  componentDidMount() {
    axios.get("http://localhost:5000/page").then((res) => {
      const content = Object.entries(res.data).filter(
        (a) => a[0] === "content-items"
      )[0][1].content;
      this.setState({ data: content, title: res.data.title });
    });
  }
  fetchImages = () => {
    axios.get("http://localhost:5000/page").then((res) => {
      const content = Object.entries(res.data).filter(
        (a) => a[0] === "content-items"
      )[0][1].content;
      this.setState({ data: this.state.data.concat(content) });
    });
  };

  filtered = this.state.data;
  filterPoster = (e) => {
    const value = e.target.value;
    this.setState({ search: value });
    return value;
  };

  render() {
    const { data, title, search } = this.state;
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <Header title={title} filterPoster={this.filterPoster} />
        <Content data={filtered} fetchImages={this.fetchImages} />
      </div>
    );
  }
}

export default App;
