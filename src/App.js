import React from "react";

import Nav from "./components/Nav/Nav";
import Feed from "./components/Feed/Feed";
import UploadPopup from "./components/UploadPopup/UploadPopup";
import Backdrop from "@mui/material/Backdrop";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchField: "",
      error: false,
      isLoaded: false,
      cardHover: false,
      upload: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:5050/images")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          isLoaded: true,
          items: data,
        })
      )
      .catch((error) => this.setState({ error, isLoaded: true }));
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
    console.log(this.state.searchField);
  };

  handleClick = () => {
    this.setState({ upload: true });
  };

  handleClose = () => {
    this.setState({ upload: false });
  };

  render() {
    return (
      <div className="app">
        {this.state.upload === true && (
          <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={this.state.upload}
          >
            <UploadPopup handleClose={this.handleClose} />
          </Backdrop>
        )}
        <Nav
          searchField={this.state.searchField}
          handleSearch={this.handleSearch}
          handleClick={this.handleClick}
        />
        <Feed items={this.state.items} cardHover={this.state.cardHover} />
      </div>
    );
  }
}

export default App;
