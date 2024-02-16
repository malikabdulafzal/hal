import React from "react";
import "./ForgetPassword.css";
import Name from "./Name.jsx";
import { Link } from "react-router-dom";
const ForgetPassword = () => {
  return (
    <>
      <div className="parent">
        <div className="container-signin">
          {/* <div className="forget-title">
            <h1>Hiring and Learning</h1>
          </div> */}
          <Name />
          <div className="form-container-parent">
            <form className="form-container">
              <div>
                <span className="sign-in-text">Forgot your password </span>
              </div>
              <div className="email-div">
                <label for="uname" className="signtext">
                  <b>Enter email address</b>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email "
                  name="uname"
                  required
                  className="inputClass typography"
                />
              </div>

              <button type="submit" className="btn-siginin">
                Request Reset Link
              </button>
              <Link to="/Signin">
                <button type="submit" className="bck-login">
                  Back to Login
                </button>
              </Link>
            </form>
          </div>
        </div>
        <div className="img-signin">
          <img src="./src/assets/signin.svg" alt="sign-in" />
        </div>
      </div>
    </>
  );
};
export default ForgetPassword;
