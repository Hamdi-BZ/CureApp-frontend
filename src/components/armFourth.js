import React, { Component } from "react";
//--- Components
import CoversDisplay from "./childComponents/BasicCoversDisplay";
//--------------
export default class armSecond extends Component {
  render() {
    return (
      <div>
        <CoversDisplay
          title={"League of legends Covers"}
          imgpath={"/assets/images/lol.png"}
        />
      </div>
    );
  }
}
