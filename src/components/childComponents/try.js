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
        onChange={this.categoryHandler}
      >
        <option value={this.state.newcategorytitle}>
          {this.state.newcategorytitle}
        </option>{" "}
        {categories.length
          ? categories.map((categorie) => (
              <option value={categorie.id}>{categorie.title}</option>
            ))
          : null}
      </Form.Control>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderCategoryTooltip}
      >
        <FontAwesomeIcon
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
    </Form>

    <Form>
      <Form.Row
        className={
          state.addCategoryShow
            ? "align-items-center margin-fix"
            : "align-items-center margin-fix hide"
        }
      >
        <Col xs="auto">
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            onChange={this.categoryTitleHandler}
            placeholder="New Category Title"
          />
        </Col>
        <Col xs="auto">
          <InputGroup className="mb-2">
            <FormControl
              id="inlineFormInputGroup"
              placeholder="New Type Title"
              onChange={this.categoryDescriptionHandler}
            />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Button
            variant="outline-light"
            type="submit"
            className="mb-2"
            onClick={this.addNewCategoryHandler}
          >
            Add
          </Button>
        </Col>
      </Form.Row>
    </Form>

    {/*------------------SuperHero Cover--------------------------*/}
    <div
      className={this.state.showSpecialCover !== "Basic Covers" ? "" : "hide"}
    >
      <Form
        inline
        className={
          this.state.categorieadded === false ? "margin-bottom" : "hide"
        }
      >
        <InputGroup.Text
          className="addon3-edit product-add-category border-rad-none"
          id="basic-addon3"
        >
          Type :
        </InputGroup.Text>

        <Form.Control
          as="select"
          className={
            !this.state.categorieadded
              ? "my-1 mr-sm-2 border-rad-none "
              : "hide"
          }
          custom
          onChange={this.productTypeHandler}
        >
          {" "}
          <option value={""}>Choose Cover Type ...</option>
          {state.Specifiedtypes.length
            ? types.map((type) => <option value={type.id}>{type.title}</option>)
            : null}
        </Form.Control>
      </Form>
      <Card.Text className={!state.categorieadded ? "hide" : "new-type"}>
        Type : <span>{this.state.typetitle}</span>
      </Card.Text>
      <InputGroup className="mb-3 input-groupe-product">
        <InputGroup.Append>
          <InputGroup.Text className="addon3-edit" id="basic-addon3">
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
          <InputGroup.Text id="basic-addon3  " className="addon3-edit desc">
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
          <InputGroup.Text className="addon3-edit" id="basic-addon3">
            Price :
          </InputGroup.Text>
        </InputGroup.Append>
        <FormControl
          required
          onChange={this.productPriceHandler}
          aria-label="Amount (to the nearest dollar)"
        />
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
    <div className={this.state.category === 1 ? "" : "hide"}>
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
          <InputGroup.Text className="addon3-edit" id="basic-addon3">
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
          <InputGroup.Text className="addon3-edit" id="basic-addon3">
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
          <InputGroup.Text id="basic-addon3  " className="addon3-edit desc">
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
          <InputGroup.Text className="addon3-edit" id="basic-addon3">
            Price :
          </InputGroup.Text>
        </InputGroup.Append>
        <FormControl
          onChange={this.productPriceHandler}
          aria-label="Amount (to the nearest dollar)"
        />
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
</Card>;
