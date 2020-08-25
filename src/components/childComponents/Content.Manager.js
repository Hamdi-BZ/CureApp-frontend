import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Card, Button, Container, Row, Col, Modal } from "react-bootstrap";
import AuthService from "./../../services/auth-service";

import Axios from "axios";
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: AuthService.getCurrentUser(),
      editor: "",
      title: "",
      description: "",
      page: "Home Page",
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
  imageHandler = (event) => {
    this.setState({ image: event.target.value });
  };
  pageHandler = (event) => {
    this.setState({ page: event.target.value });
    this.getContentHandler(event.target.value);
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
      image: this.state.image,
      page: this.state.page,
    };
    Axios.post(`http://localhost:8080/api/contents/`, content)
      .then(() => {
        console.log("Article added to " + this.state.page);
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
    var data = {
      title: this.state.editTitle,
      description: this.state.editDescription,
      image: this.state.editImage,
    };
    Axios.put(`http://localhost:8080/api/contents/${this.state.ID}`, data)
      .then((response) => {
        alert("Updated");
        console.log(response);
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
            </Col>
          </Row>
          <Row style={{ display: "flex", flexWrap: "wrap" }}>
            {contents.length ? (
              contents.map((item) => (
                <Card>
                  <Card.Img
                    id="product-img-card"
                    variant="top"
                    src={`${process.env.PUBLIC_URL}/assets/wristcover/openbionics.png`}
                  />
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Body>
                    <Card.Text>Description: {item.description}</Card.Text>
                    <Card.Text>Page: {item.page}</Card.Text>
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
                style={{ margin: "auto" }}
              >
                <Col md="auto">
                  {" "}
                  <h3>Please Choose a page to display its content</h3>
                </Col>
              </Row>
            )}
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
              <Form.File
                onChange={this.imageHandler}
                value={this.state.image}
                id="exampleFormControlFile1"
                label="Image"
              />
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
                <Form.File
                  onChange={this.editimageHandler}
                  value={this.state.editImage}
                  id="exampleFormControlFile1"
                  label="Image"
                />
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
