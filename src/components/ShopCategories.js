import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
//------REDUX
import {
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
//---------------------------
import { faLevelUpAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//---------------------------
import Axios from "axios";
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
      products: [],
      test: "",
    };
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  componentDidMount = () => {
    Axios.get(`http://localhost:8080/api/test/category`)
      .then((Response) => {
        let data = Response.data;
        this.setState({
          categories: data,
        });
        console.log(this.state.categories);
        Events.scrollEvent.register("begin", function () {
          console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function () {
          console.log("end", arguments);
        });
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
  cartItemHandler = (product) => {
    var data = JSON.parse(localStorage.getItem("cartItems"));
    if (data === null) {
      var cart = [];
      var prod = {
        id: product.id,
        title: product.productTitle,
        price: product.productPrice,
        type: product.typeId,
      };
      cart.push(prod);
      var JSONreadyCart = JSON.stringify(cart);
      localStorage.setItem("cartItems", JSONreadyCart);
    } else {
      var cart = [data];
      var prod = {
        id: product.id,
        title: product.productTitle,
        price: product.productPrice,
        type: product.typeId,
      };
      cart.push(prod);
      var JSONreadyCart = JSON.stringify(cart);
      localStorage.setItem("cartItems", JSONreadyCart);
    }
    /* localStorage.setItem(
      "product",
      JSON.stringify(prod)
    );*/
  };
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("this-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
    var count = localStorage.getItem("cart");
    var cart = {
      position: "fixed",
      top: "10%",
      left: "94%",

      fontSize: "30px",
      listStyleType: "none",
    };

    var categories = this.state.categories;
    var types = this.state.types;
    var products = this.state.products;
    var index = 300;
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
                                      <a
                                        onClick={() => {
                                          scroll.scrollMore(index);
                                          index = index + 200;
                                        }}
                                      >
                                        <Button
                                          className="btn-type-show"
                                          onClick={() => {
                                            this.typesHandler(category.id);
                                          }}
                                          variant="success"
                                        >
                                          See More
                                        </Button>
                                      </a>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Container>
                          </Accordion.Toggle>
                        </Card.Header>

                        <Accordion.Collapse eventKey={category.id}>
                          <Card.Body
                            id="this-element"
                            style={{ display: "wrap", float: "left" }}
                            className="accordion-types"
                          >
                            {types.length ? (
                              types.map((type) => (
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
                                    <a onClick={() => scroll.scrollMore(400)}>
                                      <Button
                                        variant="primary"
                                        onClick={() => {
                                          Axios.get(
                                            `http://localhost:8080/api/products/${type.id}`
                                          )
                                            .then((data) => {
                                              this.setState({
                                                products: data.data,
                                              });
                                              console.log(this.state.products);
                                            })
                                            .catch((err) => {
                                              console.log(err);
                                            });
                                        }}
                                      >
                                        Explore
                                      </Button>
                                    </a>
                                  </Card.Body>
                                </Card>
                              ))
                            ) : (
                              <h1>
                                There's no availbale products at the moment
                                please visit us later{" "}
                              </h1>
                            )}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    ))
                  : null}
              </Accordion>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "2rem",
              display: "wrap",
              flexWrap: "wrap",

              padding: "1rem",
            }}
          >
            {products.length ? (
              products.map((product) => (
                <Col>
                  <Card
                    style={{
                      width: "21rem",
                      float: "left",
                    }}
                  >
                    <Card.Img
                      id="product-img-card"
                      variant="top"
                      src={`${process.env.PUBLIC_URL}/assets/wristcover/openbionics.png`}
                    />
                    <Card.Body>
                      <Card.Text
                        style={{
                          fontSize: "1.5vw",
                          fontWeight: "600",
                          color: "black",
                        }}
                      >
                        <span>Product Name : </span> <br />
                        <span
                          style={{
                            color: "#343a40",
                            marginLeft: "0.5rem",
                            fontWeight: "600",
                            textTransform: "capitalize",
                          }}
                        >
                          {" "}
                          {product.productTitle}
                        </span>
                      </Card.Text>
                      <Card.Text
                        style={{
                          fontSize: "1.5vw",
                          fontWeight: "600",
                          color: "black",
                        }}
                      >
                        <span>Description : </span>
                        <br />
                        <span
                          style={{
                            color: "#343a40",
                            marginLeft: "0.5rem",
                            fontWeight: "600",
                            textTransform: "capitalize",
                          }}
                        >
                          {" "}
                          {product.productDescription}
                        </span>
                      </Card.Text>

                      <Card.Text
                        style={{
                          fontSize: "1.5vw",
                          fontWeight: "600",
                          color: "black",
                        }}
                      >
                        <span>Price : </span>
                        <br />
                        <span
                          style={{
                            color: "#343a40",
                            marginLeft: "0.5rem",
                            fontWeight: "600",
                            textTransform: "capitalize",
                          }}
                        >
                          {" "}
                          {product.productPrice}
                          <span style={{ fontSize: "10px" }}> TND</span>
                        </span>
                      </Card.Text>
                      <Link to="/shop/display">
                        <Button
                          style={{
                            float: "right",
                            marginRight: "0.5rem",
                            marginTop: "1rem",
                          }}
                          variant="outline-primary"
                          onClick={() => {
                            var data = JSON.parse(
                              localStorage.getItem("cartItems")
                            );
                            var cart = JSON.parse(localStorage.getItem("cart"));
                            var prod = {
                              index: cart,
                              id: product.id,
                              title: product.productTitle,
                              price: product.productPrice,
                              type: product.typeId,
                              side: "",
                              size: "",
                              qty: 0,
                              total: 0,
                            };
                            var cart = [];
                            var readyProd = JSON.stringify(prod);
                            localStorage.setItem("product", readyProd);
                            if (data === null) {
                              cart.push(prod);
                              var JSONreadyCart = JSON.stringify(cart);
                              localStorage.setItem("cartItems", JSONreadyCart);
                            } else {
                              var cartItems = JSON.parse(
                                localStorage.getItem("cartItems")
                              );

                              cartItems[cartItems.length - 1].itemId =
                                cartItems[cartItems.length - 1].itemId + 1;
                              localStorage.setItem(
                                "cartItems",
                                JSON.stringify(cartItems)
                              );
                              cart = data;
                              cart.push(prod);
                              var JSONreadyCart = JSON.stringify(cart);
                              localStorage.setItem("cartItems", JSONreadyCart);
                            }
                          }}
                        >
                          {" "}
                          Explore
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <h3 style={{ marginLeft: "15%" }}>
                There's no availbale products please select a category and a
                type
              </h3>
            )}
          </Row>
          <a onClick={this.scrollToTop}>
            <FontAwesomeIcon
              style={{
                float: "right",
                fontSize: "x-large",
              }}
              icon={faLevelUpAlt}
            />{" "}
          </a>
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
