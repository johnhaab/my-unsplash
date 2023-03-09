import React, { useEffect, useState } from "react";

import "./App.scss";
import Nav from "./components/Nav/Nav";
import Feed from "./components/Feed/Feed";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchField: "",
      error: false,
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:5050/images")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          items: data,
        }).catch((error) => this.setState({ error, isLoaded: true }));
      });
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <Feed items={this.state.items} searchField={this.state.searchField} />
      </div>
    );
  }
}

export default App;
