import React from "react";
import Navbar from "./Navbar";

import { useState } from "react";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function SupermarketForCustomer() {
  const [supermarket, setSupermarket] = useState([]);

  const getSupermarketForCustomer = async () => {
    const q = query(collection(db, "supermarket/"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setSupermarket((supermarket) => [...supermarket, doc.data()]);
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto py-5 text-center">
            <button
              onClick={getSupermarketForCustomer}
              className={` ${supermarket.length === 0 ? "btn btn-success w-25 py-2" : "d-none"
                }`}
            >
              Show mart <i class="bi bi-arrow-right-circle"></i>
            </button>
          </div>
        </div>
        <div className="row">
          {supermarket.map((element, index) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <div
                  className="card border-secondary mb-3 m-auto"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="card-header bg-transparent border-success fw-bold">
                    {element.name}
                  </div>
                  <div className="card-body text-secondary">
                    <div className="card-text">Address : {element.address}</div>
                    <div className="card-text">Pin Code : {element.pin}</div>
                  </div>
                  <div className="card-footer bg-transparent border-success text-danger">
                    Rating : 5
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

export default SupermarketForCustomer;
