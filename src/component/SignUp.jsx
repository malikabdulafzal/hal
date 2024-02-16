import React from "react";
import "./SignUp.css";
import Name from "./Name.jsx";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "./../serverUrl.js";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    email: "",
    organizationName: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("url:", URL);
    try {
      const response = await axios.post(`${URL}api/v1/admins/signup`, formData);
      if (response.status === 201) {
        toast.success("Registration Successful");
        // Extract token from response and store in local storage
        const token = response.data.token;
        const user = response.data.data.user;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/Dashboard");
      }
      console.log("Registration Successful", response.data);
      // Handle successful registration, such as redirecting the user
    } catch (error) {
      toast.error("Registration Failed");
      if (error.response.status === 500) {
        toast.warn("email already exists");
      }
      console.error("Registration Failed", error.response.data);
      // Handle registration failure, such as showing error messages
    }
  };
  return (
    <>
      {/* <ToastContainer /> */}
      <div className="parent">
        <div className="container-signup">
          <Name />
          <div className="form-container-parent">
            <form className="form-container" onSubmit={handleSubmit}>
              <div className="main-text">
                <span className="welcome-text">Welcome!</span>
                <span className="sign-in-text">Sign up to HR</span>
              </div>
              <div className="email-div">
                <label for="email" className="signtext">
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email "
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="inputClass typography"
                />
              </div>
              <div className="email-div">
                <label for="organizationName" className="signtext">
                  <b>Organization Name</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Organization Name "
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  required
                  className="inputClass typography"
                />
              </div>
              <div className="pass-div">
                <label for="password" className="signtext">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="inputClass typography"
                />
              </div>
              <div className="pass-div">
                <label for="passwordConfirm" className="signtext">
                  <b> Confirm Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  name="passwordConfirm"
                  value={formData.passwordConfirm}
                  onChange={handleChange}
                  required
                  className="inputClass typography"
                />
              </div>

              <button type="submit" className="btn-siginin">
                Register
              </button>

              <div className="account-register">
                <span className="account">Don't have an Account? </span>
                <Link to="/signin">
                  <span className="register">Sign in</span>
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
export default SignUp;
