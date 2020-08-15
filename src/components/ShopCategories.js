import React, { Component, useState } from "react";
import Axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Jumbotron,
  Image,
} from "react-bootstrap";
import Footer from "./Footer";

export default class ShopCategories extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      categories: [],
      categoryId: "",
      types: [],
    };
  }
  componentDidMount = () => {
    Axios.get(`http://localhost:8080/api/test/category`)
      .then((Response) => {
        let data = Response.data;
        this.setState({
          categories: data,
        });
        console.log(this.state.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  typesHandler = (type) => {
    Axios.get(`http://localhost:8080/api/test/type/${type}`)
      .then((data) => {
        console.log(data.data);
        this.setState({
          types: data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  categoryIdHandler = () => {
    var item = this.state.categoryId;
    localStorage.setItem("categoryId", item);
  };
  render() {
    var categories = this.state.categories;
    var types = this.state.types;
    return (
      <div>
        <Image
          src={`${process.env.PUBLIC_URL}/assets/images/storecover.png`}
          fluid
        />
        <Container fluid className="carsoule-display">
          {/*<Row>
            <Col sm={20}>
              <ControlledCarousel />
            </Col>
          </Row>*/}
          <Row className="jumbotron-shop">
            <Col>
              <Jumbotron>
                <h1>Cure Bionics</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </Col>
            <Col>
              <Jumbotron>
                <h1>Order Arm</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="danger">Order Arm</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row fluid>
            <Col>
              <Accordion>
                {categories.length
                  ? categories.map((category) => (
                      <Card className="category-types">
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="light"
                            eventKey={category.id}
                          >
                            <Container className="category-accordion">
                              <Row>
                                <Col sm={8}>
                                  <div className="title">
                                    {" "}
                                    {category.title}{" "}
                                  </div>{" "}
                                  <div className="category-desc">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book..{" "}
                                  </div>
                                </Col>
                                <Col sm={4}>
                                  <Row>
                                    <Col>
                                      <img
                                        src={`${process.env.PUBLIC_URL}/assets/TypesImages/ironman.png`}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col></Col>
                                    <Col sm={4}>
                                      <Button
                                        className="btn-type-show"
                                        onClick={() => {
                                          this.typesHandler(category.id);
                                        }}
                                        variant="success"
                                      >
                                        See More
                                      </Button>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Container>
                          </Accordion.Toggle>
                        </Card.Header>

                        <Accordion.Collapse eventKey={category.id}>
                          <Card.Body className="accordion-types">
                            {types.length
                              ? types.map((type) => (
                                  <Card
                                    className="types-cards-display"
                                    style={{ width: "18rem" }}
                                  >
                                    <Card.Img
                                      variant="top"
                                      src={`${process.env.PUBLIC_URL}/assets/TypesImages/rsz_ironman.png`}
                                    />
                                    <Card.Body>
                                      <Card.Title>{type.title}</Card.Title>
                                      <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                      </Card.Text>
                                      <Button variant="primary">
                                        Go somewhere
                                      </Button>
                                    </Card.Body>
                                  </Card>
                                ))
                              : null}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    ))
                  : null}
              </Accordion>
            </Col>
          </Row>
        </Container>
        <Container className="shop-footer" fluid>
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
