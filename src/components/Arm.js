import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
var background = { backgroundSize: "100%", width: "100%" };
var textStyle = {
  position: "absolute",
  top: "60%",
  left: "35%",
  color: "white",
  fontSize: "5vw",
  fontWeight: "600",
};
var titleDescription = {
  position: "absolute",
  top: "75%",
  left: "1%",
  color: "#1a9f8c",
  fontSize: "2vw",
  fontWeight: "500",
  textAlign: "center",
};
var titleSecondRow = {
  color: "#1a9f8c",
  textAlign: "center",
};
var title = {
  color: "#1a9f8c",
  textAlign: "center",
  fontSize: "2rem",
  marginTop: "2rem",
  justifyContent: "center",
};
var col = {
  margin: "0",
  padding: "0",
  background: "#F2F5F2",
};
var colFix = {
  margin: "0",
  padding: "0",
};
var card = {
  width: "20rem",
  background: "#F2F5F2",
  boxShadow: "none",
  marginTop: "4rem",
  border: "none",
  textAlign: "center",
};
export default class Arm extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Container fluid>
          <Row>
            <Col style={col}>
              <Image
                style={background}
                responsive
                src={`${process.env.PUBLIC_URL}/assets/images/pic4.jpg`}
              ></Image>
              <h1 style={textStyle}>SUPER ARM</h1>
              <p style={titleDescription}>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                  color: "#1a9f8c",
                }}
              >
                YOUR SUPERMAN
              </h3>
              <p
                style={{
                  color: "#000000",
                  fontSize: "2vw",
                  textAlign: "center",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
