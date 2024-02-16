import React from "react";
import { Link } from "react-router-dom";

export const Name = () => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div
          style={{
            paddingLeft: "30px",
            color: "#8a2be2",
          }}
        >
          <h1>Hiring and Learning</h1>
        </div>
      </Link>
    </>
  );
};
export default Name;
