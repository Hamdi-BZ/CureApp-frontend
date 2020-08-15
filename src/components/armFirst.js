import React, { Component } from "react";
//--- Components
import CoversDisplay from "./childComponents/BasicCoversDisplay";
//--------------
export default class armSecond extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      try: "try works from parent",
    };
  }

  render() {
    return (
      <div>
        <CoversDisplay
          title={"Ironman cover"}
          imgpath={"/assets/images/armironman.png"}
        />
      </div>
    );
  }
}
