import { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    );
  }
}
export default App;