import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: "admin",
    };
  }
  salesmanagerClick = () => {
    this.setState({
      checked: "salesmanager",
    });
    console.log(this.state.checked);
  };

  render() {
    return (
      <div>
        <Card className="text-center">
          <Card.Img
            className="card-img"
            variant="top"
            src={`${process.env.PUBLIC_URL}/assets/images/employee.jpg`}
          />
          <Card.Body id="card-body">
            <Card.Title>Wajdi Brahem</Card.Title>
            <Card.Text id="card-text">
              <FontAwesomeIcon icon={faEnvelope} /> employee@gmail.com
            </Card.Text>
            <Card.Text id="card-text">
              <FontAwesomeIcon icon={faPhone} /> 95723101
            </Card.Text>
            <Card.Body className="card-body-txt">Roles:</Card.Body>
            <Form className="form-role">
              <div>
                <Form.Check inline aria-label="Admin" />
                Admin
              </div>
              <div>
                <Form.Check inline aria-label="Sales Manager" />
                Sales Manager
              </div>
              <div>
                <Form.Check inline aria-label="Sales Manager" />
                Content Manager
              </div>
            </Form>
            <div className="form-btns">
              <Button className="btn-save-form" variant="primary">
                Save
              </Button>
              <Link to="/admin">
                <Button className="btn-save-form" variant="secondary">
                  Cancel
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
