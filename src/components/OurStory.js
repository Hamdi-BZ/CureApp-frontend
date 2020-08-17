import React, { Component } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";
export default class OurStory extends Component {
  render() {
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
              <h1 style={textStyle}>OUR STORY</h1>
              <p style={titleDescription}>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                margin: "0",
                padding: "0",
                background: "#F2F5F2",
              }}
            >
              <h1 style={titleSecondRow}>Why we are doing it ?</h1>
            </Col>
          </Row>
          <Row
            style={{ display: "flex", flexWrap: "wrap", background: "#F2F5F2" }}
          >
            <Card style={card}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={card}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={card}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={card}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Col style={col}>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "2vw",
                  margin: "2rem 4rem",
                  background: "#F2F5F2",
                }}
              >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.Some quick example text to build
                on the card title and make up the bulk of the card's content.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={5} style={col}>
              <Image
                style={{ width: "100%" }}
                responsive
                src={`${process.env.PUBLIC_URL}/assets/images/pic4.jpg`}
              ></Image>
            </Col>
            <Col style={{ background: "white" }}>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "2vw",
                  margin: "4rem 4rem",
                  marginTop: "5rem",
                }}
              >
                Some quick example text to build on the card title and make up
                the bulk of the card's contentquick example text to build on the
                card title and make up the bulk of the card's content.
              </p>
            </Col>
          </Row>
          <Row className="row-3-ourstory">
            <Col>
              <Row className="justify-content-center">
                <Col md="auto" style={title}>
                  The Founder
                </Col>
              </Row>
              <Row>
                <Col>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "2vw",
                      margin: "4rem 4rem",
                      marginTop: "5rem",
                    }}
                  >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's contentquick example text to build
                    on the card title and make up the bulk of the card's
                    content.
                  </p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "2rem" }}>
                <Col sm={3}></Col>
                <Col className="follow-us-col">
                  <FontAwesomeIcon
                    className="icon-follow-us"
                    icon={faFacebook}
                  />
                  <FontAwesomeIcon
                    className="icon-follow-us"
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="icon-follow-us"
                    icon={faTwitter}
                  />
                </Col>
                <Col sm={3}></Col>
              </Row>
            </Col>
            <Col style={col} sm={3}>
              <img
                style={{ float: "right" }}
                src={`${process.env.PUBLIC_URL}/assets/images/founder.png`}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={4} style={colFix}>
              <img
                style={{ float: "left", width: "100%" }}
                src={`${process.env.PUBLIC_URL}/assets/images/pic4.jpg`}
              />
            </Col>
            <Col>
              <Row className="justify-content-center">
                <Col md="auto" style={title}>
                  The Creaters
                </Col>
              </Row>
              <Row>
                <Col>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "2vw",
                      margin: "2rem 4rem",
                    }}
                  >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's contentquick example text to build
                    on the card title and make up the bulk of the card's
                    content.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Row className="justify-content-center">
                    <Col
                      md="auto"
                      style={{
                        color: "#1a9f8c",
                        textAlign: "center",
                        fontSize: "2rem",
                        marginTop: "4rem",
                        justifyContent: "center",
                      }}
                    >
                      Another Title Here
                    </Col>
                  </Row>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "2vw",
                      margin: "2rem 4rem",
                    }}
                  >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's contentquick example text to build
                    on the card title and make up the bulk of the card's
                    content.
                  </p>
                  <Button
                    style={{ marginLeft: "20rem" }}
                    variant="info"
                    className="home-btn-see-more"
                  >
                    GET YOUR SUPERARM
                  </Button>{" "}
                </Col>
                <Col sm={4} style={colFix}>
                  <img
                    style={{ float: "right", width: "80%" }}
                    src={`${process.env.PUBLIC_URL}/assets/images/pic5.png`}
                  />
                </Col>
              </Row>
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
