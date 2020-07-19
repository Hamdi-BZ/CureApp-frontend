import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
export default class Products extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editShow: false,
      addShow: false,
    };
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              {/**********************Add Button ------------------*/}
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <FontAwesomeIcon
                  id="product-add-btn"
                  onClick={() => {
                    this.setState({
                      addShow: !this.state.addShow,
                      editShow: false,
                    });
                  }}
                  icon={faPlus}
                />
              </OverlayTrigger>
            </Col>
          </Row>
          <Row>
            <Col className="products-manager">
              <Card className="product-manager-card" style={{ width: "20rem" }}>
                <Card.Img
                  id="product-img-card"
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/assets/wristcover/openbionics.png`}
                />
                <Card.Body>
                  <Card.Title>Wrist Cover</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text className="product-details">
                    Price : 500$
                  </Card.Text>
                  <Card.Text className="product-details">
                    Quantity : 35 piece(s)
                  </Card.Text>
                  <Button
                    variant="outline-light"
                    onClick={() => {
                      this.setState({
                        editShow: !this.state.editShow,
                        addShow: false,
                      });
                    }}
                  >
                    Edit
                  </Button>
                  <Button className="float-right-btn" variant="outline-danger">
                    Delete
                  </Button>
                </Card.Body>
              </Card>
              <Card className="product-manager-card" style={{ width: "20rem" }}>
                <Card.Img
                  id="product-img-card"
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/assets/wristcover/openbionics2.png`}
                />
                <Card.Body>
                  <Card.Title>Wrist Cover</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text className="product-details">
                    Price : 500$
                  </Card.Text>
                  <Card.Text className="product-details">
                    Quantity : 35 piece(s)
                  </Card.Text>
                  <Button
                    variant="outline-light"
                    onClick={() => {
                      this.setState({
                        editShow: !this.state.editShow,
                        addShow: false,
                      });
                    }}
                  >
                    Edit
                  </Button>
                  <Button className="float-right-btn" variant="outline-danger">
                    Delete
                  </Button>
                </Card.Body>
              </Card>
              <Card className="product-manager-card" style={{ width: "20rem" }}>
                <Card.Img
                  id="product-img-card"
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/assets/wristcover/openbionics3.png`}
                />
                <Card.Body>
                  <Card.Title>Wrist Cover</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text className="product-details">
                    Price : 500$
                  </Card.Text>
                  <Card.Text className="product-details">
                    Quantity : 35 piece(s)
                  </Card.Text>
                  <Button
                    variant="outline-light"
                    onClick={() => {
                      this.setState({
                        editShow: !this.state.editShow,
                        addShow: false,
                      });
                    }}
                  >
                    Edit
                  </Button>
                  <Button className="float-right-btn" variant="outline-danger">
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              {/*----------------Edit Product-------------------------------*/}
              <Card
                className={
                  this.state.editShow === false
                    ? "product-manager-card hide"
                    : "product-manager-card"
                }
                style={{ width: "40rem" }}
              >
                <Card.Img
                  id="product-img-card-edit"
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/assets/wristcover/openbionics3.png`}
                />
                <FontAwesomeIcon id="imageEdit" icon={faEdit} />
                <Card.Body>
                  <Card.Title id="product-title">Wrist Cover</Card.Title>
                  <InputGroup className="mb-3 input-groupe-product">
                    <InputGroup.Append>
                      <InputGroup.Text
                        className="addon3-edit"
                        id="basic-addon3"
                      >
                        Title :
                      </InputGroup.Text>
                    </InputGroup.Append>
                    <FormControl aria-label="Amount (to the nearest dollar)" />
                  </InputGroup>
                  <InputGroup className="mb-3 input-groupe-product">
                    <InputGroup.Append>
                      <InputGroup.Text
                        id="basic-addon3 "
                        className="addon3-edit"
                      >
                        Description :
                      </InputGroup.Text>
                    </InputGroup.Append>
                    <FormControl
                      as="textarea"
                      aria-label="Amount (to the nearest dollar)"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 input-groupe-product">
                    <InputGroup.Append>
                      <InputGroup.Text
                        className="addon3-edit"
                        id="basic-addon3"
                      >
                        Price :
                      </InputGroup.Text>
                    </InputGroup.Append>
                    <FormControl aria-label="Amount (to the nearest dollar)" />
                    <InputGroup.Append>
                      <InputGroup.Text className="addon3-edit">
                        $
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>

                  <InputGroup className="mb-3 input-groupe-product">
                    <InputGroup.Append>
                      <InputGroup.Text
                        className="addon3-edit"
                        id="basic-addon3"
                      >
                        Quantity :
                      </InputGroup.Text>
                    </InputGroup.Append>
                    <FormControl aria-label="Amount (to the nearest dollar)" />
                  </InputGroup>
                  <Button className="btn-submit-product" variant="success">
                    Submit
                  </Button>
                </Card.Body>
              </Card>
              {/*----------------Add Product-------------------------------*/}
              <Card
                className={
                  this.state.addShow === false
                    ? "product-manager-card hide"
                    : "product-manager-card"
                }
                style={{ width: "40rem" }}
              >
                <Card.Body>
                  <Card.Title id="product-title">Add Product</Card.Title>
                  <Form inline className="margin-bottom">
                    <InputGroup.Text
                      className="addon3-edit product-add-category border-rad-none"
                      id="basic-addon3"
                    >
                      Category :
                    </InputGroup.Text>
                    <Form.Control
                      as="select"
                      className="my-1 mr-sm-2 border-rad-none "
                      id="inlineFormCustomSelectPref"
                      custom
                    >
                      <option value="Wrist Cover">Wrist Cover</option>
                      <option value="Right Cover">Right Cover</option>
                      <option value="Left Cover">Left Cover</option>
                      <option value="Hand Palm">Hand Palm</option>
                    </Form.Control>
                  </Form>
                  <InputGroup className="mb-3 input-groupe-product">
                    <InputGroup.Append>
                      <InputGroup.Text
                        className="addon3-edit"
                        id="basic-addon3"
                      >
                        Title :
                      </InputGroup.Text>
                    </InputGroup.Append>
                    <FormControl aria-label="Amount (to the nearest dollar)" />
                  </InputGroup>
                  <InputGroup className="mb-3 product-add-pic input-groupe-product">
                    <InputGroup.Append>
                      <InputGroup.Text
                        id="basic-addon3 "
                        className="addon3-edit"
                      >
                        Description :
                      </InputGroup.Text>
                    </InputGroup.Append>
                    <FormControl
                      as="textarea"
                      aria-label="Amount (to the nearest dollar)"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3 input-groupe-product">
                    <InputGroup.Append>
                      <InputGroup.Text
                        className="addon3-edit"
                        id="basic-addon3"
                      >
                        Price :
                      </InputGroup.Text>
                    </InputGroup.Append>
                    <FormControl aria-label="Amount (to the nearest dollar)" />
                    <InputGroup.Append>
                      <InputGroup.Text className="addon3-edit">
                        $
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>

                  <InputGroup className="mb-3 input-groupe-product">
                    <InputGroup.Append>
                      <InputGroup.Text
                        className="addon3-edit"
                        id="basic-addon3"
                      >
                        Quantity :
                      </InputGroup.Text>
                    </InputGroup.Append>
                    <FormControl aria-label="Amount (to the nearest dollar)" />
                  </InputGroup>
                  <Form.Group>
                    <Form.File
                      className="product-add-pic"
                      required
                      name="file"
                      id="validationFormik107"
                      feedbackTooltip
                    />
                  </Form.Group>
                  <Button className="btn-submit-product" variant="success">
                    Submit
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Add a new Product
    </Tooltip>
  );
}
