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
      price: null,
      qty: null,
      side: "",
      product: [],
      total: null,
      clientid: "",
      coverid: "",
      itemId: "",
      totalofall: null,
      cartITems: [JSON.stringify(localStorage.getItem("cartItems"))],
      image: localStorage.getItem("imagepath"),
    };
  }
  qtyChangeHandler = (event) => {
    this.setState({
      qty: event.target.value,
    });
    //localStorage.getItem("")
  };
  componentDidMount = () => {
    var cartItems = JSON.parse(localStorage.getItem("cartItems"));

    console.log("responseeeeee " + Array.isArray(cartItems));
  };
  updateOrderHandler = () => {
    localStorage.removeItem("order");
    localStorage.removeItem("orderId");
    localStorage.setItem("cart", 0);
    this.cartItemsHandler();
    let Details = JSON.parse(localStorage.getItem("orderId"));
    let total = Details.total;
    Axios.put(`http://localhost:8080/api/orders/${Details.id}`, {
      total: total,
    })
      .then(() => {
        console.log("order updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //-------------------------------------
  cartsDataHandler = () => {
    if (this.state.currentUser === null) {
      alert("login or signup to checkout");
    } else {
      //calcul total produits
      var cartItems = JSON.parse(localStorage.getItem("cartItems"));
      var totalCart = 0;
      for (let index = 0; index < cartItems.length; index++) {
        totalCart += cartItems[index].total;
      }
      console.log(totalCart);
      var order = {
        clientid: this.state.currentUser.id,
        total: totalCart,
      };
      Axios.post(`http://localhost:8080/api/orders/`, order)
        .then((Response) => {
          const id = Response.data.id;
          for (let index = 0; index < cartItems.length; index++) {
            //carts table adding row by row
            var item = {
              price: cartItems[index].price,
              clientId: this.state.currentUser.id,
              productId: cartItems[index].id,
              quantity: cartItems[index].qty,
              total: cartItems[index].total,
              side: cartItems[index].side,
              size: cartItems[index].size,
              title: cartItems[index].title,
              orderId: id,
            };
            //post method in carts table
            Axios.post(`http://localhost:8080/api/cart/`, item)
              .then((data) => {
                var newOrderDetails = {
                  id: item.orderId,
                  total: totalCart,
                };
                console.log("new total :" + newOrderDetails.total);
                localStorage.setItem(
                  "orderId",
                  JSON.stringify(newOrderDetails)
                );
                console.log("Cart Item added");

                localStorage.setItem("selected", "orders");
              })
              .catch((err) => {
                console.log(err);
              });
          }
          window.location.href = "/user";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //-------------------------------------
  render() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems"));
    var totalofall = 0;
    if (Array.isArray(cartItems) && cartItems.length > 0) {
      cartItems[cartItems.length - 1].qty = this.state.qty;
      var prodPrice = cartItems[cartItems.length - 1].price;
      var total = prodPrice * cartItems[cartItems.length - 1].qty;
      //localStorage.setItem("total", totalofall);
      cartItems[cartItems.length - 1].total = total;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      for (let index = 0; index < cartItems.length; index++) {
        totalofall += cartItems[index].total;
      }
    } else {
      for (let index = 0; index < cartItems.length; index++) {
        totalofall += cartItems[index].total;
      }
    }
    localStorage.setItem("total", totalofall);

    return (
      <div>
        {Array.isArray(cartItems) && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Container style={{ marginTop: "1rem" }} fluid>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <Card
                    className="cart-superhero"
                    style={{ width: "53rem", height: "20rem" }}
                  >
                    <Row>
                      <Col>
                        <Card.Img
                          style={{ width: "110%", transformRotate: "20deg" }}
                          className="supercart-img"
                          variant="top"
                          src={`${process.env.PUBLIC_URL}/assets/clients/${item.image}`}
                        />
                      </Col>
                      <Col xs={9}>
                        <FontAwesomeIcon
                          id="exitIcon"
                          icon={faTimesCircle}
                          onClick={() => {
                            var cartItems = JSON.parse(
                              localStorage.getItem("cartItems")
                            );
                            var index = cartItems
                              .map(function (e) {
                                return e.index;
                              })
                              .indexOf(item.index);
                            console.log(index);
                            if (index > -1) {
                              cartItems.splice(index, 1);
                            }
                            localStorage.setItem(
                              "cartItems",
                              JSON.stringify(cartItems)
                            );
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

                              <InputGroup className="mb-3">
                                <FormControl
                                  aria-label="Default"
                                  aria-describedby="inputGroup-sizing-default"
                                  onChange={this.qtyChangeHandler}
                                  defaultValue={item.qty}
                                />
                              </InputGroup>
                            </Col>
                            <Col md="auto">
                              <Card.Text className="super-cart-title ">
                                Price
                              </Card.Text>
                              <hr />

                              <Card.Text className="details">
                                {item.price}
                                <span style={{ fontSize: "10px" }}> TND</span>
                              </Card.Text>
                            </Col>
                            <Col xs={3} className="cart-total">
                              <Card.Text className="super-cart-title">
                                Total
                              </Card.Text>
                              <hr />

                              <Card.Text className="details">
                                {item.total}{" "}
                                <span style={{ fontSize: "10px" }}> TND</span>
                              </Card.Text>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>{" "}
              </Row>
              <Row>
                <Col sm={9}></Col>
                <Col
                  style={{
                    marginTop: "0.5rem",
                    marginBottom: "1rem",
                  }}
                ></Col>
              </Row>
            </Container>
          ))
        ) : (
          <Container>
            <Row>
              <Col>
                <h1>Please add products to you cart</h1>
              </Col>
            </Row>
          </Container>
        )}
        <Container fluid>
          <Row>
            <Col sm={7}></Col>
            <Col>Total: {totalofall}</Col>
          </Row>
          <Row fluid>
            <Col xs={7}></Col>
            <Col>
              <Link to="/shop">
                <Button
                  onClick={() => {
                    const count = JSON.parse(localStorage.getItem("cart"));
                    var newcount = count + 1;
                    localStorage.setItem("cart", newcount);
                    localStorage.setItem("product", "");
                  }}
                  className="super-cart-btns"
                  variant="success"
                >
                  Continue Shopping
                </Button>{" "}
              </Link>
              <Button
                className="super-cart-btns"
                variant="primary"
                onClick={this.cartsDataHandler}
              >
                Checkout
              </Button>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
