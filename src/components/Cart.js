import React, { Component } from "react";
import { Link } from "react-router-dom";
//---Components
import Modal from "react-modal";
//---Services
import AuthService from "../../src/services/auth-service";
//---BootStrap Components --------
import { Container, Row, Col, Button } from "react-bootstrap";
import Axios from "axios";
//--------------------------------
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      rightcover: localStorage.getItem("rightcoverimgpath"),
      leftcover: localStorage.getItem("leftcoverimgpath"),
      wristcover: localStorage.getItem("wristimgpath"),
      palmcover: localStorage.getItem("handcoverimgpath"),
      side: localStorage.getItem("side"),
      size: localStorage.getItem("size"),
      setModalShow: false,
      userid: null,
    };
  }
  openModal = () => {
    this.setState({ setModalShow: true });
  };
  closeModal = () => {
    this.setState({ setModalShow: false });
  };
  /* componentDidMount() {
    Axios.get("http://localhost:8080/api/test/orders/spectrum/1")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  } */
  ConfirmOnClickHandler = (e) => {
    if (this.state.currentUser === null) {
      this.setState({
        setModalShow: true,
      });
    } else {
      const state = this.state;
      const data = {
        userid: state.currentUser.id,
        side: state.side,
        size: state.size,
        rightcover: state.rightcover,
        leftcover: state.leftcover,
        wristcover: state.wristcover,
        palmcover: state.palmcover,
      };
      Axios.post("http://localhost:8080/api/test/orders/spectrum", data)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };
    const setModalShow = this.state.setModalShow;
    const state = this.state;
    return (
      <div>
        <Container fluid className="containercustom">
          <Row className="justify-content-md-center cartHeader">
            <Col>Item</Col>
            <Col>Designation</Col>
            <Col>Price</Col>
            <Col>Quantity</Col>
            <Col>Total</Col>
          </Row>
          <Row className="justify-content-md-center greyColor">
            <Col className="itemImage">
              {" "}
              <img alt="right cover" src={state.rightcover} />{" "}
            </Col>
            <Col className="cartItems">
              <div> Right Cover </div>
            </Col>
            <Col className="cartItems">
              <div> 100 TND </div>{" "}
            </Col>
            <Col className="cartItems">
              <div> 1</div>{" "}
            </Col>
            <Col className="cartItems">
              <div> 100 TND</div>{" "}
            </Col>
          </Row>
          <Row className="justify-content-md-center greyColor">
            <Col className="itemImage">
              <img alt="left cover" src={state.leftcover} />
            </Col>
            <Col className="cartItems">
              <div> Left Cover</div>{" "}
            </Col>
            <Col className="cartItems">
              <div> 100 TND</div>{" "}
            </Col>
            <Col className="cartItems">
              <div> 1</div>{" "}
            </Col>
            <Col className="cartItems">
              <div> 100 TND</div>{" "}
            </Col>
          </Row>
          <Row className="justify-content-md-center greyColor">
            <Col className="itemImage">
              <img alt="wrist cover" src={state.wristcover} />
            </Col>
            <Col className="cartItems">
              <div> wrist Cover</div>{" "}
            </Col>
            <Col className="cartItems">
              <div> 50 TND</div>{" "}
            </Col>
            <Col className="cartItems">
              <div> 2</div>{" "}
            </Col>
            <Col className="cartItems">
              <div> 100 TND</div>{" "}
            </Col>
          </Row>
          <Row className="justify-content-md-center greyColor">
            <Col className="itemImage">
              <img alt="handpalm cover" src={state.palmcover} />
            </Col>
            <Col className="cartItems">
              <div> Palm Cover</div>{" "}
            </Col>
            <Col className="cartItems">
              <div> 50 TND</div>{" "}
            </Col>
            <Col className="cartItems">
              <div> 1</div>{" "}
            </Col>
            <Col className="cartItems">
              <div> 50 TND</div>{" "}
            </Col>
          </Row>
          <Row className="justify-content-md-center greyColor cartFooter">
            <Col className="cartTotal">Side: {state.side}</Col>
            <Col>
              <div className="cartTotalValue">Size: {state.size}</div>
            </Col>
          </Row>
          <Row className="justify-content-md-center greyColor cartFooter">
            <Col className="cartTotal">Total Cart</Col>
            <Col>
              <div className="cartTotalValue">400 TND</div>
            </Col>
          </Row>
          <Row className="justify-content-md-center greyColor">
            <Col className="cartBtns">
              {" "}
              <Link to="/shop/spectrum">
                <Button variant="success">Continue Shopping</Button>{" "}
              </Link>
              <Button
                className="cartCheckoutBtn"
                variant="primary"
                onClick={this.ConfirmOnClickHandler}
              >
                Checkout
              </Button>{" "}
            </Col>
          </Row>
        </Container>
        {setModalShow && (
          <Modal
            style={customStyles}
            isOpen={true}
            onAfterClose={this.closeModal}
          >
            <Button
              className="modalclose"
              variant="danger"
              onClick={this.closeModal}
            >
              X
            </Button>
            <div>
              <div>
                <p className="modaldesc">Login or Signup First</p>
                <Link to="/login">
                  <Button className="modallogin" variant="primary">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="modalsignup" variant="outline-success">
                    Sign up{" "}
                  </Button>
                </Link>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
