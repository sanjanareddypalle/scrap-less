import React, { useEffect, useState } from "react";

import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function Info() {
  const auth = getAuth();
  const user = auth.currentUser;

  const [info, setinfo] = useState({
    name: "loading...",
    role: "loading...",
    address: "loading...",
    pin: "loading...",
  });

  useEffect(() => {
    const getInfo = async () => {
      const docRef = doc(
        db,
        localStorage.getItem("who"),
        getAuth().currentUser.email
      );
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setinfo(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getInfo();
  }, []);

  return (
    <>
      <div className="container-fluid bg-light-subtle" style={{ minHeight: "100vh" }}>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 m-auto ">
            <div className="card m-auto w-md-50 my-3 " >
              <img src="https://img.lovepik.com/element/40061/9105.png_1200.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">YOUR PROFILE</h5>
                <p className="card-text">
                  <p>Name : {info.name}</p>
                  <p>Role : {info.role}</p>
                  <p>Address : {info.address}</p>
                  <p>Pin : {info.pin}</p>
                  <p>Email : {user.email}</p>
                </p>

              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
