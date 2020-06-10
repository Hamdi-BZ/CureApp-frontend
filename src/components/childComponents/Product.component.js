import React, { Component } from "react";
//---Bootstrap Components & Styling
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//---------
export default class ProductDisplay extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`${process.env.PUBLIC_URL}${this.props.imgpath}`}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Button variant="primary">See All</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
