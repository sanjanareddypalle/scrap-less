import React from "react";
import Navbar from "./Navbar";

function CartProduct() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto border border-5 rounded-4">
            <h2>Product Name : {localStorage.getItem("cartProductName")}</h2>
            <h2>Price : {localStorage.getItem("cartProductPrice")}</h2>
            <h2>
              Discounted Price :{" "}
              {localStorage.getItem("cartProductDiscountedPrice")}
            </h2>
            <h2>Quantity : {localStorage.getItem("cartProductQty")}</h2>
            <h2>
              <button className="btn btn-secondary">Decrease Quantity</button>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
