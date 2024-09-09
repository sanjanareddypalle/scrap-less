import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import Navbar from "./Navbar";

function CustomerProduct() {
  const navigate = useNavigate();
  let supermarketArray = [];
  const [productInformation, setproductInformation] = useState([]);
  const [productsVisible, setproductsVisible] = useState(false);

  const getProductCard = async () => {
    setproductsVisible(true);
    supermarketArray = [];
    const q = query(collection(db, "supermarket/"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      supermarketArray.push(doc.data());
    });
    for (let i = 0; i < supermarketArray.length; i++) {
      const q = query(
        collection(
          db,
          "supermarket/" + supermarketArray[i].email + "/products/"
        )
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setproductInformation((productInformation) => [
          ...productInformation,
          doc.data(),
        ]);
      });
      console.log("productInformation done");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto text-center py-5">
            <button
              onClick={getProductCard}
              className={`${productsVisible === false ? "btn btn-success w-25 py-2" : "d-none"
                }`}>

              Show Products <i class="bi bi-arrow-right-circle"></i>
            </button>
          </div>
        </div>
        <div className="row">
          {productInformation.map((element, index) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <div
                  className="card text-bg-light mb-3 m-auto"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="card-header">{element.name}</div>
                  <div className="card-body">
                    <div className="card-text ">
                      Price :
                      <span className="text-decoration-line-through">
                        {element.price}
                      </span>
                    </div>
                    <div className="card-text ">
                      Discounted Price :
                      <span className="text-success">
                        {element.discounted_price}
                      </span>
                    </div>
                    <div className="card-text ">
                      Quantity remaining :
                      <span className="text-danger">{element.quantity}</span>
                    </div>
                    <button
                      onClick={() => {
                        localStorage.setItem("cartProductName", element.name);
                        localStorage.setItem("cartProductPrice", element.price);
                        localStorage.setItem(
                          "cartProductDiscountedPrice",
                          element.discounted_price
                        );
                        localStorage.setItem("cartProductQty", 1);
                        navigate("/cartProduct");
                      }}
                      className="btn btn-outline-secondary w-100 my-2"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CustomerProduct;
