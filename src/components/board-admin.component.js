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
export default class boardAdmin extends Component {
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

  employeesClick = () => {
    localStorage.setItem("selected", "employees");

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
    } else if (selected === "employees") {
      component = <Employees />;
    } else if (selected === "products") {
      component = <Products />;
    } else if (selected === "profile") {
      //with user props to (id)
      component = <Profile />;
    } else if (selected === "orders") {
      component = <ClientOrders />;
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
            onClick={() => {
              localStorage.setItem("selected", "dashboard");
              this.setState({
                selected: "dashboard",
              });
            }}
            className={
              this.state.selected === "dashboard"
                ? "sidebar-item selected"
                : "sidebar-item  "
            }
          >
            <FontAwesomeIcon icon={faChartPie} /> Dashboard
          </div>
          <div
            onClick={() => {
              localStorage.setItem("selected", "orders");
              this.setState({
                selected: "orders",
              });
            }}
            className={
              this.state.selected === "orders"
                ? "sidebar-item selected"
                : "sidebar-item  "
            }
          >
            <FontAwesomeIcon icon={faArchive} /> Orders
          </div>
          <div
            onClick={() => {
              localStorage.setItem("selected", "products");
              this.setState({
                selected: "products",
              });
            }}
            className={
              this.state.selected === "products"
                ? "sidebar-item selected"
                : "sidebar-item  "
            }
          >
            <FontAwesomeIcon icon={faCartPlus} /> Products
          </div>

          <div
            onClick={() => {
              localStorage.setItem("selected", "employees");
              this.setState({
                selected: "employees",
              });
            }}
            className={
              this.state.selected === "employees"
                ? "sidebar-item selected"
                : "sidebar-item  "
            }
          >
            <FontAwesomeIcon icon={faUsers} /> Emlpoyees
          </div>

          <div
            onClick={() => {
              localStorage.setItem("selected", "content");
              this.setState({
                selected: "content",
              });
            }}
            className={
              this.state.selected === "content"
                ? "sidebar-item selected"
                : "sidebar-item  "
            }
          >
            <FontAwesomeIcon icon={faBook} /> Content
          </div>

          <div
            onClick={() => {
              localStorage.setItem("selected", "profile");
              this.setState({
                selected: "profile",
              });
            }}
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
