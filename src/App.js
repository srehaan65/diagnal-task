import React from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import axios from "axios";

class App extends React.Component {
  state = {
    loading: false,
    data: [],
    title: "",
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

  render() {
    const { data, title } = this.state;
    // console.log(data);
    return (
      <div className="App">
        <Header title={title} />
        <Content data={data} fetchImages={this.fetchImages} />
      </div>
    );
  }
}

export default App;
