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
      productSize: "",
      productType: "",
      productColor: "",
      productQuantity: "",
      editId: "",
      Quantity: "",
      category: "",
      search: "",
    };
  }
  //******************************
  componentDidMount = () => {
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
    var product = {
      productCategory: this.state.productCategory,
      productTitle: this.state.productTitle,
      productDescription: this.state.productDescription,
      productPrice: this.state.productPrice,
      productImgPath: this.state.productImg,
      productQuantity: this.state.productQuantity,
      productSize: this.state.productSize,
      productColor: this.state.productColor,
      productType: this.state.productType,
    };
    console.log(product);
    var msg;
    Axios.post("http://localhost:8080/api/products/", product)
      .then((response) => {
        console.log(response.data);
        msg = response.message;
        console.log("//////////////////////////");
        alert("product add to database with success");
        window.location.reload(true);
      })
      .catch((err) => {
        //alert("something went wrong !");
        console.log(err);
        alert(msg);
      });
    this.setState({
      productReference: "",
      productCategory: "",
      productTitle: "",
      productDescription: "",
      productImg: "",
      productPrice: "",
      editShow: false,
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
    let verify;
    Axios.put(`http://localhost:8080/api/products/${this.state.editId}`, {
      productTitle: this.state.productTitle,
      productDescription: this.state.productDescription,
      productPrice: this.state.productPrice,
      productQuantity: this.state.productQuantity,
      productImgPath: this.state.productImgPath,
    })
      .then((response) => {
        console.log(response);
        verify = response.status;
        if (verify === 200) {
          this.setState({
            productReference: "",
            productCategory: "",
            productTitle: "",
            productDescription: "",
            productImg: "",
            productPrice: "",
            editShow: false,
          });
          alert("Updated Successfully");
          window.location.reload(true);
        } else {
          alert("Couldn't Update this Product");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //---------Delete Products-----
  deleteClick = () => {
    let Quantity = this.state.Quantity;
    let editId = this.state.editId;
    Axios.delete(`http://localhost:8080/api/products/${editId}/${Quantity}`)
      .then(() => {
        alert("Product deleted");
      })
      .catch((err) => {
        console.log(err);
        alert("Couldn't delete this product");
      });
    this.setState({
      deleteShow: false,
      qteDelete: "",
    });
    window.location.reload();
  };
  //-----------------------------

  searchProductCategory = () => {};

  //-------------------------------
  categoryOnChangeHandler = (event) => {
    this.setState({
      category: event.target.value,
      productCategory: event.target.value,
    });
  };
  productSearchHandler = (event) => {
    this.setState({ search: event.target.value });
    Axios.get(
      `http://localhost:8080/api/products/category/${this.state.search}`
    )
      .then((Response) => {
        this.setState({
          products: Response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  productReferenceHandler = (event) => {
    this.setState({ productReference: event.target.value });
  };
  productTitleHandler = (event) => {
    this.setState({ productTitle: event.target.value });
  };

  productPriceHandler = (event) => {
    this.setState({ productPrice: event.target.value });
  };
  productTypeHandler = (event) => {
    this.setState({ productType: event.target.value });
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
  QteDeleteHandler = (event) => {
    this.setState({ Quantity: event.target.value });
  };
  productImgHandler = (event) => {
    this.setState({ productImg: event.target.value });
  };
  sizeOnChangeHandler = (event) => {
    this.setState({ productSize: event.target.value });
  };
  productColorHandler = (event) => {
    this.setState({ productColor: event.target.value });
  };
  render() {
    const references = this.state.references;
    const products = this.state.products;
    const state = this.state;
    return (
      <div>
        <Container>
          <Row className="justify-content-md-cente">
            <Col>
              <Form inline className="margin-bottom research-tool">
                <InputGroup.Text
                  className="addon3-edit product-add-category border-rad-none"
                  id="basic-addon3"
                >
                  Category :
                </InputGroup.Text>
                <Form.Control
                  as="select"
                  className="my-1 mr-sm-2 border-rad-none "
                  custom
                  onChange={this.productSearchHandler}
                >
                  {" "}
                  <option value={""}>Choose Cover Size ...</option>
                  <option value={"superhero"}>Superhero Cover</option>
                  <option value={"Basic Cover"}>Basic Cover</option>
                </Form.Control>
              </Form>
              <Form className="research-tool" inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-1"
                />
                <Button type="submit" onClick={this.searchProductCategory}>
                  Search
                </Button>
              </Form>{" "}
            </Col>
            <Col id="col-add-prod">
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
              {/**************Products************************/}

              {products.length
                ? products.map((prod) => (
                    <Card
                      className="product-manager-card"
                      style={{ width: "20rem" }}
                    >
                      <Card.Img
                        id="product-img-card"
                        variant="top"
                        src={`${process.env.PUBLIC_URL}/assets/wristcover/openbionics.png`}
                      />
                      <Card.Body>
                        <Card.Text className="product-details">
                          <span className={"product-details-titles"}>
                            Product Name :{" "}
                          </span>
                          {prod.productTitle}
                        </Card.Text>
                        <Card.Text className="product-details">
                          <span className={"product-details-titles"}>
                            Size :{" "}
                          </span>
                          {prod.productSize}
                        </Card.Text>
                        <Card.Text className="product-details">
                          <span className={"product-details-titles"}>
                            Type :{" "}
                          </span>
                          {prod.productType}
                        </Card.Text>
                        <Card.Text className="product-details">
                          <span className={"product-details-titles"}>
                            Price :{" "}
                          </span>
                          {prod.productPrice}$
                        </Card.Text>
                        <Card.Text className="product-details">
                          <span className={"product-details-titles"}>
                            Quantity :{" "}
                          </span>
                          {prod.productQuantity} piece(s)
                        </Card.Text>
                        <Button
                          variant="outline-light"
                          onClick={() => {
                            this.setState({
                              editShow: !this.state.editShow,
                              addShow: false,
                              editId: prod.id,
                              productReference: prod.productReference,
                              productTitle: prod.productTitle,
                              productCategory: prod.productCategory,
                              productDescription: prod.productDescription,
                              productImgPath: prod.productImgPath,
                              productQuantity: prod.productQuantity,
                              productPrice: prod.productPrice,
                            });
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          className="float-right-btn"
                          variant="outline-danger"
                          onClick={() => {
                            this.setState({
                              deleteShow: !this.state.deleteShow,
                              editId: prod.id,
                              productReference: prod.productReference,
                              productTitle: prod.productTitle,
                              productCategory: prod.productCategory,
                              productDescription: prod.productDescription,
                              productImg: prod.productImg,
                              productQuantity: prod.productQuantity,
                            });
                          }}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  ))
                : null}

              {/**************ENd Products***********************/}
            </Col>
          </Row>
          <Row>
            <Col>
              {/*----------------Add Product-------------------------------*/}
              <Card
                className={
                  this.state.addShow === true
                    ? "product-manager-card"
                    : "product-manager-card hide"
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
                  <div
                    className={
                      this.state.category === "Superhero" ? "" : "hide"
                    }
                  >
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
                        onChange={this.productTypeHandler}
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
                    <InputGroup className="mb-3 input-groupe-product">
                      <InputGroup.Append>
                        <InputGroup.Text
                          className="addon3-edit"
                          id="basic-addon3"
                        >
                          Product Name :
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        required
                        onChange={this.productTitleHandler}
                        aria-label="Amount (to the nearest dollar)"
                      />
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
                        onChange={this.productDescriptionHandler}
                      />
                    </InputGroup>
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
                        onChange={this.sizeOnChangeHandler}
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
                        <InputGroup.Text
                          className="addon3-edit"
                          id="basic-addon3"
                        >
                          Price :
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        required
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
                        required
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
                  </div>
                  <div
                    className={
                      this.state.category === "Basic Cover" ? "" : "hide"
                    }
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
                        onChange={this.productCategoryHandler}
                      >
                        {" "}
                        <option value={""}>Choose Cover Type ...</option>
                        <option value={"Hand Palm"}>Hand Palm Cover</option>
                        <option value={"Left Cover"}>Left Cover</option>
                        <option value={"Right Cover"}>Rigth Cover</option>
                        <option value={"Wrist Cover"}>Wrist Cover</option>
                      </Form.Control>
                    </Form>
                    <InputGroup className="mb-3 input-groupe-product">
                      <InputGroup.Append>
                        <InputGroup.Text
                          className="addon3-edit"
                          id="basic-addon3"
                        >
                          Product Name :
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        required
                        onChange={this.productTitleHandler}
                        aria-label="Amount (to the nearest dollar)"
                      />
                    </InputGroup>
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
                        onChange={this.sizeOnChangeHandler}
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
                        <InputGroup.Text
                          className="addon3-edit"
                          id="basic-addon3"
                        >
                          Color :
                        </InputGroup.Text>
                      </InputGroup.Append>
                      <FormControl
                        onChange={this.productColorHandler}
                        aria-label="Amount (to the nearest dollar)"
                      />
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
                        //value={this.state.productImg}
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
                  </div>
                </Card.Body>
              </Card>
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
                  src={`${process.env.PUBLIC_URL}/assets/wristcover/openbionics.png`}
                />
                <FontAwesomeIcon id="imageEdit" icon={faEdit} />
                <Card.Body>
                  <Card.Title id="product-title-2">Edit Product</Card.Title>
                  <Card.Title id="product-title">
                    {state.productTitle}
                  </Card.Title>
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
                      value={state.productPrice}
                      onChange={this.productPriceHandler}
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
                  <Button
                    className="btn-submit-product"
                    variant="success"
                    onClick={this.EditProductHandler}
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
                    Reference : {state.productReference}
                  </Card.Text>
                  <Card.Text className="product-details">
                    Available Quantity : {state.productQuantity} piece(s)
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
                    <FormControl
                      value={this.state.Quantity}
                      onChange={this.QteDeleteHandler}
                    />
                  </InputGroup>
                  <Button
                    className="btn-submit-product"
                    variant="success"
                    onClick={this.deleteClick}
                  >
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
