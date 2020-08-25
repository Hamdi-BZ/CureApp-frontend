import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faUser,
  faBook,
  faUsers,
  faArchive,
  faCartPlus,
  faBoxes,
  /*faBars,*/
} from "@fortawesome/free-solid-svg-icons";
//import Form from "react-bootstrap/Form";
// Child Components
import Employees from "./childComponents/Employees.Manager";
import Statics from "./childComponents/Statics";
import Products from "./childComponents/Products.Manager";
//import Orders from "./childComponents/Orders.manager";
import Profile from "./profile.component";
import Content from "./childComponents/Content.Manager";
import ClientOrders from "./childComponents/ClientOrders";
import Stock from "./childComponents/Stock.manager";
import AuthService from "./../services/auth-service";

//-----------------
export default class boardContentManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "dashboard",
      user: AuthService.getCurrentUser(),
    };
  }
  componentDidMount = () => {
    this.setState({
      selected: localStorage.getItem("selected"),
    });
  };
  dashboardClick = () => {
    localStorage.setItem("selected", this.state.selected);

    this.setState({
      selected: "dashboard",
    });
  };
  employeesClick = () => {
    localStorage.setItem("selected", this.state.selected);

    this.setState({
      selected: "employees",
    });
  };
  ordersClick = () => {
    localStorage.setItem("selected", this.state.selected);

    this.setState({
      selected: "orders",
    });
  };
  profileClick = () => {
    localStorage.setItem("selected", this.state.selected);

    this.setState({
      selected: "profile",
    });
  };
  productsClick = () => {
    localStorage.setItem("selected", this.state.selected);

    this.setState({
      selected: "products",
    });
  };
  stockClick = () => {
    localStorage.setItem("selected", this.state.selected);

    this.setState({
      selected: "stock",
    });
  };
  contentClick = () => {
    localStorage.setItem("selected", this.state.selected);

    this.setState({
      selected: "content",
    });
  };

  render() {
    const selected = this.state.selected;
    let component;
    if (selected === "dashboard") {
      component = <Statics />;
    } else if (selected === "profile") {
      //with user props to (id)
      component = <Profile />;
    } else {
      component = <Content />;
    }
    return (
      <div>
        <div className="split left">
          {/*<div>
            <Form.Check type="switch" id="custom-switch" label="Menu" />
          </div>*/}
          <div
            onClick={this.dashboardClick}
            className={
              this.state.selected === "dashboard"
                ? "sidebar-item selected"
                : "sidebar-item  "
            }
          >
            <FontAwesomeIcon icon={faChartPie} /> Dashboard
          </div>

          <div
            onClick={this.contentClick}
            className={
              this.state.selected === "content"
                ? "sidebar-item selected"
                : "sidebar-item  "
            }
          >
            <FontAwesomeIcon icon={faBook} /> Content
          </div>

          <div
            onClick={this.profileClick}
            className={
              this.state.selected === "profile"
                ? "sidebar-item selected"
                : "sidebar-item  "
            }
          >
            <FontAwesomeIcon icon={faUser} /> Profile
          </div>
        </div>
        <div className="right-side">{component}</div>
      </div>
    );
  }
}
