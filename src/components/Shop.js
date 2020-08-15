import React, { Component } from "react";
import { Link } from "react-router-dom";
//---Components
import ProductDisplay from "./childComponents/Product.component";
import SpecialEdition from "./childComponents/SpecialEdition";
//-------------
//---Bootstrap Components & Styling
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { Figure } from "react-bootstrap";
import Footer from "./Footer";
//---------

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      types: [],
      category: null,
    };
  }

  componentDidMount = () => {
    Axios.get(`http://localhost:8080/api/test/category`)
      .then((Response) => {
        this.setState({
          categories: Response.data,
        });
        console.log(this.state.categories);
        var i;
        for (i = 0; i < this.state.categories.length; i++) {
          if (this.state.categories[i].title === "Special Covers") {
            this.setState({
              category: this.state.categories[i].id,
            });
          }
        }
        Axios.get(`http://localhost:8080/api/test/type/${this.state.category}`)
          .then((types) => {
            this.setState({
              types: types.data,
            });
            Axios.get(
              `http://localhost:8080/api/products/category/${this.state.category}`
            )
              .then((products) => {
                console.log("catzfzef " + this.state.category);

                this.setState({
                  products: products.data,
                });
                console.log(this.state.products);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    var products = this.state.products;
    return (
      <div className="categories-container">
        <div className="container">
          <SpecialEdition />
          <ul className="categories">
            {products.length
              ? products.map((prod) => (
                  <Link to={"/shop/display"}>
                    <li>
                      <ProductDisplay
                        title={prod.productTitle}
                        imgpath={"/assets/images/arm2.png"}
                        /*onClick={()=>{
                        
 -                       }}*/
                      />
                    </li>
                  </Link>
                ))
              : null}
            <li>
              <Link to="/shop/ironman">
                <ProductDisplay
                  title={"Ironman Cover"}
                  imgpath={"/assets/images/arm1.png"}
                />
              </Link>
            </li>

            <li>
              <Link to="/shop/batman">
                <ProductDisplay
                  title={"Batman Cover"}
                  imgpath={"/assets/images/arm2.png"}
                />
              </Link>
            </li>
            <Link to="/shop/superman">
              <li>
                <ProductDisplay
                  title={"Superman Cover"}
                  imgpath={"/assets/images/arm3.png"}
                />
              </li>
            </Link>
            <Link to="/shop/lol">
              <li>
                <ProductDisplay
                  title={"League of legends Cover"}
                  imgpath={"/assets/images/arm4.png"}
                />
              </li>
            </Link>
            <Link to="/shop/spectrum">
              <li>
                <ProductDisplay
                  title={"Spectrum Covers"}
                  imgpath={"/assets/images/arm1.png"}
                />
              </li>
            </Link>
            <Link to="/shop/fullycustomized">
              <li>
                <ProductDisplay
                  title={"Fully customized Cover"}
                  imgpath={"/assets/images/arm6.png"}
                />
              </li>
            </Link>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}
