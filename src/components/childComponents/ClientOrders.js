import React, { Component } from "react";
import AuthService from "./../../services/auth-service";
import Axios from "axios";

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
      orderID: null,
      date: "",
      newStatus: "",
      show: false,
    };
  }
  roleManager = () => {
    if (this.state.currentUser.roles[0] === "ROLE_USER") {
      this.setState({
        show: false,
      });
    } else {
      this.setState({
        show: true,
      });
    }
  };
  componentDidMount() {
    this.roleManager();
    if (!this.state.show) {
      const userid = this.state.currentUser.id;
      Axios.get(`http://localhost:8080/api/orders/client/${userid}`)
        .then((Response) => {
          this.setState({
            orders: Response.data,
            show: false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
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
  editClickHandler = (id) => {
    var order = {
      status: this.state.status,
    };
    Axios.put(`http://localhost:8080/api/orders/${id}`, order)
      .then((Response) => {
        //alert("Status Update");
        //window.location.reload(false);
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
      status: "Pending",
    });
  };
  ApprovedStatusClick = () => {
    this.setState({
      processing: false,
      pending: false,
      approved: true,
      status: "Approved",
    });
  };
  processingStatusClick = () => {
    this.setState({
      approved: false,
      pending: false,
      processing: true,
      status: "Processing",
    });
  };
  //-----------------------

  render() {
    const orders = this.state.orders;
    const cartItems = this.state.cartItems;
    var email = this.state.Email;
    var phone = this.state.Phone;
    var name = this.state.FirstName + " " + this.state.LastName;
    //---------Status

    return (
      <div style={{ marginTop: "2rem" }}>
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
                                Details
                              </Button>
                              <Button
                                className={this.state.show ? "" : "hide"}
                                onClick={() => {
                                  this.setState({
                                    showEdit: true,
                                    status: order.status,
                                    orderID: order.id,
                                    date: order.createdAt,
                                  });
                                }}
                                variant="success"
                              >
                                Edit
                              </Button>
                              <Button
                                className={this.state.show ? "" : "hide"}
                                variant="primary"
                                onClick={() => {
                                  this.setState({
                                    Email: order.clientEmail,
                                    FirstName: order.clientFirstName,
                                    LastName: order.clientLastName,
                                    newStatus: order.status,
                                  });
                                  var email = this.state.Email;
                                  var name = this.state.FirstName;
                                  window.open("mailto:test@example.com");
                                }}
                              >
                                Email
                              </Button>
                              <Button
                                className={this.state.show ? "" : "hide"}
                                variant="danger"
                                onClick={() => {
                                  this.setState({
                                    orderID: order.id,
                                    deleteShow: true,
                                  });
                                }}
                              >
                                Delete
                              </Button>
                              <Button
                                className={this.state.show ? "hide" : ""}
                                variant="danger"
                                onClick={() => {
                                  this.setState({
                                    orderID: order.id,
                                    deleteShow: true,
                                  });
                                }}
                              >
                                Cancel
                              </Button>
                            </ButtonGroup>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </Table>
            </Col>
            <Col sm={4}>
              <Card
                className={this.state.showEdit ? "" : "hide"}
                style={{ width: "18rem" }}
              >
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
                    Order N° : {this.state.orderID}
                    <hr />
                    <span style={{ fontSize: "20px" }}>
                      Date : {this.state.date.substr(0, 10)}
                      <br />
                      Time : {this.state.date.substr(11, 5)}
                    </span>
                    <hr />
                    Edit Status
                  </Card.Title>
                  <Row>
                    <Form
                      style={{ margin: "1rem", fontSize: "22px" }}
                      className="form-role"
                    >
                      <div>
                        <Form.Check
                          checked={this.state.pending}
                          onClick={() => {
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
                            this.processingStatusClick();
                          }}
                          inline
                          value="Processing"
                        />
                        Processing
                      </div>
                    </Form>
                  </Row>
                  <Button
                    style={{ float: "right" }}
                    variant="primary"
                    onClick={() => {
                      var order = {
                        status: this.state.status,
                      };
                      Axios.put(
                        `http://localhost:8080/api/orders/${this.state.orderID}`,
                        order
                      )
                        .then((Response) => {
                          alert("Status Update");
                          window.location.reload(false);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
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
                <Container>
                  <Row
                    style={{
                      fontSize: "1.5vw",
                      color: "black",
                    }}
                    className="justify-content-center"
                  >
                    <Col md="auto"> Client: {name}</Col>
                    <Col md="auto">Email: {email}</Col>
                    <Col md="auto">Phone: {phone}</Col>
                  </Row>
                  <hr />
                </Container>

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
          <Row>
            <Modal
              size="sm"
              centered
              style={{ width: "100%" }}
              show={this.state.deleteShow}
              onHide={this.handleClose}
            >
              <Modal.Body>
                <Container>
                  <Row
                    style={{
                      fontSize: "1.5vw",
                      color: "black",
                      marginTop: "1rem",
                      marginBottom: "2rem",
                    }}
                    className="justify-content-center"
                  >
                    <Col md="auto"> Delete Order N°: {this.state.orderID}</Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => {
                    this.setState({
                      deleteShow: false,
                    });
                  }}
                >
                  Close
                </Button>
                <Button
                  variant="danger"
                  style={{ marginLeft: "1rem" }}
                  onClick={() => {
                    Axios.delete(
                      `http://localhost:8080/api/orders/destroy/${this.state.orderID}`
                    )
                      .then(() => {
                        console.log("deleted");
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                    this.setState({
                      deleteShow: false,
                    });
                    window.location.reload();
                  }}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </Row>
        </Container>
      </div>
    );
  }
}
