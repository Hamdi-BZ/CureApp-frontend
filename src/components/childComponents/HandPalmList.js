import React, { Component } from "react";
//--Importing BootStrap components
import ListGroup from "react-bootstrap/ListGroup";
//--------------------------------
var listOfImages = [];
export default class HandPalm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handpalmimgsrc: "",
    };
  }

  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    listOfImages = this.importAll(
      require.context(
        "../../../public/assets/handpalm",
        false,
        /\.(png|jpe?g|gif)$/
      )
    );
  }
  render() {
    return (
      <div className="scrollmenu">
        <ListGroup horizontal>
          {listOfImages.map((image) => (
            <ListGroup.Item className="listgroupitem">
              <img
                src={image}
                alt="info"
                onClick={() => {
                  const imgsrc = image;
                  this.setState({
                    handpalmimgsrc: imgsrc,
                  });
                  localStorage.setItem("handcoverimgpath", imgsrc);
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
