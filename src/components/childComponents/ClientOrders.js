import React, { Component, useState, ren } from "react";
import AuthService from "./../../services/auth-service";
import Axios from "axios";
import ReactModal from "react-modal";
//---BootStrap Components
import Table from "react-bootstrap/Table";
//-----------------------
import {
  ButtonGroup,
  Button,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Modal,
  Form,
} from "react-bootstrap";
// Icons-------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
//---------------------

export default class ClientOrders extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      orders: [],
      cartItems: [],
      Client: "",
      setShow: false,
      show: false,
      FirstName: "",
      Email: "",
      Phone: "",
      LastName: "",
      processing: "",
      pending: "",
      approved: "",
      showEdit: false,
      status: "",
    };
  }

  componentDidMount() {
    const userid = this.state.currentUser.id;
    Axios.get(`http://localhost:8080/api/orders/`)
      .then((Response) => {
        this.setState({
          orders: Response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleClose = () => {
    this.setState({
      setShow: false,
    });
  };
  handleShow = () => {
    this.setState({
      setShow: true,
    });
  };
  //-----------Edit
  editClickHandler = (order) => {
    var id = order.id;
    Axios.put(`http://localhost:8080/api/orders/${id}`)
      .then((Response) => {
        alert("Status Update");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  viewClickHandler = (order) => {
    this.handleShow();
    var id = order.id;
    Axios.get(`http://localhost:8080/api/orders/details/${id}`)
      .then((Response) => {
        this.setState({
          cartItems: Response.data.cart,
          Email: Response.data.clientEmail,
          FirstName: Response.data.clientFirstName,
          LastName: Response.data.clientLastName,
          Phone: Response.data.phone,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //-------------------------
  pendingStatusClick = () => {
    this.setState({
      pending: true,
      approved: false,
      processing: false,
    });
  };
  ApprovedStatusClick = () => {
    this.setState({
      processing: false,
      pending: false,
      approved: true,
    });
  };
  processingStatusClick = () => {
    this.setState({
      approved: false,
      pending: false,
      processing: true,
    });
  };
  //-----------------------

  render() {
    const orders = this.state.orders;
    const cartItems = this.state.cartItems;
    var email = this.state.Email;
    var phone = this.state.Phone;
    var name = this.state.FirstName + " " + this.state.LastName;

    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Table
                style={{ width: "100%", textAlign: "center" }}
                bordered
                hover
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Total</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length
                    ? orders.map((order) => (
                        <tr>
                          <td key={order.id}>{order.id}</td>
                          <td>
                            {order.total}
                            <span style={{ fontSize: "10px" }}>TND</span>{" "}
                          </td>
                          <td>{order.createdAt.substr(0, 10)} </td>
                          <td>{order.status} </td>
                          <td>
                            <ButtonGroup aria-label="Basic example">
                              <Button
                                variant="secondary"
                                onClick={() => {
                                  this.viewClickHandler(order);
                                }}
                              >
                                View
                              </Button>
                              <Button
                                onClick={() => {
                                  this.setState({
                                    showEdit: true,
                                    status: order.status,
                                  });
                                }}
                                variant="success"
                              >
                                Edit
                              </Button>
                              <Button variant="primary">Email</Button>
                              <Button variant="danger">Delete</Button>
                            </ButtonGroup>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </Table>
            </Col>
            <Col sm={4}>
              <Card style={{ width: "18rem" }}>
                <Row className="justify-content-center">
                  <Col md="auto">
                    <FontAwesomeIcon
                      style={{ fontSize: "4rem" }}
                      id="exitIcon"
                      icon={faReceipt}
                    />
                  </Col>
                </Row>
                <Card.Body>
                  <Card.Title
                    style={{
                      textAlign: "center",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    Edit Status
                  </Card.Title>
                  <Row>
                    <Form style={{ margin: "1rem" }} className="form-role">
                      <div>
                        <Form.Check
                          checked={this.state.pending}
                          onClick={() => {
                            this.setState({
                              status: "Pending",
                            });

                            this.pendingStatusClick();
                          }}
                          value="Pending"
                          inline
                        />
                        Pending
                      </div>
                      <div>
                        <Form.Check
                          checked={this.state.approved}
                          onClick={() => {
                            this.setState({
                              status: "Pending",
                            });
                            this.ApprovedStatusClick();
                          }}
                          value="Approved"
                          inline
                        />
                        Approved
                      </div>
                      <div>
                        <Form.Check
                          checked={this.state.processing}
                          onClick={() => {
                            this.setState({
                              status: "Pending",
                            });
                            this.processingStatusClick();
                          }}
                          inline
                          value="Processing"
                        />
                        Processing
                      </div>
                    </Form>
                  </Row>
                  <Button style={{ float: "right" }} variant="primary">
                    Save
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Modal
              size="lg"
              centered
              style={{ width: "100%" }}
              show={this.state.setShow}
              onHide={this.handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>Order Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Row>
                    <Col>
                      <Col>Client: {name}</Col>
                    </Col>
                  </Row>
                  <Row>
                    <Col>Email: {email} </Col>
                  </Row>
                  <Row>
                    <Col>Phone: {phone}</Col>
                  </Row>
                </Row>

                <Row>
                  <Col>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Product</th>
                          <th>Side</th>
                          <th>Size</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.length
                          ? cartItems.map((item) => (
                              <tr>
                                <td>{item.id} </td>
                                <td>{item.title}</td>
                                <td>{item.side}</td>
                                <td>{item.size} </td>
                                <td>{item.quantity} </td>
                                <td>{item.total} </td>
                              </tr>
                            ))
                          : null}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Row>
        </Container>
      </div>
    );
  }
}
