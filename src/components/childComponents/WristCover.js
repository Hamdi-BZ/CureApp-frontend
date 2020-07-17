import React, { Component } from "react";
//--Importing BootStrap components
import ListGroup from "react-bootstrap/ListGroup";
//--------------------------------
var listOfImages = [];
export default class WristCover extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      wristcoverimgsrc: "",
    };
  }
  greet() {
    alert("clicked");
  }

  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    listOfImages = this.importAll(
      require.context(
        "../../../public/assets/wristcover",
        false,
        /\.(png|jpe?g|gif)$/
      )
    );
  }

  render() {
    return (
      <div className="scrollmenu">
        <ListGroup horizontal>
          {listOfImages.map((image, index) => (
            <ListGroup.Item className="listgroupitem">
              <img
                key={index}
                src={image}
                alt="info"
                onClick={() => {
                  const imgsrc = image;
                  this.setState({
                    wristcoverimgsrc: imgsrc,
                  });
                  localStorage.setItem("wristimgpath", imgsrc);
                  console.log(imgsrc);
                }}
              ></img>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}
