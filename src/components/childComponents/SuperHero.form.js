import React, { Component } from "react";
//------BootStrap-------------------------
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class SuperHero extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      category: "",
      showSuperheroForm: false,
      showBasicCoverForm: false,
    };
  }
  categoryOnChangeHandler = (event) => {
    this.setState({ category: event.target.value });
  };
  render() {
    return (
      <div>
        <Card className="product-manager-card" style={{ width: "40rem" }}>
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
                id="inlineFormCustomSelectPref-2"
                custom
                onChange={this.categoryOnChangeHandler}
              >
                {" "}
                <option value={""}>Choose Cover Category ...</option>
                <option value={"Superhero"}>Superhero Cover</option>
                <option value={"Basic Cover"}>Basic Cover</option>
              </Form.Control>
            </Form>
            {/*------------------SuperHero Cover--------------------------*/}
            <div className={this.state.category === "Superhero" ? "" : "hide"}>
              <Form inline className="margin-bottom">
                <InputGroup.Text
                  className="addon3-edit product-add-category border-rad-none"
                  id="basic-addon3"
                >
                  Type :
                </InputGroup.Text>
                <Form.Control
                  as="select"
                  className="my-1 mr-sm-2 border-rad-none "
                  custom
                >
                  {" "}
                  <option value={""}>Choose Cover Type ...</option>
                  <option value={"Batman"}>Batman Cover</option>
                  <option value={"Superman"}>Superman Cover</option>
                  <option value={"Ironman"}>Ironman Cover</option>
                  <option value={"League of Legends"}>
                    League of Legends Cover
                  </option>
                </Form.Control>
              </Form>
              <Form inline className="margin-bottom">
                <InputGroup.Text
                  className="addon3-edit product-add-category border-rad-none"
                  id="basic-addon3"
                >
                  Size :
                </InputGroup.Text>
                <Form.Control
                  as="select"
                  className="my-1 mr-sm-2 border-rad-none "
                  custom
                >
                  {" "}
                  <option value={""}>Choose Cover Size ...</option>
                  <option value={"Small"}>Small Cover</option>
                  <option value={"Medium"}>Medium Cover</option>
                  <option value={"Large"}>Large Cover</option>
                </Form.Control>
              </Form>
              <InputGroup className="mb-3 input-groupe-product">
                <InputGroup.Append>
                  <InputGroup.Text className="addon3-edit" id="basic-addon3">
                    Price :
                  </InputGroup.Text>
                </InputGroup.Append>
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                  <InputGroup.Text className="addon3-edit">$</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              <InputGroup className="mb-3 input-groupe-product">
                <InputGroup.Append>
                  <InputGroup.Text className="addon3-edit" id="basic-addon3">
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
              <Button
                className="btn-submit-product"
                variant="success"
                //onClick={this.AddProductHandler}
              >
                Submit
              </Button>
            </div>
            <div
              className={this.state.category === "Basic Cover" ? "" : "hide"}
            >
              <Form inline className="margin-bottom">
                <InputGroup.Text
                  className="addon3-edit product-add-category border-rad-none"
                  id="basic-addon3"
                >
                  Part :
                </InputGroup.Text>
                <Form.Control
                  as="select"
                  className="my-1 mr-sm-2 border-rad-none "
                  custom
                >
                  {" "}
                  <option value={""}>Choose Cover Type ...</option>
                  <option value={"Hand Palm"}>Hand Palm Cover</option>
                  <option value={"Left Cover"}>Left Cover</option>
                  <option value={"Right Cover"}>Rigth Cover</option>
                  <option value={"Wrist Cover"}>Wrist Cover</option>
                </Form.Control>
              </Form>
              <Form inline className="margin-bottom">
                <InputGroup.Text
                  className="addon3-edit product-add-category border-rad-none"
                  id="basic-addon3"
                >
                  Size :
                </InputGroup.Text>
                <Form.Control
                  as="select"
                  className="my-1 mr-sm-2 border-rad-none "
                  custom
                >
                  {" "}
                  <option value={""}>Choose Cover Size ...</option>
                  <option value={"Small"}>Small Cover</option>
                  <option value={"Medium"}>Medium Cover</option>
                  <option value={"Large"}>Large Cover</option>
                </Form.Control>
              </Form>
              <InputGroup className="mb-3 input-groupe-product">
                <InputGroup.Append>
                  <InputGroup.Text className="addon3-edit" id="basic-addon3">
                    Color :
                  </InputGroup.Text>
                </InputGroup.Append>
                <FormControl aria-label="Amount (to the nearest dollar)" />
              </InputGroup>
              <InputGroup className="mb-3 product-add-pic input-groupe-product">
                <InputGroup.Append>
                  <InputGroup.Text
                    id="basic-addon3  "
                    className="addon3-edit desc"
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
                  <InputGroup.Text className="addon3-edit" id="basic-addon3">
                    Price :
                  </InputGroup.Text>
                </InputGroup.Append>
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                  <InputGroup.Text className="addon3-edit">$</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>

              <InputGroup className="mb-3 input-groupe-product">
                <InputGroup.Append>
                  <InputGroup.Text className="addon3-edit" id="basic-addon3">
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
                  //value={this.state.productImg}
                  //onChange={this.productImgHandler}
                />
              </Form.Group>
              <Button
                className="btn-submit-product"
                variant="success"
                //onClick={this.AddProductHandler}
              >
                Submit
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
