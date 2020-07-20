import React, { Component } from "react";
//----- Axios---------
import Axios from "axios";
//--------------------
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
      products: [],
      references: [],
      editShow: false,
      addShow: false,
      addRefShow: false,
      deleteShow: false,
      productReference: "",
      productCategory: "",
      productTitle: "",
      productDescription: "",
      productPrice: "",
      productQuantity: "",
      editId: "",
    };
  }
  //******************************
  componentDidMount = () => {
    Axios.get(`http://localhost:8080/api/products/references`)
      .then((Response) => {
        this.setState({
          references: Response.data,
          products: Response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get(`http://localhost:8080/api/products/`)
      .then((Response) => {
        this.setState({
          products: Response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Add Product --****************
  AddProductHandler = () => {
    //event.preventDefault();
    var product = {
      productReference: this.state.productReference,
      productCategory: this.state.productCategory,
      productTitle: this.state.productTitle,
      productDescription: this.state.productDescription,
      productPrice: this.state.productPrice,
      productImg: this.state.productImg,
      productQuantity: this.state.productQuantity,
    };
    console.log(product);

    Axios.post("http://localhost:8080/api/products/", product)
      .then((response) => {
        console.log(response.data);
        console.log("//////////////////////////");
        alert("product add to database with success");
      })
      .catch((err) => {
        alert("something went wrong !");
        console.log(err);
      });
  };
  //------- Update & Edit Handler
  EditProductHandler = () => {
    var product = {
      productTitle: this.state.productTitle,
      productDescription: this.state.productDescription,
      productPrice: this.state.productPrice,
      productImg: this.state.productImg,
    };
    console.log(product);
    Axios.put(`http://localhost:8080/api/products/${this.state.editId}`, {
      productTitle: this.state.productTitle,
      productDescription: this.state.productDescription,
      productPrice: this.state.productPrice,
      productImg: this.state.productImg,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //-----------------------------
  productReferenceHandler = (event) => {
    this.setState({ productReference: event.target.value });
  };
  productTitleHandler = (event) => {
    this.setState({ productTitle: event.target.value });
  };

  productPriceHandler = (event) => {
    this.setState({ productPrice: event.target.value });
  };
  productDescriptionHandler = (event) => {
    this.setState({ productDescription: event.target.value });
  };
  productCategoryHandler = (event) => {
    this.setState({ productCategory: event.target.value });
  };
  productQuantityHandler = (event) => {
    this.setState({ productQuantity: event.target.value });
  };
  productImgHandler = (event) => {
    this.setState({ productImg: event.target.value });
  };
  render() {
    const references = this.state.references;
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
                        editId: 1,
                      });
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    className="float-right-btn"
                    variant="outline-danger"
                    onClick={() => {
                      this.setState({ deleteShow: !this.state.deleteShow });
                    }}
                  >
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
                        editId: 2,
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
                    <FormControl
                      value={this.state.productTitle}
                      onChange={this.productTitleHandler}
                      aria-label="Amount (to the nearest dollar)"
                    />
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
                      value={this.state.productDescription}
                      onChange={this.productDescriptionHandler}
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
                    <FormControl
                      value={this.state.productPrice}
                      onChange={this.productPriceHandler}
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text className="addon3-edit">
                        $
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                  <Button
                    className="btn-submit-product"
                    variant="success"
                    onClick={this.EditProductHandler}
                  >
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
                      Reference :
                    </InputGroup.Text>
                    <Form.Control
                      as="select"
                      className="my-1 mr-sm-2 border-rad-none "
                      id="inlineFormCustomSelectPref-2"
                      custom
                      value={this.state.productReference}
                      onChange={this.productReferenceHandler}
                    >
                      {references.length
                        ? references.map((ref) => (
                            <option value={ref.productReference}>
                              {ref.productReference}
                            </option>
                          ))
                        : null}
                    </Form.Control>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTip}
                    >
                      <FontAwesomeIcon
                        id="product-add-btn-2"
                        onClick={() => {
                          this.setState({
                            addRefShow: !this.state.addRefShow,
                          });
                        }}
                        icon={faPlus}
                      />
                    </OverlayTrigger>
                  </Form>

                  {/*--------------Add a REFRENCE----------------*/}
                  <InputGroup
                    className={
                      this.state.addRefShow === false
                        ? "mb-2 input-groupe-product hide"
                        : "mb-2 input-groupe-product"
                    }
                  >
                    <InputGroup.Append>
                      <InputGroup.Text
                        className="addon3-edit"
                        id="basic-addon3"
                      >
                        New Reference :
                      </InputGroup.Text>
                    </InputGroup.Append>
                    <FormControl
                      value={this.state.productReference}
                      onChange={this.productReferenceHandler}
                    />
                    <InputGroup.Append>
                      <Button variant="outline-light">Add</Button>
                    </InputGroup.Append>
                  </InputGroup>
                  {/*--------------------------------------------*/}
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
                      value={this.state.productCategory}
                      onChange={this.productCategoryHandler}
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
                    <FormControl
                      onChange={this.productTitleHandler}
                      value={this.state.productTitle}
                      aria-label="Amount (to the nearest dollar)"
                    />
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
                      value={this.state.productDescription}
                      onChange={this.productDescriptionHandler}
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
                    <FormControl
                      value={this.state.productPrice}
                      onChange={this.productPriceHandler}
                      aria-label="Amount (to the nearest dollar)"
                    />
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
                    <FormControl
                      value={this.state.productQuantity}
                      onChange={this.productQuantityHandler}
                      aria-label="Amount (to the nearest dollar)"
                    />
                  </InputGroup>
                  <Form.Group>
                    <Form.File
                      className="product-add-pic"
                      required
                      name="file"
                      id="validationFormik107"
                      feedbackTooltip
                      value={this.state.productImg}
                      onChange={this.productImgHandler}
                    />
                  </Form.Group>
                  <Button
                    className="btn-submit-product"
                    variant="success"
                    onClick={this.AddProductHandler}
                  >
                    Submit
                  </Button>
                </Card.Body>
              </Card>
              {/*----------------Delete Product-------------------------------*/}
              <Card
                className={
                  this.state.deleteShow === false
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
                <Card.Body>
                  <Card.Title id="product-title">Wrist Cover</Card.Title>
                  <Card.Text className="product-details">
                    Reference : #MH52B1
                  </Card.Text>
                  <Card.Text className="product-details">
                    Available Quantity : 26 piece(s)
                  </Card.Text>
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
                    Delete
                  </Button>
                </Card.Body>
              </Card>
              {/*-------------------------------------------------------------*/}
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
function renderTip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Add a new Reference
    </Tooltip>
  );
}
