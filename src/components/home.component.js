import React, { Component, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import UserService from "../services/user.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row className="carousel-row-home">
            <Col lg={12}>
              <ControlledCarousel />
            </Col>
          </Row>
          <Row className="first-row-home">
            <Col sm={6}>
              <Card style={{ width: "100%", padding: "0" }}>
                <Card.Img
                  variant="top"
                  className="img-1 broder-shodw-remove"
                  src={`${process.env.PUBLIC_URL}/assets/images/img1.png`}
                />
              </Card>
            </Col>
            <Col sm={5}>
              <Row className="justify-content-md-center first-slide-row">
                <Col md="auto">
                  <h1 className="title1">SUPER ARM</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="first-description-home">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </Col>
              </Row>
              <Row>
                <Button variant="info" className="home-btn-see-more">
                  KNOW MORE ABOUT IT
                </Button>{" "}
              </Row>
              <Row>
                <img
                  className="home-cover-img"
                  src={`${process.env.PUBLIC_URL}/assets/wristcover/openbionics.png`}
                />
              </Row>
              <Row>
                <Button variant="info" className="home-btn-see-more">
                  GET YOUR SUPERARM
                </Button>{" "}
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="second-title-home">
              <h1 className="second-title-home">
                COOL covers for your prosthetics
              </h1>
            </Col>
          </Row>
          <Row fluid>
            <Col className="padding-fix">
              <img
                className="second-img-home"
                src={`${process.env.PUBLIC_URL}/assets/images/storecover.png`}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={3}></Col>

            <Col>
              <p className="second-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </Col>
            <Col sm={3}></Col>
          </Row>

          <Row>
            <Col></Col>
            <Col className="discover-collection-col">
              <Button variant="info" className="btn">
                DIscover our covers collection
              </Button>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className="second-title-home">
              <h1 className="second-title-home">Meet our bionic family</h1>
            </Col>
          </Row>
          <Row className="third-row-home">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={`${process.env.PUBLIC_URL}/assets/images/pic3.png`}
              />
            </Card>
          </Row>
          <Row>
            <Col sm={3}></Col>

            <Col>
              <p className="second-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </Col>
            <Col sm={3}></Col>
          </Row>
          <Row className="discover-collection-col">
            <Col></Col>
            <Col>
              <Button variant="info" className="btn">
                HEAR ABOUT THEIR STROIES
              </Button>
            </Col>
            <Col></Col>
          </Row>
          <Row className="fourth-row-home">
            <Col>
              <Card
                className="border-shodw-remove"
                style={{ width: "100%", padding: "0" }}
              >
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/assets/images/pic4.jpg`}
                />
              </Card>
            </Col>
            <Col>
              <Row>
                <Col>
                  <p className="description-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                    <br /> It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                  <Button variant="info" className="btn-know-more">
                    KNOW MORE ABOUT US
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col sm={3}></Col>
                <Col className="follow-us-col">
                  <span className="follow-us-txt">Follow Us</span>
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
          </Row>
          <Row>
            <Col>
              <Row>
                <Col className="media-news-col">
                  <h1 className="second-title-home">Media & News</h1>

                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                </Col>
              </Row>
              <Row className="news-logo">
                <Col></Col>
                <Col>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/jazeera.jpg`}
                  />
                </Col>
                <Col>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/jazeera.jpg`}
                  />
                </Col>
                <Col>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/jazeera.jpg`}
                  />
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col className="media-news-col ">
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged
                  </p>
                  <Button variant="info" className="btn-read-more">
                    READ MORE ABOUT US
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col className="media-news-col">
                  <h1 className="second-title-home">OUR PARTNERS</h1>

                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                </Col>
              </Row>
              <Row className="news-logo">
                <Col sm={2}></Col>

                <Col>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/pic5.jpg`}
                  />
                </Col>

                <Col sm={2}></Col>
              </Row>
              <Row>
                <Col className="media-news-col ">
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged
                  </p>
                  <Button variant="info" className="btn-read-more">
                    BECOME A PARTNER
                  </Button>
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
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/assets/wristcover/openbionics2.png`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>CUREBionics</h3>
          <p>YOUR LIMB DIFFERENCE IS YOUR SUPER POWER</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/assets/wristcover/openbionics.png`}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>CUREBionics</h3>
          <p>YOUR LIMB DIFFERENCE IS YOUR SUPER POWER</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/assets/images/cover1.jpg`}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>CUREBionics</h3>
          <p>YOUR LIMB DIFFERENCE IS YOUR SUPER POWER</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
