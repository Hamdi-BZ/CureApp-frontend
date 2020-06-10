import React, { Component } from "react";
//--- Components
import CoversDisplay from "./childComponents/BasicCoversDisplay";
//--------------
export default class armSecond extends Component {
  constructor(props) {
    super(props);
    this.state = { coverid: "ironmancover" };
  }
  method = () => {
    this.setState({ coverid: "ironmancover" });
  };
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
