import { useState } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import "../services/dataService.js";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://sneakernews.com/wp-content/uploads/2021/10/strawberry-cough-sb-dunks.jpg"
        alt="strawberry"
        height="300"
        width="300"
      />
      <h2>Nike SB Dunks Strawberry Cough</h2>

      <div>
        <label className="price">$Price</label>
        <label className="total">$Total</label>
      </div>

      <div>
        <QuantityPicker></QuantityPicker>
        <button className="btn btn-sm btn-info">
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
