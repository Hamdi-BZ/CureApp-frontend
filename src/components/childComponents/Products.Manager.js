import React, { Component } from "react";
//----- Axios---------
import Axios from "axios";
//--------------------
import { ScrollTo } from "react-scroll-to";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {
  faEdit,
  faPlus,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
export default class Products extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      typetitle: "",
      next: false,
      products: [],
      references: [],
      editShow: false,
      addShow: false,
      addRefShow: false,
      deleteShow: false,
      addCategoryShow: false,
      addNewTypeShow: false,
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
      category: 1,
      search: "",
      message: "",
      newcategory: "",
      newcategorytitle: "",
      newtypetitle: "",
      categorieadded: false,
      categorieId: "",
      types: [],
      Specifiedtypes: [],
      Alltypes: [],
      categories: [],
      supercover: [],
      basiccovers: [],
      showSpecialCover: false,
      title: "Category",
      typeId: null,
    };
  }
  //******************************
  getSpecifiedTypes = () => {
    Axios.get(`http://localhost:8080/api/test/type/${this.state.categorieId}`)
      .then((Response) => {
        this.setState({
          Specifiedtypes: Response.data,
        });
        console.log(Response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /*getAllTypes = () => {
    Axios.get(`http://localhost:8080/api/test/category/types`)
      .then((Response) => {
        this.setState({
          Alltypes: Response.data,
        });
        console.log(Response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };*/
  getTypesApi = () => {
    Axios.get(
      `http://localhost:8080/api/test/category/types/${this.state.category}`
    )
      .then((Response) => {
        this.setState({
          types: Response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getCategoriesApi = () => {
    Axios.get(`http://localhost:8080/api/test/category`)
      .then((Response) => {
        this.setState({
          categories: Response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount = () => {
    this.getCategoriesApi();
    this.getTypesApi();
    //this.getAllTypes();
    Axios.get(`http://localhost:8080/api/products/`)
      .then((Response) => {
        this.setState({
          products: Response.data,
        });
        console.log("types here ===>" + Response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //*****-------------------------
  SubmitAddProductHandler = () => {
    var product = {
      productTitle: this.state.productTitle,
      productDescription: this.state.productDescription,
      productPrice: this.state.productPrice,
      productImgPath: this.state.productImg,
      productQuantity: this.state.productQuantity,
      productSize: this.state.productSize,
      productColor: this.state.productColor,
      typeId: this.state.typeId,
    };
    console.log(product);
    var msg;
    Axios.post("http://localhost:8080/api/products/", product)
      .then(
        (response) => {
          console.log(response.data);
          console.log(msg);
          msg = response.message;
          alert("product add to database with success");
          //  window.location.reload(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            message: resMessage,
          });
        }
      )
      .catch((err) => {
        console.log(err);
        alert(this.state.message);
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
  //Add Product --****************
  AddProductHandler = () => {
    if (this.state.typeId !== null) {
      this.SubmitAddProductHandler();
    } else {
      Axios.post(`http://localhost:8080/api/test/category/type`, {
        title: this.state.newtypetitle,
        categorieId: this.state.categorieId,
      })
        .then((data) => {
          this.setState({
            typeId: data.data.id,
          });

          console.log("created new type");
          this.SubmitAddProductHandler();
          //alert("created new type and new product");
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
    let editId = this.state.editId;
    Axios.delete(`http://localhost:8080/api/products/${editId}`)
      .then(() => {
        alert("Product deleted");
      })
      .catch((err) => {
        console.log(err);
        alert("Couldn't delete this product");
      });
    this.setState({
      deleteShow: false,
    });
    window.location.reload();
  };
  //-----------------------------

  //-------------------------------
  /*searchProductCategorySuperHero = () => {
    Axios.get(`http://localhost:8080/api/products/`)
      .then((Response) => {
        this.setState({
          products: Response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };*/
  //----------
  addNewCategoryHandler = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:8080/api/test/category`, {
      title: this.state.newcategorytitle,
    })
      .then((Reponse) => {
        this.setState({
          newcategoryId: Reponse.data.id,
          categorieadded: !this.state.categorieadded,
        });
        console.log(this.state.newcategory);
      })
      .catch(() => {
        alert("Couldn't add new Category");
      });
    this.setState({
      addCategoryShow: false,
    });
    //window.location.reload(true);
  };
  //------ Add new Type if there's a new category added
  addNewType = () => {
    Axios.post(`http://localhost:8080/api/test/category/type`, {
      title: this.state.newtypetitle,
      categorieId: this.state.categorieId,
    })
      .then((data) => {
        console.log(this.state.category);

        this.setState({
          typeId: data.data.id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //-------------------------------
  /*categoryOnChangeHandler = (event) => {
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
  /*productSearchHandler = (event) => {
    this.setState({ search: event.target.value });
    console.log(this.state.search);
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
  };*/
  //------------------------------------
  onClickNextHandler = () => {
    this.setState({
      next: true,
      title: "Type",
    });
    console.log(this.state);
    this.getSpecifiedTypes();
  };
  //-----------------------------------
  newTypeTitleHandler = (event) => {
    this.setState({ typeTitle: event.target.value });
  };
  TypeTitleHandler = (event) => {
    this.setState({ newtypetitle: event.target.value });
  };
  categoryTitleHandler = (event) => {
    this.setState({ newcategorytitle: event.target.value });
  };
  categoryDescriptionHandler = (event) => {
    this.setState({ typetitle: event.target.value });
  };
  categoryHandler = (event) => {
    this.setState({
      category: event.target.value,
      showSpecialCover: event.target.value,
    });
    this.getSpecifiedTypes();
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
    this.getSpecifiedTypes();
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
    const products = this.state.products;
    const categories = this.state.categories;
    const state = this.state;
    return (
      <div>
        <Container>
          <Row className="justify-content-md-cente">
            <Col></Col>
            <Col id="col-add-prod">
              {/**********************Add Button ------------------*/}
              <ScrollTo>
                {({ scroll }) => (
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

                        scroll({ x: 20, y: 500, smooth: true });
                      }}
                      icon={faPlus}
                    />
                  </OverlayTrigger>
                )}
              </ScrollTo>
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
                          {prod.typeId}
                        </Card.Text>
                        <Card.Text className="product-details">
                          <span className={"product-details-titles"}>
                            Price :{" "}
                          </span>
                          {prod.productPrice}
                          <span style={{ fontSize: "10px" }}>TND</span>
                        </Card.Text>

                        <Card.Text className="product-details">
                          <span className={"product-details-titles"}>
                            Quantity :{" "}
                          </span>
                          {prod.productQuantity} piece(s)
                        </Card.Text>
                        <ScrollTo>
                          {({ scroll }) => (
                            <Button
                              variant="primary"
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
                                scroll({ x: 100, y: 2000, smooth: true });
                              }}
                            >
                              Edit
                            </Button>
                          )}
                        </ScrollTo>
                        <Button
                          className="float-right-btn"
                          variant="danger"
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
                className={state.addShow ? "add-product-card" : "hide"}
                style={{ width: "40rem" }}
              >
                <Card.Title>Add Product</Card.Title>
                <Container>
                  <Row>
                    <Col xs={10}>
                      <Form.Label
                        className={
                          state.next && state.Specifiedtypes.length
                            ? ""
                            : "hide"
                        }
                      >
                        Choose {state.title} :
                      </Form.Label>

                      <Form
                        className={
                          !state.next ? "category-select form-role" : "hide"
                        }
                      >
                        {categories.length
                          ? categories.map((categorie) => (
                              <div>
                                <Form.Check
                                  onClick={() => {
                                    this.setState({
                                      categorieId: categorie.id,
                                    });
                                  }}
                                  className="category-select"
                                  inline
                                  aria-label="Special Cover"
                                  checked={
                                    state.categorieId === categorie.id
                                      ? true
                                      : false
                                  }
                                />
                                {categorie.title}
                              </div>
                            ))
                          : null}
                      </Form>
                      <Form>
                        <Form.Row
                          className={
                            state.addCategoryShow
                              ? "align-items-center "
                              : "align-items-center hide"
                          }
                        >
                          <Col xs="auto">
                            <InputGroup className="mb-3 add-category-filed">
                              <FormControl
                                onChange={this.categoryTitleHandler}
                                placeholder="New Category"
                              />
                              <InputGroup.Append>
                                <Button
                                  onClick={this.addNewCategoryHandler}
                                  variant="outline-light"
                                >
                                  Add
                                </Button>
                              </InputGroup.Append>
                            </InputGroup>
                          </Col>
                        </Form.Row>
                      </Form>

                      <Form
                        className={
                          state.next ? "category-select form-role" : "hide"
                        }
                      >
                        {state.Specifiedtypes.length ? (
                          state.Specifiedtypes.map((type) => (
                            <div>
                              <Form.Check
                                className="category-select"
                                inline
                                aria-label="Special Cover"
                                onClick={() => {
                                  this.setState({
                                    newtypetitle: type.title,
                                    typeId: type.id,
                                  });
                                }}
                                checked={
                                  state.newtypetitle === type.title
                                    ? true
                                    : false
                                }
                              />
                              {type.title}
                            </div>
                          ))
                        ) : (
                          <InputGroup className="mb-3 input-groupe-product margin-fix-input">
                            <InputGroup.Append>
                              <InputGroup.Text
                                className="addon3-edit"
                                id="basic-addon3"
                              >
                                New Type :
                              </InputGroup.Text>
                            </InputGroup.Append>
                            <FormControl
                              required
                              onChange={this.TypeTitleHandler}
                            />
                          </InputGroup>
                        )}
                      </Form>
                      <Form>
                        <Form.Row
                          className={
                            state.addNewTypeShow
                              ? "align-items-center "
                              : "align-items-center hide"
                          }
                        >
                          <Col xs="auto">
                            <InputGroup className={"mb-3 add-category-filed"}>
                              <FormControl
                                onChange={this.TypeTitleHandler}
                                placeholder="New Type"
                              />
                              <InputGroup.Append>
                                <Button
                                  onClick={this.addNewType}
                                  variant="outline-light"
                                >
                                  Add
                                </Button>
                              </InputGroup.Append>
                            </InputGroup>
                          </Col>
                        </Form.Row>
                      </Form>
                    </Col>
                    <Col>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderCategoryTooltip}
                      >
                        <FontAwesomeIcon
                          className={!state.next ? "" : "hide"}
                          id="category-add-btn"
                          onClick={() => {
                            this.setState({
                              addCategoryShow: !this.state.addCategoryShow,
                              editShow: false,
                            });
                          }}
                          icon={faPlus}
                        />
                      </OverlayTrigger>

                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTypeTooltip}
                      >
                        <FontAwesomeIcon
                          className={
                            state.next && state.Specifiedtypes.length
                              ? ""
                              : "hide"
                          }
                          id="category-add-btn"
                          onClick={() => {
                            this.setState({
                              addNewTypeShow: !this.state.addNewTypeShow,
                            });
                          }}
                          icon={faPlus}
                        />
                      </OverlayTrigger>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button
                        className={!state.next ? "next-btn" : "hide"}
                        onClick={this.onClickNextHandler}
                        variant="success"
                      >
                        Next
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className={state.next ? "trans-form" : "hide"}>
                        <InputGroup
                          className={
                            "mb-3 input-groupe-product margin-fix-input"
                          }
                        >
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
                        <InputGroup className="mb-3 product-add-pic input-groupe-product margin-fix-input">
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
                            className="addon3-edit product-add-category border-rad-none margin-fix-input"
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
                        <InputGroup className="mb-3 input-groupe-product margin-fix-input">
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
                        <InputGroup className="mb-3 input-groupe-product margin-fix-input">
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
                        <FontAwesomeIcon
                          className={state.next ? "back-btn" : "hide"}
                          //id="category-add-btn"
                          onClick={() => {
                            this.setState({
                              next: false,
                            });
                          }}
                          icon={faArrowCircleLeft}
                        />
                        <Button
                          className="btn-submit-product"
                          variant="success"
                          onClick={this.AddProductHandler}
                        >
                          Submit
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
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
                    Product Name : {state.productTitle}
                  </Card.Text>
                  <Card.Text className="product-details">
                    Product Type : {state.productType}
                  </Card.Text>
                  <Card.Text className="product-details">
                    Available Quantity : {state.productQuantity} piece(s)
                  </Card.Text>

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
function renderCategoryTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Add a new Category
    </Tooltip>
  );
}

function renderTypeTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Add a new Type
    </Tooltip>
  );
}
