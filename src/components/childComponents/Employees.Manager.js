import React, { Component } from "react";
//--- Services ----------
import { Link } from "react-router-dom";
import AuthService from "../../services/auth-service";

//--- BootStrap Component
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
//---Components--------
//import EditEmployee from "./Edit.Employee"
//---------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
//---Services

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      employees: [],
      show: false,
      edit: [],
      employeeId: "",
      roleId: "",
      showdelete: false,
      roleAdmin: false,
      roleSalesManager: false,
      roleContentManager: false,
      employeeUserName: "",
    };
  }
  componentDidMount = () => {
    Axios.get("http://localhost:8080/api/employees/")
      .then((response) => {
        console.log(response);
        this.setState({ employees: response.data });
        console.log(this.state.employees);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  addClickHandler = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  //-------- API
  adminRoleClick = () => {
    this.setState({
      roleAdmin: !this.state.roleAdmin,
      roleContentManager: false,
      roleSalesManager: false,
    });
  };
  SalesManagerRoleClick = () => {
    this.setState({
      roleSalesManager: !this.state.roleSalesManager,
      roleAdmin: false,
      roleContentManager: false,
    });
  };
  ContentManagerRoleClick = () => {
    this.setState({
      roleContentManager: !this.state.roleContentManager,
      roleAdmin: false,
      roleSalesManager: false,
    });
  };
  roleUpdateClick = () => {
    const roleAdmin = this.state.roleAdmin;
    const roleSalesManager = this.state.roleSalesManager;
    const roleContentManager = this.state.roleContentManager;
    let roleid;
    if (roleAdmin) {
      roleid = 1;
      this.setState({
        roleId: 1,
      });
    } else if (roleSalesManager) {
      roleid = 2;
      this.setState({
        roleId: 2,
      });
    } else if (roleContentManager) {
      roleid = 3;
      this.setState({
        roleId: 3,
      });
    }
    Axios.put(`http://localhost:8080/api/employees/${this.state.employeeId}`, {
      roleId: roleid,
    });
    this.setState({
      show: false,
    });
    window.location.reload();
  };
  deleteClick = () => {
    Axios.delete(
      `http://localhost:8080/api/employees/${this.state.employeeId}`
    );
    this.setState({
      showdelete: false,
    });
    window.location.reload();
  };
  render() {
    const employeeUserName = this.state.employeeUserName;
    const roleAdmin = this.state.roleAdmin;
    const roleSalesManager = this.state.roleSalesManager;
    const roleContentManager = this.state.roleContentManager;
    const posts = this.state.employees;
    const edit = this.state.edit;
    let edited = [];
    return (
      <Container style={{ marginTop: "2rem" }} fluid>
        <Row>
          <Col></Col>
          <Col>
            <Link to="/signupemployee">
              <Button
                style={{ float: "right", marginRight: "1rem" }}
                variant="success"
              >
                Add Employee
              </Button>
            </Link>
          </Col>
        </Row>

        <div className="employees-list">
          <Container fluid>
            <Row>
              <Col id="table-col">
                <Table bordered hover responsive size="sm">
                  <thead>
                    <tr className="table-head">
                      <th>ID</th>
                      <th>Full Name</th>
                      <th>Username</th>
                      <th>Phone Number</th>
                      <th>Role</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.length
                      ? posts.map((employee) => (
                          <tr className="table-bg">
                            <td>{employee.id} </td>{" "}
                            <td>
                              {employee.employeeFirstName +
                                " " +
                                employee.employeeLastName}{" "}
                            </td>
                            <td>{employee.employeeUserName} </td>{" "}
                            <td>{employee.employeePhone}</td>{" "}
                            <td>{employee.roleId}</td>
                            <td>
                              <Button variant="success">Email</Button>
                              <Button
                                variant="info"
                                onClick={() => {
                                  this.setState({
                                    roleContentManager: false,
                                    roleSalesManager: false,
                                    roleAdmin: false,
                                    employeeId: employee.id,
                                    showdelete: false,
                                  });
                                  edited = employee;
                                  console.log(edited);
                                  if (employee.roleId === 1) {
                                    this.setState({
                                      roleAdmin: !this.state.roleAdmin,
                                    });
                                  } else if (employee.roleId === 2) {
                                    this.setState({
                                      roleSalesManager: !this.state
                                        .roleSalesManager,
                                    });
                                  } else {
                                    this.setState({
                                      roleContentManager: !this.state
                                        .roleContentManager,
                                    });
                                  }
                                  this.setState({
                                    show: !this.state.show,
                                    edit: edited,
                                    role: edited.roleId,
                                  });

                                  console.log(edited);
                                  console.log(this.state.role);
                                }}
                              >
                                Edit
                              </Button>

                              <Button
                                className={
                                  employee.id === this.state.currentUser.id
                                    ? "hide"
                                    : ""
                                }
                                variant="danger"
                                onClick={() => {
                                  this.setState({
                                    employeeId: employee.id,
                                    show: false,
                                    showdelete: true,
                                    employeeUserName: employee.employeeUserName,
                                  });
                                  console.log(this.state.employeeId);
                                }}
                              >
                                Delete
                              </Button>
                            </td>{" "}
                          </tr>
                        ))
                      : null}
                  </tbody>
                </Table>
              </Col>

              <Col id="card-col" md={{ span: 3, offset: 3 }}>
                <Card
                  className={this.state.show === false ? "hide" : ""}
                  style={{ width: "20rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={`${process.env.PUBLIC_URL}/assets/images/employee.jpg`}
                  />
                  <Card.Body>
                    <Card.Title>{edit.employeeUserName}</Card.Title>
                    <Card.Text id="card-tex">
                      <FontAwesomeIcon icon={faEnvelope} /> {edit.employeeEmail}
                    </Card.Text>
                    <Card.Text id="card-tex">
                      <FontAwesomeIcon icon={faPhone} /> {edit.employeePhone}
                    </Card.Text>
                    <Form className="form-role">
                      <Form.Label>Roles :</Form.Label>
                      <div>
                        <Form.Check
                          inlines
                          aria-label="Admin"
                          checked={roleAdmin}
                          onClick={this.adminRoleClick}
                        />
                        Admin
                      </div>
                      <div>
                        <Form.Check
                          inline
                          aria-label="Sales Manager"
                          onClick={this.SalesManagerRoleClick}
                          checked={roleSalesManager}
                        />
                        Sales Manager
                      </div>
                      <div>
                        <Form.Check
                          inline
                          aria-label="Content Manager"
                          checked={roleContentManager}
                          onClick={this.ContentManagerRoleClick}
                        />
                        Content Manager
                      </div>
                    </Form>
                    <div className="form-btns">
                      <Button
                        onClick={this.roleUpdateClick}
                        className="btn-save-form"
                        variant="primary"
                      >
                        Save
                      </Button>

                      <Link to="/admin">
                        <Button
                          onClick={() => {
                            this.setState({
                              show: false,
                            });
                          }}
                          className="btn-save-form"
                          variant="secondary"
                        >
                          Cancel
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  className={this.state.showdelete === false ? "hide" : ""}
                  style={{ width: "20rem" }}
                >
                  <Card.Text id="deleteEmploye-card">
                    Delete {employeeUserName} ?
                  </Card.Text>
                  <Card.Body>
                    <Button
                      className="btns-deleteEmployee-card"
                      variant="info"
                      onClick={() => {
                        this.setState({ showdelete: false });
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="btns-deleteEmployee-card"
                      variant="danger"
                      onClick={this.deleteClick}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    );
  }
}

export default Employees;
