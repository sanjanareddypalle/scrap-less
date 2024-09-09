import React, { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, app } from "../firebase";

import { getFirestore, setDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

function Signup() {
  const db = getFirestore(app);
  const emailRef = useRef();
  const nameRef = useRef();
  const pinRef = useRef();
  const addRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const updateDatabase = async () => {
    try {
      await setDoc(
        doc(db, localStorage.getItem("who"), emailRef.current.value),
        {
          role: localStorage.getItem("who"),
          name: nameRef.current.value,
          pin: pinRef.current.value,
          address: addRef.current.value,
          email: emailRef.current.value,
        }
      );
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Incountered some issue while updating database ");
    }
  };

  const varifyPassword = () => {
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      return true;
    }
    return false;
  };

  const handleSignup = () => {
    if (!varifyPassword()) {
      return false;
    }
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);
        // account created succssfully
        alert("Account created successfully");
        updateDatabase();
      })
      .catch((error) => {
        alert(
          "Account Not created\nCheck your email id again\nMinimum required length for password: 6"
        );
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-center py-5">
              Sign up | <Link to="/login">Log in</Link>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 m-auto py-2">
            <input
              ref={nameRef}
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              required
            />
          </div>

          <div className="col-12"></div>

          <div className="col-md-6 m-auto py-2">
            <input
              ref={pinRef}
              type="text"
              className="form-control"
              placeholder="Enter Pin-Code"
              required
            />
          </div>

          <div className="col-12"></div>

          <div className="col-md-6 m-auto py-2">
            <input
              ref={addRef}
              type="text"
              className="form-control"
              placeholder="Enter Residential Addresss"
              required
            />
          </div>

          <div className="col-12"></div>

          <div className="col-md-6 m-auto py-2">
            <input
              ref={emailRef}
              type="text"
              className="form-control"
              placeholder="Enter Email Address"
              required
            />
          </div>

          <div className="col-12"></div>

          <div className="col-md-6 m-auto py-2">
            <input
              ref={passwordRef}
              type="text"
              className="form-control"
              placeholder="Enter Password"
              required
            />
          </div>

          <div className="col-12"></div>

          <div className="col-md-6 m-auto py-2">
            <input
              ref={confirmPasswordRef}
              type="text"
              className="form-control"
              placeholder="Confirm Password"
              required
            />
          </div>

          <div className="col-12"></div>

          <div className="col-md-6 m-auto py-2">
            <button
              onClick={handleSignup}
              className="btn btn-secondary w-100 my-2"
            >
              Signup as {localStorage.getItem("who")}
            </button>
            <Link className="btn btn-secondary w-100 my-2" to="/getstarted">
              Go back to previous page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
