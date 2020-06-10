import React, { Component } from "react";
import AuthService from "../../services/auth-service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

export default class NewPassword extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      newpassword: "",
      confirmpassword: "",
    };
  }
  onChangeNewPassword = (e) => {
    this.setState({
      newpassword: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <Form>
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
            <label htmlFor="password">Confirm Password</label>
            <Input type="password" className="form-control" name="password" />
          </div>
        </Form>
      </div>
    );
  }
}
