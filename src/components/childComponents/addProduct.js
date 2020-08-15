import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
export default class addProduct extends Component {
  render() {
    return (
      <div>
        <Card className="add-product-card">
          <Card.Title>Add Product</Card.Title>
          <Container>
            <Row>
              <Col>
                <Form className="form-role">
                  <div>
                    <Form.Label>Choose a Category :</Form.Label>
                    <Form.Check
                      inline
                      aria-label="Basic Cover"
                      //checked={roleAdmin}
                      //onClick={this.adminRoleClick}
                    />
                    Basic Cover
                  </div>
                  <div>
                    <Form.Check
                      inline
                      aria-label="Special Cover"
                      //onClick={this.SalesManagerRoleClick}
                      //checked={roleSalesManager}
                    />
                    Special Cover
                  </div>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="success">{">"}</Button>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    );
  }
}
