import React, { Component } from "react";
import Header from "./header.js";

//---------------------------------------------------------------------
class App extends Component {
  componentDidMount = () => {
    localStorage.setItem("cart", 0);
  };
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
export default App;
