import React from "react";
import "./Topbar.css";
import searchIcon from "../../assets/search.svg";
import SignOut from "../../assets/sign-out.svg?react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Topbar = ({ topName }) => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    toast.success("SignOut Successful");
  };
  return (
    <>
      <div className="Top-container">
        <div className="top-title">
          <h3> Candidate Dashboard{topName !== " / Dashboard" && topName}</h3>
        </div>
        <div className="top-right">
          <div className="search-container">
            <img src={searchIcon} alt="" />
            <input
              type="text"
              placeholder="Type here..."
              className="search-input"
              src={searchIcon}
            />
          </div>
          <div className="signout-container">
            {/* <ReactLogo width="4px" height="4px" /> */}
            {/* <Link to="/"> */}
            <button className="sign-out-btn" onClick={handleSignOut}>
              {" "}
              <div>
                <SignOut fill="#ffffff" />
              </div>
              Sign Out
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Topbar;
