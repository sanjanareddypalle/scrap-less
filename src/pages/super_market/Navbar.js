import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";

function Navbar() {
  let location = useLocation();
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
          <Link className="navbar-brand" to="/supermarket">
            <b>Supermarket</b>
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
                  className={`nav-link ${location.pathname === "/supermarket" ? "active" : ""}`}
                  aria-current="page"
                  to="/supermarket"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/myproducts" ? "active" : ""}`}
                  aria-current="page"
                  to="/myproducts"
                >
                  My Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/addproduct" ? "active" : ""}`}
                  aria-current="page"
                  to="/addproduct"
                >
                  Add Product
                </Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
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
