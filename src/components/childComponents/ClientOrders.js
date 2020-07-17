import React, { Component } from "react";
import AuthService from "./../../services/auth-service";
import Axios from "axios";
//---BootStrap Components
import Table from "react-bootstrap/Table";
//-----------------------
export default class ClientOrders extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      orders: [],
    };
  }

  componentDidMount() {
    const userid = this.state.currentUser.id;
    Axios.get(`http://localhost:8080/api/test/myorders/${userid}`)
      .then((Response) => {
        this.setState({
          orders: Response.data,
        });
        console.log(this.state.orders);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const orders = this.state.orders;
    return (
      <div>
        Your Orders of SuperHeros Covers
        {"  "}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cover Type</th>
              <th>Side</th>
              <th>Size</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length
              ? orders.map((order) => (
                  <tr>
                    <td key={order.id}>{order.id}</td>
                    <td>{order.coverid} </td>
                    <td>{order.side} </td>
                    <td>{order.size} </td>
                    <td>{order.total} </td>
                    <td>{order.status} </td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </div>
    );
  }
}
