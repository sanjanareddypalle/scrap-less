import React, { useRef } from "react";
import Navbar from "./Navbar";

import { getFirestore, setDoc, doc } from "firebase/firestore";

import { app } from "../../firebase";

import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const db = getFirestore(app);
  const auth = getAuth();
  const navigate = useNavigate();

  const nameRef = useRef();
  const priceRef = useRef();
  const discountRef = useRef();
  const qtyRef = useRef();
  const expiryRef = useRef();

  const addData = async () => {
    // Add a new document in collection "cities"
    await setDoc(
      doc(
        db,
        localStorage.getItem("who") +
        "/" +
        auth.currentUser.email +
        "/products",
        nameRef.current.value
      ),
      {
        name: nameRef.current.value,
        price: priceRef.current.value,
        discounted_price: discountRef.current.value,
        quantity: qtyRef.current.value,
        exp_date: expiryRef.current.value,
      }
    );
    navigate("/myproducts");
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h3 className="text-center">Add Your Product Here</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 m-auto text-center">
            <input
              ref={nameRef}
              type="text"
              className="form-control my-2"
              placeholder="Enter Product Name"
            />
            <input
              ref={priceRef}
              type="text"
              className="form-control my-2"
              placeholder="Enter Product Price"
            />
            <input
              ref={discountRef}
              type="text"
              className="form-control my-2"
              placeholder="Enter Product Discounted Price"
            />
            <input
              type="text"
              ref={qtyRef}
              className="form-control my-2"
              placeholder="Enter Product Qty"
            />
            <input
              ref={expiryRef}
              type="datetime-local"
              className="form-control my-2"
              placeholder="Enter Product Expiry Date"
            />

            <button onClick={addData} className="btn btn-success w-25 py-2">
              <i class="bi bi-check-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
