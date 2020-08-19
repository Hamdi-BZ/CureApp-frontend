import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import AuthService from "./../services/auth-service";
// BootStrap
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
// Icons-------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
//---------------------
export default class SuperheroCart extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      order: localStorage.getItem("order"),
      price: null,
      qty: null,
      side: "",
      orders: [],
      product: [],
      total: null,
      clientid: "",
      coverid: "",
      status: "pending",
      itemId: "",
    };
  }
  componentDidMount = () => {
    var order = JSON.parse(localStorage.getItem("order"));
    console.log(order);
    if (this.state.currentUser.id !== null) {
      let clientId = this.state.currentUser.id;
      Axios.get(`http://localhost:8080/api/cart/items/${clientId}`)
        .then((Response) => {
          this.setState({
            orders: Response.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  /* deleteCartItemHandler = () => {
    Axios.delete(`http://localhost:8080/api/cart/items/${itemId}`)
      .then(() => {
        resizeBy.status(200).send("Cart item deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };*/
  qtyChangeHandler = (event) => {
    this.setState({
      qty: event.target.value,
    });
  };
  cartItemsHandler = () => {
    var order = JSON.parse(localStorage.getItem("order"));

    Axios.post(`http://localhost:8080/api/products/orders`, order).then(
      (data) => {
        data
          .status(200)
          .send("Cart Item added")
          .catch((err) => {
            data.status(500).send("error");
          });
      }
    );
  };
  render() {
    var cartItems = this.state.orders;
    var order = JSON.parse(localStorage.getItem("order"));

    if (order !== null) {
      const price = order.productPrice;
      const qty = this.state.qty;
      var total = qty * price;
      var title = order.productTitle;
      var side = order.side;
      var size = order.size;
    }
    return (
      <div>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="auto">
              {cartItems.length
                ? cartItems.map((item) => (
                    <Card className="cart-superhero" style={{ width: "50rem" }}>
                      <Row>
                        <Col>
                          <Card.Img
                            className="supercart-img"
                            variant="top"
                            src={`${process.env.PUBLIC_URL}/assets/images/superman.png`}
                          />
                        </Col>
                        <Col xs={9}>
                          <FontAwesomeIcon
                            id="exitIcon"
                            icon={faTimesCircle}
                            onClick={() => {
                              Axios.delete(
                                `http://localhost:8080/api/cart/${item.id}`
                              )
                                .then(() => {
                                  alert("item deleted");
                                  window.location.reload(false);
                                })
                                .catch((err) => {
                                  console.log(err);
                                });
                            }}
                          />
                          <Card.Body>
                            <Row className="cart-card-details">
                              <Col xs={5}>
                                <Card.Text className="super-cart-title">
                                  Details
                                </Card.Text>
                                <hr />
                                <Card.Text className="details details-title">
                                  {item.title}
                                </Card.Text>
                                <Card.Text className="details">
                                  Side :{" "}
                                  <span className="ordered-prod-details">
                                    {item.side}
                                  </span>
                                </Card.Text>
                                <Card.Text className="details">
                                  Size :{" "}
                                  <span className="ordered-prod-details">
                                    {item.size}
                                  </span>
                                </Card.Text>
                              </Col>
                              <Col xs={2}>
                                <Card.Text className="super-cart-title">
                                  Qty
                                </Card.Text>
                                <hr />

                                <Card.Text className="super-cart-title">
                                  {item.quantity}
                                </Card.Text>
                              </Col>
                              <Col md="auto">
                                <Card.Text className="super-cart-title ">
                                  Price
                                </Card.Text>
                                <hr />

                                <Card.Text className="details">
                                  {item.price}$
                                </Card.Text>
                              </Col>
                              <Col xs={3} className="cart-total">
                                <Card.Text className="super-cart-title">
                                  Total
                                </Card.Text>
                                <hr />

                                <Card.Text className="details">
                                  {item.total} $
                                </Card.Text>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  ))
                : null}
              {order ? (
                <Card className="cart-superhero" style={{ width: "50rem" }}>
                  <Row>
                    <Col>
                      <Card.Img
                        className="supercart-img"
                        variant="top"
                        src={`${process.env.PUBLIC_URL}/assets/images/superman.png`}
                      />
                    </Col>
                    <Col xs={9}>
                      <FontAwesomeIcon
                        id="exitIcon"
                        icon={faTimesCircle}
                        onClick={() => {
                          localStorage.removeItem("order");
                          window.location.reload(false);
                        }}
                      />
                      <Card.Body>
                        <Row className="cart-card-details">
                          <Col xs={5}>
                            <Card.Text className="super-cart-title">
                              Details
                            </Card.Text>
                            <hr />
                            <Card.Text className="details details-title">
                              {order.title}
                            </Card.Text>
                            <Card.Text className="details">
                              Side :{" "}
                              <span className="ordered-prod-details">
                                {order.side}
                              </span>
                            </Card.Text>
                            <Card.Text className="details">
                              Size :{" "}
                              <span className="ordered-prod-details">
                                {order.size}
                              </span>
                            </Card.Text>
                          </Col>
                          <Col xs={2}>
                            <Card.Text className="super-cart-title">
                              Qty
                            </Card.Text>
                            <hr />

                            <InputGroup className="mb-3">
                              <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={this.qtyChangeHandler}
                              />
                            </InputGroup>
                          </Col>
                          <Col md="auto">
                            <Card.Text className="super-cart-title ">
                              Price
                            </Card.Text>
                            <hr />

                            <Card.Text className="details">
                              {order.price} $
                            </Card.Text>
                          </Col>
                          <Col xs={3} className="cart-total">
                            <Card.Text className="super-cart-title">
                              Total
                            </Card.Text>
                            <hr />

                            <Card.Text className="details">{total} $</Card.Text>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              ) : null}

              <Row fluid>
                <Col xs={7}>
                  <Button variant="outline-danger">Delete All</Button>{" "}
                </Col>
                <Col>
                  <Link to="/shop">
                    <Button
                      onClick={() => {
                        var prod = JSON.parse(localStorage.getItem("order"));
                        let size = prod.size;
                        let side = prod.side;
                        let price = prod.productPrice;

                        let id = JSON.parse(localStorage.getItem("orderId"));
                        console.log(id);
                        var item = {
                          price: price,
                          clientId: this.state.currentUser.id,
                          productId: prod.productId,
                          quantity: this.state.qty,
                          total: price * this.state.qty,
                          side: side,
                          size: size,
                          title: prod.productTitle,
                          orderId: id,
                        };
                        Axios.post(`http://localhost:8080/api/cart/`, item)
                          .then((data) => {
                            data.status(200).send("Cart Item added");
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                        localStorage.removeItem("order");
                      }}
                      className="super-cart-btns"
                      variant="success"
                    >
                      Continue Shopping
                    </Button>{" "}
                  </Link>
                  <Button className="super-cart-btns" variant="primary">
                    Checkout
                  </Button>{" "}
                </Col>
              </Row>
            </Col>{" "}
          </Row>
        </Container>
      </div>
    );
  }
}
