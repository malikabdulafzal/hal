import React from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import Name from "./Name.jsx";
import axios from "axios";
import { URL } from "./../serverUrl.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [emailValid, setEmailValid] = React.useState(true);
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const handleEmail = (val) => {
    console.log("hello worlds", val.target.value);
    if (validator.isEmail(val.target.value)) {
      setEmail(val.target.value);
      setEmailValid(true);
    } else {
      setEmail(val.target.value);
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    console.log("in handle password");
    const { value } = e.target;
    setPassword(value);

    // Validate password format
    if (!value) {
      setPasswordError("Password is required");
    } else if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("url:", URL);
  //   try {
  //     const response = await axios.post(`${URL}api/v1/admins/login`, {
  //       email,
  //       password,
  //     });
  //     if (response.status === 200) {
  //       // token store in local storage
  //       toast.success("Login Successful");
  //       const token = response.data.token;
  //       const user = response.data.data.user;
  //       localStorage.setItem("token", token);
  //       localStorage.setItem("user", JSON.stringify(user));
  //       navigate("/Dashboard");
  //     }
  //     console.log("login Successful", response.data);
  //   } catch (error) {
  //     toast.error("Login Failed");
  //     if (error.response.status === 401) {
  //       toast.warn(error.response.data.message);
  //     }
  //     console.log("Registration Failed", error.response, error.message);
  //     // Handle  failure, such as showing error messages
  //   }
  // };

  return (
    <>
      {/* <ToastContainer /> */}
      <div className="parent">
        <div className="container-signin">
          <Name />
          <div className="form-container-parent">
            <form className="form-container">
              <span className="welcome-text">Welcome!</span>
              <div>
                <span className="sign-in-text">Sign in to HR </span>
              </div>
              <div className="email-div">
                <label for="uname" className="signtext">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email "
                  name="uname"
                  required
                  className="inputClass typography"
                  onChange={(text) => handleEmail(text)}
                />
                {!emailValid && (
                  <div className="error-message">invalid email format</div>
                )}
              </div>
              <div className="pass-div">
                <label for="psw" className="signtext">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  required
                  className="inputClass typography"
                  onChange={handlePassword}
                />
                {passwordError && (
                  <div className="error-message">{passwordError}</div>
                )}
              </div>
              <Link to="/Dashboard">
                <button type="submit" className="btn-siginin">
                  Login
                </button>
              </Link>
              <div className="forgotClass">
                <div className="checBoxDiv">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <Link to="/ForgetPassword">
                  <button style={{ border: "none", backgroundColor: "white" }}>
                    Forgot Password ?
                  </button>
                </Link>
              </div>
              <div className="account-register">
                <span className="account">Don't have an Account? </span>
                <Link to="/signup">
                  <button
                    className="register"
                    style={{ border: "none", backgroundColor: "white" }}
                  >
                    Register
                  </button>
                </Link>
              </div>
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
export default SignIn;
