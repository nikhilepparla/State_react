import React from "react";
import { Component } from "react";
import Home from "./home/home";


class App extends Component {
  render() {
    return (
      <div>
        <Home color='danger' text='submit' />
        <Home color='success' />
        <Home />
        <Home color='dark' />
      </div>
    )
  }
}
export default App;