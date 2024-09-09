import React from "react";
import { useNavigate } from "react-router-dom";

function GetStarted() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid text-center bg-warning-subtle" style={{ minHeight: "100vh" }}>
        <div className="row py-5">
          <div className="col py-3">
            <h1>WHAT'S YOUR ROLE?</h1>
          </div>
        </div>
        <div className="row py-3 px-5">
          <div className="col-lg-4 col-md-6 my-2 cursor-pointer d-flex">
            <div
              onClick={() => {
                localStorage.setItem("who", "supermarket");
                navigate("/signup");
              }}
              className="card h-100 w-75 text-bg-light mb-3 m-auto bg-light-subtle"
              style={{ cursor: "pointer" }}
            >
              <div className="card-header bg-light-subtle"><b>Supermarket</b></div>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-shop"></i>
                </h5>
                <p className="card-text">Solutions for near-expiry products</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-2">
            <div
              // onClick={() => {
              //   localStorage.setItem("who", "restaurant");
              //   navigate("/signup");
              // }}
              className="card h-100 w-75 text-bg-light mb-3 m-auto bg-light-subtle"
            // style={{ cursor: "pointer" }}
            >
              <div className="card-header bg-light-subtle"><b>Restaurant</b> (coming soon...)</div>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-cup-hot"></i>
                </h5>
                <p className="card-text">
                  For unsold food to be used for discounted selling/ donation/
                  decomposition.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-2">
            <div
              // onClick={() => {
              //   localStorage.setItem("who", "food_donor");
              //   navigate("/signup");
              // }}
              className="card h-100 w-75 text-bg-light mb-3 m-auto bg-light-subtle"
            // style={{ cursor: "pointer" }}
            >
              <div className="card-header bg-light-subtle"><b>Food Donor</b> (coming soon...)</div>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-cart-plus"></i>
                </h5>
                <p className="card-text">
                  For donating food to hunger-relief organisations/ animal
                  shelter
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-2">
            <div
              // onClick={() => {
              //   localStorage.setItem("who", "organisation");
              //   navigate("/signup");
              // }}
              className="card h-100 w-75 text-bg-light mb-3 m-auto bg-light-subtle"
            // style={{ cursor: "pointer" }}
            >
              <div className="card-header bg-light-subtle"><b>Organisation</b> (coming soon...)</div>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-heart-pulse"></i>
                </h5>
                <p className="card-text">
                  To accept from donors and provide the needy.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-2">
            <div
              onClick={() => {
                localStorage.setItem("who", "customer");
                navigate("/signup");
              }}
              className="card h-100 w-75 text-bg-light mb-3 m-auto bg-light-subtle"
              style={{ cursor: "pointer" }}
            >
              <div className="card-header bg-light-subtle"><b>Customer</b></div>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-person-circle"></i>
                </h5>
                <p className="card-text">
                  Looking for products at discounted prices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-2">
            <div
              // onClick={() => {
              //   localStorage.setItem("who", "animal_shelter");
              //   navigate("/signup");
              // }}
              className="card h-100 w-75 text-bg-light mb-3 m-auto bg-light-subtle"
            // style={{ cursor: "pointer" }}
            >
              <div className="card-header bg-light-subtle"><b>Animal Shelter</b> (coming soon...)</div>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-shield-check"></i>
                </h5>
                <p className="card-text">
                  Accepting donations for the welfare of animals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetStarted;
