import React, { Component } from "react";
//--- Components
import CoversDisplay from "./childComponents/BasicCoversDisplay";

//--------------
export default class armSecond extends Component {
  render() {
    return (
      <div>
        <CoversDisplay
          title={"Batman Cover"}
          imgpath={"/assets/images/batman.png"}
        />
      </div>
    );
  }
}
