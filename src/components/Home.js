import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="card text-bg-dark text-align-center "
      style={{ textAlign: "center" }}
    >
      <img
        style={{ filter: "blur(5px)", minHeight: "100vh " }}
        src="https://th.bing.com/th/id/OIP.6sRwMldMd6wxCZaemBlJywHaEK?pid=ImgDet&rs=1"
        className="card-img"
        alt="Food Wastage ain't good"
      />
      <div className="card-img-overlay text-align-center">
        <h1 className="text-align-center py-5 fg-5 active">
          ZERO FOOD WASTAGE
        </h1>
        <p className="card-text active">
          <h4>WASTED FOOD TAKES A BITE OUT OF YOUR BUDGET</h4>
        </p>
        <p className="card-text">
          <h6>
            Feeding the hungry and the one in need adds yourself one good deed.
          </h6>
        </p>

        <button
          onClick={() => {
            navigate("/getStarted");
          }}
          type="button"
          className="btn btn-success btn-lg"
        >
          GET STARTED <i className="bi bi-box-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;
