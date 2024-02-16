import React from "react";
import "./Top.css";
import { HashLink } from "react-router-hash-link";

const Button = () => {
  return (
    <>
      <div className="btn-container">
        <HashLink smooth to="#top">
          <button className="top-btn"> Top</button>
        </HashLink>
      </div>
    </>
  );
};
export default Button;
