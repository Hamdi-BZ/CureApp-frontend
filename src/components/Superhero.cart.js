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
//-------------
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
      total: 0,
      clientid: "",
      coverid: "",
      status: "pending",
    };
  }
  componentDidMount = () => {
    var order = JSON.parse(this.state.order);
    var check = {
      type: order.type,
      //side: order.side,
      size: order.size,
    };
    Axios.post(`http://localhost:8080/api/products/orders`, check)
      .then((response) => {
        this.setState({
          clientid: this.state.currentUser.id,
          coverid: response.data[0].id,
          orderedQte: this.state.qty,
          price: response.data[0].productPrice,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  qtyChangeHandler = (event) => {
    this.setState({
      qty: event.target.value,
    });
  };
  render() {
    const price = this.state.price;
    const qty = this.state.qty;
    var total = qty * price;
    var order = JSON.parse(this.state.order);
    var title = order.type;
    var side = order.side;
    var size = order.size;

    return (
      <div>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="auto">
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
                    <Card.Body>
                      <Row className="cart-card-details">
                        <Col xs={5}>
                          <Card.Text className="super-cart-title">
                            Details
                          </Card.Text>
                          <Card.Text className="details">
                            {title} Cover
                          </Card.Text>
                          <Card.Text className="details">
                            Side :{" "}
                            <span className="ordered-prod-details">{side}</span>
                          </Card.Text>
                          <Card.Text className="details">
                            Size :{" "}
                            <span className="ordered-prod-details">{size}</span>
                          </Card.Text>
                        </Col>
                        <Col xs={2}>
                          <Card.Text className="super-cart-title">
                            Qty
                          </Card.Text>
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
                          <Card.Text className="details">{price} $</Card.Text>
                        </Col>
                        <Col xs={3} className="cart-total">
                          <Card.Text className="super-cart-title">
                            Total
                          </Card.Text>
                          <Card.Text className="details">{total} $</Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              <Row fluid>
                <Col xs={7}>
                  <Button variant="outline-danger">Delete All</Button>{" "}
                </Col>
                <Col>
                  <Link to="/shop">
                    <Button className="super-cart-btns" variant="success">
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
