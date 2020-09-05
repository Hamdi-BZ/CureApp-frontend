import React, { Component } from "react";
import Axios from "axios";
//---Component BootStrap -----
import Form from "react-bootstrap/Form";
import { Col, Button, Container, Row } from "react-bootstrap/";
import Jumbotron from "react-bootstrap/Jumbotron";
import Alert from "react-bootstrap/Alert";
//---Component ReactStrap ----
import { FormGroup, Label, Input } from "reactstrap";
//---NPM Packages-------------
//import "react-phone-number-input/style.css";
//import PhoneInput from "react-phone-number-input";
//import flags from "react-phone-number-input/flags";
//----------------------------
import Image from "./images";
export default class SignupEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeFirstName: "",
      employeeLastName: "",
      employeeUserName: "",
      employeeEmail: "",
      employeePassword: "",
      employeeconfirmpassword: "",
      employeePhone: "",
      employeeBirthdate: "",
      roleId: 1,
      employeeProfileImage: "",
      alertPassword: false,
      alert: false,
      passwordLength: false,
      CpasswordLength: false,
      message: "",
    };
  }
  handleChangeFirstname = (event) => {
    this.setState({ employeeFirstName: event.target.value });
  };
  handleChangeLastname = (event) => {
    this.setState({ employeeLastName: event.target.value });
  };
  handleChangeUsername = (event) => {
    this.setState({ employeeUserName: event.target.value, alert: false });
  };
  handleChangeEmail = (event) => {
    this.setState({ employeeEmail: event.target.value, alert: false });
  };
  handleChangePhone = (event) => {
    this.setState({ employeePhone: event.target.value });
  };
  handleChangePassword = (event) => {
    this.setState({
      employeePassword: event.target.value,
      alertPassword: false,
      passwordLength: true,
    });
  };
  handleChangeConfirmPassword = (event) => {
    this.setState({
      employeeconfirmpassword: event.target.value,
      alertPassword: false,
      CpasswordLength: true,
    });
  };
  handleChangeDate = (event) => {
    this.setState({ employeeBirthdate: event.target.value });
  };
  handleChangeRole = (event) => {
    this.setState({ roleId: event.target.value });
  };
  handleChangePic = (event) => {
    this.setState({ employeeProfileImage: event.target.value });
  };
  //------------------Verficaation------

  //---------------------------------------------------------
  SubmitHandler = (event) => {
    event.preventDefault();
    if (this.state.employeePassword.length < 6) {
      this.setState({
        alert: true,
        message: "password should be between 6-20",
      });
    } else if (this.state.employeePassword.length > 20) {
      this.setState({
        alert: true,
        message: "password should be between 6-20",
      });
    } else if (
      this.state.employeePassword === this.state.employeeconfirmpassword
    ) {
      console.log(this.state);
      Axios.post("http://localhost:8080/api/employees/", this.state)
        .then(
          (response) => {
            console.log(response);
            //console.log(response.data);
            console.log("//////////////////////////");
            alert("account created with successfully");

            localStorage.setItem("selected", "employees");
            window.location.href = "/admin  ";
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            this.setState({
              alert: true,
              message: resMessage,
            });
          }
        )
        .catch((err) => {
          this.setState({
            alert: true,
          });
          console.log(err);
        });
    } else {
      this.setState({
        alertPassword: true,
      });
    }
  };
  render() {
    let message = this.state.message;
    return (
      <Container fluid="md">
        <div id="signup-employee-container">
          <Row className="justify-content-md-center">
            {" "}
            <Col className="form-col-signup" md="auto" xs={2} lg={6}>
              <Jumbotron className="jumbotron-signup">
                <Container>
                  <h1>Employee Sign Up</h1>
                </Container>
              </Jumbotron>
              <Form>
                <Form.Row className="formcheck-margin-fix">
                  <Col>
                    <Form.Label>First Name</Form.Label>

                    <Form.Control
                      placeholder="First name"
                      value={this.state.employeeFirstName}
                      onChange={this.handleChangeFirstname}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>

                    <Form.Control
                      placeholder="Last name"
                      value={this.state.employeeLastName}
                      onChange={this.handleChangeLastname}
                    />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Username"
                      value={this.state.employeeUserName}
                      onChange={this.handleChangeUsername}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={this.state.employeeEmail}
                      onChange={this.handleChangeEmail}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.Row>
                    <Col>
                      <Form.Label>Password</Form.Label>

                      <Form.Control
                        id={
                          this.state.employeePassword.length < 6 &&
                          this.state.passwordLength === true
                            ? "border-red"
                            : ""
                        }
                        type="password"
                        placeholder="Password"
                        value={this.state.employeePassword}
                        onChange={this.handleChangePassword}
                      />
                      <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 6-20 characters long
                      </Form.Text>
                    </Col>

                    <Col>
                      <Form.Label>Confirm Password</Form.Label>

                      <Form.Control
                        id={
                          this.state.employeeconfirmpassword.length < 6 &&
                          this.state.CpasswordLength === true
                            ? "border-red"
                            : ""
                        }
                        type="password"
                        placeholder="Confirm Password"
                        value={this.state.employeeconfirmpassword}
                        onChange={this.handleChangeConfirmPassword}
                      />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <Form.Row>
                  <Col className="formcheck-margin-fix">
                    <Form.Label>Phone</Form.Label>

                    <Form.Control
                      placeholder="Phone"
                      value={this.state.employeePhone}
                      onChange={this.handleChangePhone}
                    />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <FormGroup>
                      <Label for="exampleDate">Birthdate</Label>
                      <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                        value={this.state.employeeBirthdate}
                        onChange={this.handleChangeDate}
                      />
                    </FormGroup>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue="Admin"
                      value={this.state.employeeRole}
                      onChange={this.handleChangeRole}
                    >
                      <option value="1">Admin</option>
                      <option value="2">Sales Manager</option>
                      <option value="3">Content Manager</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.File id="formcheck-api-regular">
                    <Form.File.Label id="formcheck-label">
                      Profile Picture
                    </Form.File.Label>
                    <Image />
                  </Form.File>
                </Form.Row>

                <Alert
                  className={this.state.alertPassword === true ? "" : "hide"}
                  variant={"danger"}
                >
                  Passwords Don't match !
                </Alert>
                <Alert
                  className={this.state.alert === true ? "" : "hide"}
                  variant={"danger"}
                >
                  {message}
                </Alert>
                <Button
                  className="formcheck-fixbtn"
                  variant="primary"
                  type="submit"
                  onClick={this.SubmitHandler}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
