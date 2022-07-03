import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authAction";
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  return (
    <>
      {user ? (
        <div className="nav">
          <h3 onClick={() => navigate("/home")}>Photo Book</h3>
          <div className="navCont">
            <h3 onClick={() => navigate("/home")}>Events</h3>
            <h3>Profile</h3>
            <h3
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
            >
              Logout{" "}
            </h3>
          </div>
        </div>
      ) : (
        <div className="nav">
          <h3>Photo Book</h3>
        </div>
      )}
    </>
  );
}

export default Navbar;
