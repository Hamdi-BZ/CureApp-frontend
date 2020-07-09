import React, { Component } from "react";

import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default class EmployeesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      currentEmployee: {
        employeeId: null,
        employeeName: "",
        employeeEmail: "",
        employeePhone: "",
      },
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/tutorials/")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  deleData() {
    axios
      .delete("http://localhost:8080/api/tutorials/8")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        <h3>List of Employees</h3>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.length
              ? posts.map((post) => (
                  <tr>
                    <td>{post.employeeName}</td>
                    <td>{post.employeeEmail}</td>
                    <td>{post.employeePhone}</td>
                    <td>
                      <Button variant="primary"> Edit </Button>
                      <Button variant="danger" onClick={this.deleData}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </div>
    );
  }
}
