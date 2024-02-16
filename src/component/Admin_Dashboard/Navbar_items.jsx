import React from "react";
import "./Navbar_items.css";
import Nav from "./Nav.jsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar_items = ({ itemName, Icon }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const location = useLocation();
  const currentPage = location.pathname.slice(1);
  // console.log("show:",, itemName);
  return (
    <>
      <li className="rmv-li">
        <Link
          // className={`admin-container ${isClicked ? "clicked" : ""}`}
          // className="admin-container"
          className={` admin-container ${
            itemName === currentPage ? "click1" : ""
          }`}
          to={`/${itemName}`}
          style={{ textDecoration: "none" }}
          onClick={handleClick}
        >
          <div
            className={` icon-container ${
              itemName === currentPage ? "click" : ""
            }`}
          >
            {Icon}
          </div>

          <span className="titleName">{itemName}</span>
        </Link>
      </li>
      {/* <Nav check={isClicked} /> */}
    </>
  );
};
export default Navbar_items;
