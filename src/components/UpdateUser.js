import React, { Component } from "react";
import AuthService from "./../services/auth-service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import axios from "axios";
import bcrypt from "bcryptjs";
import { Link } from "react-router-dom";
//--- Bootstarp Component
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
//------------
export default class UpdateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      oldpassword: "",
      testpassword: "",
      newpassword: "",
      confirmPassword: "",
      show: false,
      success: false,
      retype: false,
    };
  }
  componentDidMount() {
    const usernow = this.state.currentUser;
    const id = usernow.id;
    axios.get(`http://localhost:8080/users/${id}`).then((response) => {
      console.log(response.data);
      this.setState({ oldpassword: response.data.password });
    });
  }
  onChangeTestPassword = (e) => {
    this.setState({
      testpassword: e.target.value,
      show: false,
    });
  };
  onChangeNewPassword = (e) => {
    this.setState({
      newpassword: e.target.value,
      retype: false,
    });
  };
  onChangeConfirmPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value,
      retype: false,
    });
  };
  onClickExit = () => {
    this.setState({
      success: false,
    });
  };
  //---------------------------------
  onClickConfirm = (e) => {
    e.preventDefault();
    if (this.state.newpassword !== this.state.confirmPassword) {
      this.setState({
        retype: true,
      });
    } else {
      this.setState({
        retype: false,
      });
      const usernow = this.state.currentUser;
      const id = usernow.id;
      //console.log(this.state);
      var passwordIsValid = bcrypt.compareSync(
        this.state.testpassword,
        this.state.oldpassword
      );
      if (passwordIsValid) {
        axios.put(`http://localhost:8080/users/updated/${id}`, {
          password: this.state.newpassword,
        });
        this.setState({
          success: !this.state.success,
          oldpassword: "",
          testpassword: "",
          newpassword: "",
          confirmPassword: "",
          show: false,
        });
      } else {
        this.setState({
          show: !this.state.show,
        });
      }
    }
  };

  render() {
    // Reterive Username from LocalStorage
    const currentUser = this.state.currentUser;
    return (
      <div className="col-md-12">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <div className="card card-container">
          <Form>
            <div className="form-group form-styling">
              <label htmlFor="password">Current Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.testpassword}
                onChange={this.onChangeTestPassword}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.newpassword}
                onChange={this.onChangeNewPassword}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Retype Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChangeConfirmPassword}
                value={this.state.confirmPassword}
              />
            </div>
            {this.state.retype === true ? (
              <Alert variant="warning">Passwords Don't match</Alert>
            ) : null}
            {this.state.show === true ? (
              <Alert variant="danger">Submited Password is Wrong !!</Alert>
            ) : null}
            {this.state.success === true ? (
              <Alert variant="success">Password Updated</Alert>
            ) : null}
            {this.state.success === false ? (
              <div className="submit-btn">
                <Button variant="primary" onClick={this.onClickConfirm}>
                  Confirm
                </Button>
              </div>
            ) : (
              <div className="submit-btn">
                <Link to="/profile">
                  <Button variant="outline-success" onClick={this.onClickExit}>
                    Exit
                  </Button>
                </Link>
              </div>
            )}
          </Form>
        </div>
      </div>
    );
  }
}
