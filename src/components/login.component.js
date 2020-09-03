import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AuthService from "./../services/auth-service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        /*() => {
          this.props.history.push("/profile");
          window.location.reload();
        },*/
        () => {
          window.location.href = "/";
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <Container fluid className="login-background">
        <Row className="row-login">
          <div className="col-md-12">
            <div
              style={{ boxShadow: "none", width: "20rem", border: "none" }}
              className="card card-container"
              id="login-card"
            >
              <img
                style={{ background: "black" }}
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
              />

              <Form
                onSubmit={this.handleLogin}
                ref={(c) => {
                  this.form = c;
                }}
              >
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                  />
                </div>
                {/*<Row className="justify-content-center">
                  <Col md="auto">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{
                        fontSize: "2rem",
                        margin: "0.5rem",
                        color: "#0e8ff2",
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faGoogle}
                      style={{
                        fontSize: "2rem",
                        margin: "0.5rem",
                        alignSelf: "center",
                        color: "#e62020",
                      }}
                    />
                  </Col>
                </Row>*/}
                <div className="form-group">
                  <button
                    style={{ width: "30%", float: "right" }}
                    className="btn btn-success btn-block"
                    disabled={this.state.loading}
                  >
                    {this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                  </button>
                </div>

                {this.state.message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {this.state.message}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={(c) => {
                    this.checkBtn = c;
                  }}
                />
              </Form>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}
