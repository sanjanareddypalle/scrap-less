import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logging out...");
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/getStarted");
      })
      .catch((error) => {
        // An error happened.
        alert("Issue while logging out");
      });
  };
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Customer
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/customer" ? "active" : ""}`}
                  aria-current="page"
                  to="/customer"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/customer_products" ? "active" : ""}`}
                  aria-current="page"
                  to="/customer_products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/supermarketForCustomer" ? "active" : ""}`}
                  aria-current="page"
                  to="/supermarketForCustomer"
                >
                  Supermarkets
                </Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <Link
                className="btn btn-secondary mx-2"
                aria-current="page"
                to="/cart"
              >
                Your Cart <i class="bi bi-cart-fill"></i>
              </Link>
              <button
                onClick={handleLogout}
                className="btn btn-outline-warning"
                type="submit"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
