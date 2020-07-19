import React, { Component } from "react";
import { Card, Button, FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import AuthService from "./../../services/auth-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faTools,
  faAddressCard,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
//import UpdateUser from "../UpdateUser";
import { Link } from "react-router-dom";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      //user: this.state.currentUser,
      addressField: false,
      phoneField: false,
    };
  }

  render() {
    //const users = this.state.user.id;
    return (
      <div>
        <Card id="profileCard" style={{ width: "40rem" }}>
          <div>
            <Card.Img
              id="profileImage"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/employee.jpg`}
            />
            <FontAwesomeIcon
              id="imageEdit"
              icon={faEdit}
              onClick={() => {
                this.setState({ phoneField: !this.state.phoneField });
              }}
            />
          </div>
          <Card.Title id="profileUsername">Username</Card.Title>
          <Card.Body>
            <Card.Text id="profileRole">
              <FontAwesomeIcon icon={faTools} /> Admin
            </Card.Text>
            <Card.Text id="profileEmail">
              <FontAwesomeIcon icon={faEnvelope} /> Username@admin.com
            </Card.Text>
            <Card.Text id="profilePhone">
              <FontAwesomeIcon icon={faPhone} /> +21695723101{" "}
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
              />
              <InputGroup.Append>
                <Button variant="outline-light">Update</Button>
              </InputGroup.Append>
            </InputGroup>
            <Card.Text id="profileAddress">
              <FontAwesomeIcon icon={faAddressCard} /> Sousse, Tunisia{" "}
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
              />
              <InputGroup.Append>
                <Button variant="outline-light">Update</Button>
              </InputGroup.Append>
            </InputGroup>

            <Link to={"/users/"}>
              <Button id="profileBtn" variant="outline-light">
                Change Password
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
