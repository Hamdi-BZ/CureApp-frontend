import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Modal,
  CardColumns,
} from "react-bootstrap";
import AuthService from "./../../services/auth-service";
import Image from "./images";

import {
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import Axios from "axios";
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: AuthService.getCurrentUser(),
      editor: "",
      title: "",
      description: "",
      page: localStorage.getItem("show"),
      image: "",
      ID: null,
      editTitle: "",
      editDescription: "",
      editImage: "",
      contents: [],
      showAdd: false,
      showEdit: false,
      deleteShow: false,
    };
  }
  titleHandler = (event) => {
    this.setState({ title: event.target.value });
  };
  descriptionHandler = (event) => {
    this.setState({ description: event.target.value });
  };
  componentDidMount = () => {
    var page = localStorage.getItem("show");
    this.getContentHandler(page);
  };
  pageHandler = (event) => {
    this.setState({ page: event.target.value });
    localStorage.setItem("show", event.target.value);
    this.getContentHandler(localStorage.getItem("show"));
  };
  edittitleHandler = (event) => {
    this.setState({ editTitle: event.target.value });
  };
  editdescriptionHandler = (event) => {
    this.setState({ editDescription: event.target.value });
  };
  editimageHandler = (event) => {
    this.setState({ editImage: event.target.value });
  };
  //---- ADDD
  addContentHandler = () => {
    var content = {
      editor: this.state.user.id,
      title: this.state.title,
      description: this.state.description,
      image: localStorage.getItem("imagepath"),
      page: this.state.page,
    };
    Axios.post(`http://localhost:8080/api/contents/`, content)
      .then(() => {
        localStorage.setItem("show", `${this.state.page}`);

        alert("Article added to " + this.state.page);
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // retrive content based on page
  getContentHandler = (page) => {
    Axios.get(`http://localhost:8080/api/contents/${page}`)
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
  // Edit
  editContentHandler = () => {
    const imagepath = localStorage.getItem("imagepath");
    var data = {
      title: this.state.editTitle,
      description: this.state.editDescription,
      image: imagepath,
    };
    Axios.put(`http://localhost:8080/api/contents/${this.state.ID}`, data)
      .then((response) => {
        localStorage.setItem("show", this.state.page);
        alert("Updated");
        console.log(response);
        window.location.reload(true);
      })
      .catch((err) => {
        alert("Something Went Wrong");
        console.log(err);
      });
  };
  // Delete -------------------
  deleteContentHandler = () => {};
  handleClose = () => {
    this.setState({
      deleteShow: false,
    });
  };
  handleShow = () => {
    this.setState({
      deleteShow: true,
    });
  };
  render() {
    const contents = this.state.contents;
    return (
      <div style={{ marginTop: "2rem" }}>
        <Container>
          <Row>
            <Col sm={5}>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label style={{ fontSize: "1.5vw", fontWeight: "600" }}>
                    Choose page's Content to display:
                  </Form.Label>
                  <Form.Control
                    style={{ fontSize: "1.5vw", color: "black" }}
                    onChange={this.pageHandler}
                    as="select"
                    defaultValue={localStorage.getItem("show")}
                  >
                    <option value="null">Choose page</option>
                    <option value="Home Page">Home Page</option>
                    <option value="News Page">News Page</option>
                    <option value="Actualities Page">Actualities Page</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <a onClick={() => scroll.scrollMore(400)}>
                <Button
                  style={{ float: "right", margin: "0" }}
                  variant="success"
                  onClick={() => {
                    this.setState({
                      showAdd: true,
                    });
                  }}
                >
                  Add
                </Button>
              </a>
            </Col>
          </Row>
          <Row style={{ display: "flex", flexWrap: "wrap" }}>
            <CardColumns>
              {contents.length ? (
                contents.map((item) => (
                  <Card>
                    <Card.Img
                      id="product-img-card"
                      variant="top"
                      style={{ width: "80%", marginLeft: "2vw" }}
                      src={`${process.env.PUBLIC_URL}/assets/clients/${item.image}`}
                    />
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Body>
                      <Card.Text>Description: {item.description}</Card.Text>
                      <Card.Text>Page: {item.page}</Card.Text>
                      <a onClick={() => scroll.scrollMore(410)}>
                        <Button
                          variant="primary"
                          onClick={() => {
                            this.setState({
                              ID: item.id,
                              showEdit: true,
                              editTitle: item.title,
                              editDescription: item.description,
                            });
                          }}
                        >
                          Edit
                        </Button>
                      </a>
                      <Button
                        style={{ float: "right" }}
                        variant="danger"
                        onClick={() => {
                          this.setState({
                            ID: item.id,
                            deleteShow: true,
                          });
                        }}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <Row
                  className="justify-content-center"
                  style={{ margin: "auto", marginTop: "2rem" }}
                >
                  <Col md="auto">
                    {" "}
                    <h3>Please Choose a page to display its content</h3>
                  </Col>
                </Row>
              )}
            </CardColumns>
          </Row>
        </Container>
        <Card
          className={this.state.showAdd ? "" : "hide"}
          style={{ width: "40%" }}
        >
          <Button
            variant="danger"
            style={{
              marginLeft: "94%",
              fontSize: "1rem",
              width: "10%",
              padding: "3px 3px",
            }}
            onClick={() => {
              this.setState({
                showAdd: false,
              });
            }}
          >
            X
          </Button>
          <Card.Title>Add Content</Card.Title>
          <Form style={{ fontSize: "1rem", color: "black" }}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control onChange={this.titleHandler} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Page</Form.Label>
              <Form.Control
                style={{ fontSize: "1rem", color: "black" }}
                onChange={this.pageHandler}
                as="select"
              >
                <option value="Home Page">Home Page</option>
                <option value="News Page">News Page</option>
                <option value="Actualities Page">Actualities Page</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={this.descriptionHandler}
                as="textarea"
                rows="3"
              />
            </Form.Group>
            <Form.Group>
              <Image />
            </Form.Group>
            <Button
              style={{ float: "right" }}
              variant="success"
              onClick={this.addContentHandler}
            >
              Add
            </Button>
          </Form>
        </Card>
        {/*Edit*******************************/}
        <Row>
          <Card
            className={this.state.showEdit ? "" : "hide"}
            style={{ width: "40%" }}
          >
            <Button
              variant="danger"
              style={{
                marginLeft: "94%",
                fontSize: "1rem",
                width: "10%",
                padding: "3px 3px",
              }}
              onClick={() => {
                this.setState({
                  showEdit: false,
                });
              }}
            >
              X
            </Button>
            <Card.Title>Edit Content</Card.Title>
            <Form style={{ fontSize: "1rem", color: "black" }}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  onChange={this.edittitleHandler}
                  value={this.state.editTitle}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={this.editdescriptionHandler}
                  as="textarea"
                  rows="3"
                  value={this.state.editDescription}
                />
              </Form.Group>
              <Form.Group>
                <Image />
              </Form.Group>
              <Button
                style={{ float: "right" }}
                variant="success"
                onClick={this.editContentHandler}
              >
                Save Changes
              </Button>
            </Form>
          </Card>
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
                  <Col md="auto"> Delete Content N°: {this.state.ID}</Col>
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
                    `http://localhost:8080/api/contents/${this.state.ID}`
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
      </div>
    );
  }
}
