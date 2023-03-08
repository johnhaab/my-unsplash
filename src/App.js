import "./App.scss";

import Nav from "./components/Nav/Nav";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className="app">
      <Nav className="nav" />
      <Feed />
    </div>
  );
}

export default App;
