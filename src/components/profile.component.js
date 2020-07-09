import React, { Component } from "react";
import AuthService from "./../services/auth-service";
import { Link } from "react-router-dom";
//import ClientOrders from "./childComponents/ClientOrders";
export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      user: JSON.parse(localStorage.getItem("user")),
      id: JSON.parse(localStorage.getItem("user")),
    };
  }

  render() {
    const { currentUser } = this.state;
    const { id } = this.state;
    // Reterive Username from LocalStorage
    const users = id.id;
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        {/*<div>
          <ClientOrders />
        </div>*/}
        <div>
          <Link to={"/users/" + users} className="nav-link">
            Change Password
          </Link>
        </div>
      </div>
    );
  }
}
