import React, { useRef } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const auth = getAuth();

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        if (localStorage.getItem("who") === "supermarket") {
          console.log("Login to supermarket");
          navigate("/supermarket");
        } else if (localStorage.getItem("who") === "customer") {
          console.log("Login to Customer");
          navigate("/customer");
        } else if (localStorage.getItem("who") === "food_donor") {
          console.log("Login to Food Donor");
          navigate("/foodDonor");
        } else if (localStorage.getItem("who") === "animal_shelter") {
          console.log("Login to Animal Shelter");
          navigate("/animalShelter");
        } else if (localStorage.getItem("who") === "organisation") {
          console.log("Login to Organisation");
          navigate("/organisation");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert("Incorrect Credentials");
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-center py-5">
              <Link to="/signup">Signup</Link> | Login
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto py-2">
              <input
                ref={emailRef}
                type="text"
                className="form-control"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="col-12"></div>

            <div className="col-md-6 m-auto py-2">
              <input
                ref={passwordRef}
                type="text"
                className="form-control"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="col-12"></div>
            <div className="col-md-6 m-auto py-2">
              <button
                onClick={() => {
                  handleLogin(
                    emailRef.current.value,
                    passwordRef.current.value
                  );
                }}
                className="btn btn-secondary w-100 my-2"
              >
                Login as {localStorage.getItem("who")}
              </button>
              <Link className="btn btn-secondary w-100 my-2" to="/getstarted">
                Go back to previous page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
