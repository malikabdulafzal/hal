import React from "react";
import "./Navbar_items.css";
import Nav from "./Nav.jsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar_items = ({ itemName, Icon, path }) => {
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
          className={` admin-container ${path === currentPage ? "click1" : ""}`}
          to={`/${path}`}
          style={{ textDecoration: "none" }}
          onClick={handleClick}
        >
          <div
            className={` icon-container ${path === currentPage ? "click" : ""}`}
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
