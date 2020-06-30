import React, { Component } from "react";
import Axios from "axios";
//--Importing BootStrap components
import ListGroup from "react-bootstrap/ListGroup";
//--------------------------------
export default class PartsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: [],
      imagePath: [],
      coverName: [],
      category: [],
      color: [],
      price: [],
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:8080/covers/")
      .then((response) => {
        console.log(response.data[2]);
        const x = response.data;
        console.log("--------------------");
        this.setState({
          cover: x[2],
          //imagePath: data[3].coverImagePath,
          //coverName: data[3].coverName,
          //category: [data.category],
          //color: [data.color],
        });
        console.log("------------------");

        console.log(this.state.cover);
        //console.log(data[2]);
        console.log("----Image path----");
        console.log(this.state.cover.coverImagePath);
        console.log("-----Name---");
        //console.log(this.state.coverName);
        console.log("--------------");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  indexHandler = () => {
    var i = -1;
    return i++;
  };
  render() {
    const imgpath = this.state.cover.coverImagePath;
    //const stateation = this.state.cover[0];
    return (
      <div className="scrollmenu">
        <ListGroup horizontal>
          {/*{covers.map((index) => (*/}
          <ListGroup.Item className="listgroupitem">
            <img
              key={1}
              src={imgpath}
              alt="info"
              /* onClick={() => {
                  const imgsrc = image;
                  this.setState({
                    wristcoverimgsrc: imgsrc,
                  });
                  console.log(imgsrc);
                  this.greet();
                }}*/
            ></img>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
