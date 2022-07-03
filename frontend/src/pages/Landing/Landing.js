import React from "react";
import "./Landing.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <img
        src="https://img.hebus.com/hebus_2007/12/31/preview/071231044338_13.jpg"
        alt="Snow"
        width="100%"
        height="600"
      />
      <div className="centered">
        <h1>Welcome To PhotoBook </h1>
        <div className="lanBtn">
          <Button variant="contained" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="contained" onClick={() => navigate("/register")}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
