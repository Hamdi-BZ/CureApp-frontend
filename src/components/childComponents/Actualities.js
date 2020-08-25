import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  Jumbotron,
} from "react-bootstrap";
import Footer from "../Footer";
import Axios from "axios";

export default class Actualities extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      page: "Actualities Page",
      contents: [],
    };
  }

  componentDidMount = () => {
    Axios.get(`http://localhost:8080/api/contents/${this.state.page}`)
      .then((Response) => {
        this.setState({
          contents: Response.data,
        });
        console.log(this.state.contents);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    var background = { backgroundSize: "100%", width: "100%" };
    var textStyle = {
      position: "absolute",
      top: "60%",
      left: "30%",
      color: "White",
      fontSize: "5vw",
      fontWeight: "600",
    };
    var col = {
      margin: "0",
      padding: "0",
      background: "#F2F5F2",
    };
    const contents = this.state.contents;
    return (
      <Container style={{ marginTop: "3rem" }} fluid>
        <Row>
          <Col style={col}>
            <Image
              style={background}
              responsive
              src={`${process.env.PUBLIC_URL}/assets/images/coverr.png`}
            ></Image>
            <h1 style={textStyle}>OUR ACTUALITIES</h1>
          </Col>
        </Row>
        <Row className="jumbotron-shop">
          <Col>
            <Jumbotron>
              <h1>Cure Bionics</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button style={{ float: "right" }} variant="primary">
                  Learn more
                </Button>
              </p>
            </Jumbotron>
          </Col>
          <Col>
            <Jumbotron>
              <h1>Order Arm</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button style={{ float: "right" }} variant="danger">
                  Order Arm
                </Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            flexWrap: "wrap",
            background: "#e9ecef",
            marginBottom: "2rem",
            marginLeft: "0.1rem",
            marginRight: "0.1rem",
            borderRadius: "0.3rem",
          }}
        >
          {contents.length ? (
            contents.map((item) => (
              <Card
                style={{
                  width: "40%",
                  marginTop: "1rem",
                  height: "fit-content",
                  boxShadow: "none",
                  background: "#e9ecef",
                  border: "none",
                }}
              >
                <Card.Body>
                  <Row>
                    <Col sm={8}>
                      <Card.Title>{item.title}</Card.Title>
                      {item.description}
                    </Col>
                    <Col>
                      <Card.Img
                        variant="top"
                        style={{ width: "100%", float: "right" }}
                        src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Button
                      disabled={true}
                      style={{ marginLeft: "80%", marginTop: "0.5rem" }}
                      variant="success"
                    >
                      See more
                    </Button>{" "}
                  </Row>
                </Card.Body>
              </Card>
            ))
          ) : (
            <Row className="justify-content-center" style={{ margin: "auto" }}>
              <Col md="auto">
                {" "}
                <h3>There's no content to display</h3>
              </Col>
            </Row>
          )}
        </Row>
        <Row>
          <Col className="footer">
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}
