import React from "react";

import Nav from "./components/Nav/Nav";
import Feed from "./components/Feed/Feed";
import UploadPopup from "./components/UploadPopup/UploadPopup";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

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
    const socket = new WebSocket("ws://209.192.200.84:8181");

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "INITIAL_STATE") {
        const photos = message.data.photos || [];
        this.setState({
          isLoaded: true,
          items: photos.reverse(),
        });
      } else if (message.type === "STATE_UPDATE") {
        const photos = message.data.photos || [];
        this.setState({
          items: photos.reverse(),
        });
      }
    };

    socket.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };
  }

  handleSearch = async (e) => {
    e.preventDefault();
    this.setState({ searchField: e.target.value });
    const response = await fetch(
      `http://209.192.200.84:8080/images?search=${this.state.searchField}`
    );
    const data = await response.json();
    // console.log(data); // log the data received from the server
    this.setState({ items: data.photos || [] });

    if (this.state.searchField === "") {
      const response = await fetch(`http://209.192.200.84:8080/images`);
      const data = await response.json();
      // console.log(data); // log the data received from the server
      this.setState({ items: data.photos.reverse() || [] });
    }
  };

  handleClick = () => {
    this.setState({ upload: true });
  };

  handleClose = () => {
    this.setState({ upload: false });
    console.log("close");
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
        {this.state.isLoaded === false ? (
          <div className="loader">
            <CircularProgress className="spinner" />
            <p>Feed loading...</p>
          </div>
        ) : (
          <Feed items={this.state.items} cardHover={this.state.cardHover} />
        )}
      </div>
    );
  }
}

export default App;
