import React from "react";

import "./App.scss";
import Nav from "./components/Nav/Nav";
import Feed from "./components/Feed/Feed";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:5050/images")
      .then((response) => response.json())
      .then((data) => this.setState({ items: data }));
  }

  render() {
    return (
      <div className="app">
        <Nav className="nav" />
        <Feed />
      </div>
    );
  }
}

export default App;
