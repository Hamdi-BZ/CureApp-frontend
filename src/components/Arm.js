import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";
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
  top: "85%",
  left: "1%",
  color: "#000",
  fontSize: "1.5vw",
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
                  marginTop: "3rem",
                  color: "#1a9f8c",
                }}
              >
                YOUR SUPERMAN
              </h3>
              <p
                style={{
                  color: "#000000",
                  fontSize: "1vw",
                  textAlign: "center",
                  marginBottom: "3rem",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                backgroundColor: "rgb(194, 245, 232)",
              }}
            >
              <Row className="justify-content-center">
                <Col md="auto">
                  <img
                    style={{
                      width: "80%",
                      marginLeft: "2vw",
                      marginBottom: "2rem",
                      marginTop: "2rem",
                    }}
                    src={`${process.env.PUBLIC_URL}/assets/images/3d.png`}
                  />
                  <h3 style={{ textAlign: "center" }}>3D PRINTED</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "1.5vw",
                      textAlign: "center",
                      marginBottom: "3rem",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </Col>
              </Row>
            </Col>
            <Col
              style={{
                backgroundColor: "#ddd",
              }}
            >
              <Row className="justify-content-center">
                <Col md="auto">
                  <FontAwesomeIcon
                    style={{
                      fontSize: "15vw",
                      marginLeft: "2vw",
                      marginBottom: "3rem",
                      marginTop: "3rem",
                    }}
                    icon={faSlidersH}
                  />
                  <h3>ADJUSTBALE SOCKET</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "1.5vw",
                      textAlign: "center",
                      marginBottom: "3rem",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="auto">
              <img
                style={{
                  width: "100%",
                  margin: "auto",
                  marginBottom: "2rem",
                  marginTop: "2rem",
                  backgroundSize: "100%",
                }}
                src={`${process.env.PUBLIC_URL}/assets/images/armcover.png`}
              />
              <Button
                variant="info"
                className="btn-read-more"
                style={{
                  position: "absolute",
                  top: "70%",
                  right: "15vw",
                }}
              >
                GET YOUR SUPER ARM
              </Button>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                backgroundColor: "#ddd",
              }}
            >
              <Row className="justify-content-center">
                <Col md="auto">
                  <img
                    style={{
                      width: "80%",
                      marginLeft: "2vw",
                      marginBottom: "2rem",
                      marginTop: "2rem",
                    }}
                    src={`${process.env.PUBLIC_URL}/assets/images/3d.png`}
                  />
                  <h3>Controlled with your Muscle</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "1.5vw",
                      textAlign: "center",
                      marginBottom: "3rem",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </Col>
              </Row>
            </Col>
            <Col
              style={{
                backgroundColor: "rgb(194, 245, 232)",
              }}
            >
              <Row className="justify-content-center">
                <Col md="auto">
                  <img
                    style={{
                      width: "80%",
                      marginLeft: "2vw",
                      marginBottom: "2rem",
                      marginTop: "2rem",
                    }}
                    src={`${process.env.PUBLIC_URL}/assets/images/3d.png`}
                  />
                  <h3>Controlled with your Muscle</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "1.5vw",
                      textAlign: "center",
                      marginBottom: "3rem",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="auto">
              <img
                style={{
                  width: "100%",
                  margin: "auto",
                  marginBottom: "2rem",
                  marginTop: "2rem",
                  backgroundSize: "100%",
                }}
                src={`${process.env.PUBLIC_URL}/assets/images/arm3cover.png`}
              />
              <Button
                variant="info"
                className="btn-read-more"
                style={{
                  position: "absolute",
                  top: "70%",
                  right: "15vw",
                }}
              >
                GET YOUR SUPER ARM
              </Button>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                backgroundColor: "rgb(194, 245, 232)",
              }}
            >
              <Row className="justify-content-center">
                <Col md="auto">
                  <img
                    style={{
                      width: "80%",
                      marginLeft: "2vw",
                      marginBottom: "2rem",
                      marginTop: "2rem",
                    }}
                    src={`${process.env.PUBLIC_URL}/assets/images/3d.png`}
                  />
                  <h3>A solar & Wirless Charger</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "1.5vw",
                      textAlign: "center",
                      marginBottom: "3rem",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </Col>
              </Row>
            </Col>
            <Col
              style={{
                backgroundColor: "#ddd",
              }}
            >
              <Row className="justify-content-center">
                <Col md="auto">
                  <img
                    style={{
                      width: "85%",
                      marginLeft: "2vw",
                      marginBottom: "2rem",
                      marginTop: "2rem",
                    }}
                    src={`${process.env.PUBLIC_URL}/assets/images/3d.png`}
                  />
                  <h3>Customized Covers</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "1.5vw",
                      textAlign: "center",
                      marginBottom: "3rem",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="auto">
              <img
                style={{
                  width: "100%",
                  margin: "auto",
                  marginBottom: "2rem",
                  marginTop: "2rem",
                  backgroundSize: "100%",
                }}
                src={`${process.env.PUBLIC_URL}/assets/images/armcover.png`}
              />
              <Button
                variant="info"
                className="btn-read-more"
                style={{
                  position: "absolute",
                  top: "70%",
                  right: "15vw",
                }}
              >
                GET YOUR SUPER ARM
              </Button>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                backgroundColor: "#ddd",
              }}
            >
              <Row className="justify-content-center">
                <Col md="auto">
                  <img
                    style={{
                      width: "80%",
                      marginLeft: "2vw",
                      marginBottom: "2rem",
                      marginTop: "2rem",
                    }}
                    src={`${process.env.PUBLIC_URL}/assets/images/3d.png`}
                  />
                  <h3>Turning wrist</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "1.5vw",
                      textAlign: "center",
                      marginBottom: "3rem",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </Col>
              </Row>
            </Col>
            <Col
              style={{
                backgroundColor: "rgb(194, 245, 232)",
              }}
            >
              <Row className="justify-content-center">
                <Col md="auto">
                  <img
                    style={{
                      width: "85%",
                      marginLeft: "2vw",
                      marginBottom: "2rem",
                      marginTop: "2rem",
                    }}
                    src={`${process.env.PUBLIC_URL}/assets/images/3d.png`}
                  />
                  <h3>One day of autonomy</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "1.5vw",
                      textAlign: "center",
                      marginBottom: "3rem",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col sm={3}></Col>
            <Col className="follow-us-col" style={{ marginBottom: "2rem" }}>
              <span style={{ fontSize: "2rem" }} className="follow-us-txt">
                Follow Us
              </span>
              <FontAwesomeIcon
                className="icon-follow-us"
                style={{ fontSize: "3rem" }}
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="icon-follow-us"
                style={{ fontSize: "3rem" }}
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="icon-follow-us"
                style={{ fontSize: "3rem" }}
                icon={faTwitter}
              />
            </Col>
            <Col sm={3}></Col>
          </Row>
          <Row
            className="justify-content-center"
            style={{ marginBottom: "3rem" }}
          >
            <Col md="auto">
              <img
                style={{
                  width: "100%",
                  margin: "auto",
                  marginBottom: "2rem",
                  backgroundSize: "100%",
                }}
                src={`${process.env.PUBLIC_URL}/assets/images/armcover.png`}
              />
              <Button
                variant="info"
                className="btn-read-more"
                style={{
                  position: "absolute",
                  top: "70%",
                  right: "15vw",
                }}
              >
                GET YOUR SUPER ARM
              </Button>
              <p style={titleDescription}>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="footer">
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
