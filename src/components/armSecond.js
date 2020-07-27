import React, { Component } from "react";
import Axios from "axios";
//--- Components
import CoversDisplay from "./childComponents/BasicCoversDisplay";

//--------------
export default class armSecond extends Component {
  constructor(props) {
    super(props);
    this.state = {
      producttype: "Superman",
      products: [],
    };
  }

  render() {
    return (
      <div>
        <CoversDisplay
          title={"Batman Cover"}
          imgpath={"/assets/images/batman.png"}
          producttype={this.state.producttype}
        />
      </div>
    );
  }
}
