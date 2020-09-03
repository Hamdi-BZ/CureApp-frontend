import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
//---Component BootStrap -----
import Form from "react-bootstrap/Form";
import { Col, Button, Container, Row } from "react-bootstrap/";
import Jumbotron from "react-bootstrap/Jumbotron";
//---Component ReactStrap ----
import { FormGroup, Label, Input } from "reactstrap";
import Alert from "react-bootstrap/Alert";
import Image from "./images";
//---NPM Packages-------------
//import "react-phone-number-input/style.css";
//import PhoneInput from "react-phone-number-input";
//import flags from "react-phone-number-input/flags";
//----------------------------
export default class SignupEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientFirstName: "",
      clientLastName: "",
      clientUserName: "",
      clientEmail: "",
      clientPassword: "",
      clientconfirmpassword: "",
      clientPhone: "",
      clientBirthdate: "",
      clientAddressCountry: "",
      clientAddressState: "",
      clientAddressZip: "",
      clientAddress: "",
      roleId: 4,
      clientProfileImage: "",
      alertPassword: false,
      alert: false,
      passwordLength: false,
      CpasswordLength: false,
      message: "",
      image: "",
      next: false,
      back: true,
    };
  }
  //-----Google Signup/Login

  //------------------------
  handleChangeFirstname = (event) => {
    this.setState({ clientFirstName: event.target.value });
  };
  handleChangeLastname = (event) => {
    this.setState({ clientLastName: event.target.value });
  };
  handleChangeUsername = (event) => {
    this.setState({ clientUserName: event.target.value, alert: false });
  };
  handleChangeEmail = (event) => {
    this.setState({ clientEmail: event.target.value, alert: false });
  };
  handleChangePhone = (event) => {
    this.setState({ clientPhone: event.target.value });
  };
  handleChangePassword = (event) => {
    this.setState({
      clientPassword: event.target.value,
      alertPassword: false,
      passwordLength: true,
    });
  };
  handleChangeConfirmPassword = (event) => {
    this.setState({
      clientconfirmpassword: event.target.value,
      alertPassword: false,
      CpasswordLength: true,
    });
  };
  handleChangeDate = (event) => {
    this.setState({ clientBirthdate: event.target.value });
  };
  handleChangeRole = (event) => {
    this.setState({ roleId: event.target.value });
  };
  handleChangePic = (event) => {
    console.log(event.target.files);
    this.setState({ image: event.target.files });
  };
  handleChangeCountry = (event) => {
    this.setState({ clientAddressCountry: event.target.value });
  };
  handleChangeState = (event) => {
    this.setState({ clientAddressState: event.target.value });
  };
  handleChangeZip = (event) => {
    this.setState({ clientAddressZip: event.target.value });
  };
  //------Image

  SubmitHandler = (event) => {
    event.preventDefault();
    if (this.state.clientPassword === this.state.clientconfirmpassword) {
      const state = this.state.clientAddressState;
      const zip = this.state.clientAddressZip;
      const country = this.state.clientAddressCountry;
      if (this.state.clientAddress === "") {
        this.setState({
          clientAddress: state + "," + country + "," + zip,
        });
        console.log(this.state);
      }
      console.log(this.state);
      const imagepath = localStorage.getItem("imagepath");
      const client = {
        clientFirstName: this.state.clientFirstName,
        clientLastName: this.state.clientLastName,
        clientUserName: this.state.clientUserName,
        clientEmail: this.state.clientEmail,
        clientPhone: this.state.clientPhone,
        clientPassword: this.state.clientPassword,
        clientProfileImage: imagepath,
        clientBirthdate: this.state.clientBirthdate,
        clientAddress:
          this.state.clientAddressCountry +
          "/" +
          this.state.clientAddressState +
          "/" +
          this.state.clientAddressZip,
        roleId: this.state.roleId,
      };
      Axios.post("http://localhost:8080/api/clients/", client)
        .then(
          () => {
            window.location.href = "/login";
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
          alert("please verify your infos");
          console.log(err);
        });
    } else {
      this.setState({
        alertPassword: true,
      });
    }
  };
  changeProfileImage = (event) => {
    console.log(event.target.files[0]);

    this.setState({
      uploadedFile: event.target.files[0],
    });
  };
  UpdateProfileHandler = (e) => {
    e.preventDefault();
    //create obj of form data
    const formData = new FormData();
    formData.append("profileImage", this.state.uploadedFile);
  };
  render() {
    let message = this.state.message;
    return (
      <Container fluid="md">
        <div id="signup-employee-container">
          <Row className="justify-content-md-center">
            {" "}
            <Col className="form-col-signup" md="auto" xs={4} lg={8}>
              <Row className="justify-content-center">
                <Col md="auto">
                  <h1>Sign Up</h1>
                </Col>
              </Row>

              <Form>
                <div className={this.state.back ? "" : "hide"}>
                  <Form.Row>
                    <Col>
                      <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label>First Name</Form.Label>

                        <Form.Control
                          placeholder="First name"
                          value={this.state.clientFirstName}
                          onChange={this.handleChangeFirstname}
                        />
                      </Form.Group>
                    </Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Last Name</Form.Label>

                      <Form.Control
                        placeholder="Last name"
                        value={this.state.clientLastName}
                        onChange={this.handleChangeLastname}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Username"
                          value={this.state.clientUserName}
                          onChange={this.handleChangeUsername}
                        />
                      </Form.Group>
                    </Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={this.state.clientEmail}
                        onChange={this.handleChangeEmail}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          id={
                            this.state.clientPassword.length < 6 &&
                            this.state.passwordLength === true
                              ? "border-red"
                              : ""
                          }
                          type="password"
                          placeholder="Password"
                          value={this.state.clientPassword}
                          onChange={this.handleChangePassword}
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                          Your password must be 6-20 characters long
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Confirm Password</Form.Label>

                      <Form.Control
                        id={
                          this.state.clientconfirmpassword.length < 6 &&
                          this.state.CpasswordLength === true
                            ? "border-red"
                            : ""
                        }
                        type="password"
                        placeholder="Confirm Password"
                        value={this.state.clientconfirmpassword}
                        onChange={this.handleChangeConfirmPassword}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Alert
                    className={this.state.alertPassword === true ? "" : "hide"}
                    variant={"danger"}
                  >
                    Password dosen't match
                  </Alert>
                  <Alert
                    className={this.state.alert === true ? "" : "hide"}
                    variant={"danger"}
                  >
                    {message}
                  </Alert>
                  <Button
                    className="formcheck-fixbtn"
                    variant="success"
                    style={{ float: "right" }}
                    onClick={() => {
                      this.setState({});
                      if (
                        this.state.clientPassword.length < 6 ||
                        this.state.clientconfirmpassword.length > 20
                      ) {
                        this.setState({
                          alert: true,
                          message: "password should be between 6-20",
                        });
                      } else if (
                        this.state.clientPassword ===
                        this.state.clientconfirmpassword
                      ) {
                        this.setState({
                          next: true,
                          back: false,
                        });
                      } else {
                        this.setState({
                          alertPassword: true,
                          alert: false,
                        });
                      }
                    }}
                  >
                    Next
                  </Button>
                </div>
                <div className={this.state.next ? "" : "hide"}>
                  <Form.Row>
                    <Col className="formcheck-margin-fix">
                      <Form.Label>Phone</Form.Label>

                      <Form.Control
                        placeholder="Phone"
                        value={this.state.clientPhone}
                        onChange={this.handleChangePhone}
                      />
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="exampleDate">Birthdate</Label>
                        <Input
                          type="date"
                          name="date"
                          id="exampleDate"
                          placeholder="date placeholder"
                          value={this.state.clientBirthdate}
                          onChange={this.handleChangeDate}
                        />
                      </FormGroup>
                    </Col>
                  </Form.Row>

                  <Form.Row></Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        as="select"
                        defaultValue="Tunisia"
                        onChange={this.handleChangeCountry}
                      >
                        <option value="Tunisia">Tunisia</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Libya">Libya</option>
                        <option value="Egypt">Egypt</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      controlId="formGridCity"
                      onChange={this.handleChangeState}
                    >
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      controlId="formGridZip"
                      onChange={this.handleChangeZip}
                    >
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>

                  <Image />

                  <Button
                    style={{
                      float: "left",
                    }}
                    variant="outline-danger"
                    onClick={() => {
                      this.setState({
                        next: false,
                        back: true,
                      });
                    }}
                  >
                    Back
                  </Button>
                  <Link to="/">
                    <Button
                      className="formcheck-fixbtn"
                      variant="success"
                      type="submit"
                      onClick={this.SubmitHandler}
                    >
                      Submit
                    </Button>
                  </Link>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
// Note:
// Address still not fixed
