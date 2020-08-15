/*import React, { Component } from "react";
import Axios from "axios";
// BootStrap -----
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
// Services  -----
import AuthService from "../../services/auth-service";

export default class EmailVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      email: "",
      showSuccessAlert: false,
      showDangerAlert: false,
    };
  }
  EmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  onClickHandler = (e) => {
    let Email = this.state.currentUser.email;
    if (Email === this.state.email) {
      this.setState({
        showSuccessAlert: true,
      });
      Axios.post("http://localhost:8080/api/sendMail", {
        email: this.state.email,
      });
    } else {
      this.setState({
        showDangerAlert: true,
      });
    }
  };

  render() {
    return (
      <div className="verfication-email">
        <Form>
          <h2>Send Verfication Email</h2>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.EmailHandler}
            />
          </Form.Group>
          <Button variant="success" onClick={this.onClickHandler}>
            Verify
          </Button>
        </Form>
        <Alert
          className={this.state.showSuccessAlert ? "" : "hide"}
          variant="success"
        >
          Verfication Email been sent to your Email Inbox
        </Alert>
        <Alert
          className={this.state.showDangerAlert ? "" : "hide"}
          variant="danger"
        >
          Email dosen't match your login Email
        </Alert>
        <h1>Verfication </h1>
      </div>
    );
  }
}
*/
