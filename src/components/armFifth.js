import React, { Component } from "react";
//--- Components
import CoversDisplay from "./childComponents/BasicCoversDisplay";
//--------------
export default class armSecond extends Component {
  render() {
    return (
      <div>
        <CoversDisplay
          title={"Fully Customized Covers"}
          imgpath={"/assets/images/cover1.png"}
        />
      </div>
    );
  }
}
