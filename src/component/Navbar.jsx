import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
function Navbar() {
  return (
    <>
      <section id="top">
        <nav className="NavbarContainer">
          <div className="nameContainer">
            <span className="name">Hiring and learning</span>
          </div>
          <div className="itemsContainer">
            <div className="item">
              {" "}
              <HashLink to="/">Home</HashLink>
            </div>
            <div className="item">About Us</div>
            <div className="item">
              {" "}
              <HashLink smooth to="#sectionService">
                {" "}
                Service
              </HashLink>
            </div>

            <div className="item">
              {" "}
              <NavHashLink smooth to="#sectionContact">
                Contact Us
              </NavHashLink>
            </div>
          </div>
          <div className="buttonContainer">
            <div>
              <Link to="/CandidateSignin">
                <button className="sign-btn  sign-btn1">Sign in</button>
              </Link>
            </div>
            <div>
              <Link to="/signin">
                <button className="sign-btn  sign-btn1"> HR Sign in</button>
              </Link>
            </div>
            {/* <Link to="/signup">
              <div>
                <button className="sign-btn sign-btn2">Register</button>
              </div>
            </Link> */}
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
