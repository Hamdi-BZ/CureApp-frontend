import React, { Component } from "react";
import { Card, Button, FormControl, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import {
  faEnvelope,
  faPhone,
  faTools,
  faAddressCard,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Images from "./childComponents/images";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      user: JSON.parse(localStorage.getItem("user")),
      addressField: false,
      phoneField: false,
      newPhone: "",
      newAddress: "",
      currentEmployee: "",
      showImage: false,
      addresHide: false,
    };
  }
  //-----------------------------------------------
  componentDidMount = () => {
    const usernow = this.state.user;
    const id = usernow.id;
    console.log(usernow.roles);
    if (
      usernow.roles[0] === "ROLE_ADMIN" ||
      usernow.roles[0] === "ROLE_SALES_MANAGER" ||
      usernow.roles[0] === "ROLE_CONTENTMANAGER"
    ) {
      Axios.get(`http://localhost:8080/api/employees/${id}`).then(
        (response) => {
          console.log(response.data);
          this.setState({
            currentEmployee: response.data,
            addresHide: true,
          });
        }
      );
    } else {
      Axios.get(`http://localhost:8080/api/clients/${id}`).then((response) => {
        console.log(response.data);
        this.setState({ currentUser: response.data });
      });
    }
  };
  //-----------------------------------------------
  updatePhoneHandler = () => {
    Axios.put(`http://localhost:8080/api/employees/${this.state.user.id}`, {
      employeePhone: this.state.newPhone,
    }).then((response) => {
      console.log(response.data);
    });
    window.location.reload(true);
  };
  PhoneOnChangeHandler = (e) => {
    this.setState({
      newPhone: e.target.value,
    });
  };
  //------------------------
  updateAddressHandler = () => {
    Axios.put(`http://localhost:8080/api/employees/${this.state.user.id}`, {
      employeeProfileImage: this.state.newAddress,
    }).then((response) => {
      console.log(response.data);
    });
    window.location.reload(true);
  };
  AddressOnChangeHandler = (e) => {
    this.setState({
      newAddress: e.target.value,
    });
  };
  render() {
    var role;
    const user = this.state.user;
    const userid = user.id;
    if (this.state.currentEmployee.roleId === 1) {
      role = "ROLE_ADMIN";
    } else if (this.state.currentEmployee.roleId === 2) {
      role = "ROLE_SALES_MANAGER";
    } else if (this.state.currentEmployee.roleId === 3) {
      role = "ROLE_CONTENT_MANAGER";
    } else if (this.state.currentUser.roleId === 4) {
      role = "ROLE_USER";
    }
    const usernow = this.state.user;
    var currentUser = this.state.currentUser;
    var currentEmployee = this.state.currentEmployee;
    var name;
    var email;
    var phone;
    var address;
    var image;
    if (usernow.roles[0] === "ROLE_USER") {
      name = currentUser.clientFirstName + " " + currentUser.clientLastName;
      email = currentUser.clientEmail;
      phone = currentUser.clientPhone;
      address = currentUser.clientAddress;
      image = currentUser.clientProfileImage;
    } else if (
      usernow.roles[0] === "ROLE_ADMIN" ||
      usernow.roles[0] === "ROLE_SALES_MANAGER" ||
      usernow.roles[0] === "ROLE_CONTENTMANAGER"
    ) {
      name =
        currentEmployee.employeeFirstName +
        " " +
        currentEmployee.employeeLastName;
      email = currentEmployee.employeeEmail;
      phone = currentEmployee.employeePhone;
      address = currentEmployee.employeeAddress;
      image = currentEmployee.employeeProfileImage;
    }
    return (
      <div style={{ marginTop: "4rem" }}>
        <Card id="profileCard" style={{ width: "40rem" }}>
          <div>
            <Card.Img
              id="profileImage"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/clients/${image}`}
            />
            <FontAwesomeIcon
              onClick={() => {
                this.setState({
                  showImage: !this.state.showImage,
                });
              }}
              id="imageEdit"
              icon={faEdit}
            />
            <div className={this.state.showImage ? "" : "hide"}>
              <Form.Group>
                <Images />
              </Form.Group>
            </div>
          </div>
          <Card.Title id="profileUsername">{name}</Card.Title>
          <Card.Body>
            <Card.Text id="profileRole">
              <FontAwesomeIcon icon={faTools} /> {role}
            </Card.Text>
            <Card.Text id="profileEmail">
              <FontAwesomeIcon icon={faEnvelope} /> {email}
            </Card.Text>
            <Card.Text id="profilePhone">
              <FontAwesomeIcon icon={faPhone} /> {phone}{" "}
              <FontAwesomeIcon
                className="editIcon"
                icon={faEdit}
                onClick={() => {
                  this.setState({ phoneField: !this.state.phoneField });
                }}
              />
            </Card.Text>
            <InputGroup
              className={this.state.phoneField === false ? "mb-2 hide" : "mb-2"}
            >
              <FormControl
                placeholder="User's Phone Number"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={this.state.newPhone}
                onChange={this.PhoneOnChangeHandler}
              />
              <InputGroup.Append>
                <Button
                  variant="outline-success"
                  onClick={this.updatePhoneHandler}
                >
                  Update
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <Card.Text
              className={this.state.addresHide ? "hide" : ""}
              id="profileAddress"
            >
              <FontAwesomeIcon icon={faAddressCard} /> {address}{" "}
              <FontAwesomeIcon
                className="editIcon"
                icon={faEdit}
                onClick={() => {
                  this.setState({ addressField: !this.state.addressField });
                }}
              />
            </Card.Text>
            <InputGroup
              className={
                this.state.addressField === false ? "mb-2 hide" : "mb-2"
              }
              id="addressEdit"
            >
              <FormControl
                placeholder="User's Home Address"
                aria-describedby="basic-addon2"
                value={this.state.newAddress}
                onChange={this.AddressOnChangeHandler}
              />
              <InputGroup.Append>
                <Button
                  variant="outline-success"
                  onClick={this.updateAddressHandler}
                >
                  Update
                </Button>
              </InputGroup.Append>
            </InputGroup>

            <Link to={"/passwordupdate/" + userid}>
              <Button id="profileBtn" variant="outline-success">
                Change Password
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
