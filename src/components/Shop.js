import React, { Component } from "react";
import { Link } from "react-router-dom";
//---Components
import ProductDisplay from "./childComponents/Product.component";
//-------------
//---Bootstrap Components & Styling
import "bootstrap/dist/css/bootstrap.min.css";
//---------

export default class Shop extends Component {
  render() {
    return (
      <div className="categories-container">
        <div className="container">
          <ul className="categories">
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
      </div>
    );
  }
}
