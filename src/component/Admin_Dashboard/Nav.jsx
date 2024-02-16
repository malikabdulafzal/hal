import React from "react";
import "./Nav.css";
import Navbar_items from "./Navbar_items.jsx";
import { Link } from "react-router-dom";
import DashBoardIcon from "../../assets/dash.svg?react";
import ArticleIcon from "../../assets/article.svg?react";
import ListIcon from "../../assets/list.svg?react";
import ResultIcon from "../../assets/smallexam.svg?react";
import UserIcon from "../../assets/user.svg?react";
import StudentIcon from "../../assets/student.svg?react";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);
  return (
    <>
      <div className="dash-container">
        <Link to="/Dashboard" style={{ textDecoration: "none" }}>
          <div>
            <h3 style={{ fontSize: "24px", whiteSpace: "nowrap" }}>
              Hiring and learning
            </h3>
          </div>
        </Link>

        <ul className="ul-items">
          <Navbar_items
            itemName="Dashboard"
            fileName="dash.svg"
            Icon={
              <DashBoardIcon
                fill={`${currentPage === "Dashboard" ? "white" : "black"}`}
              />
            }
          />
          <Navbar_items
            itemName="Test"
            Icon={
              <ArticleIcon
                fill={`${currentPage === "Test" ? "white" : "black"}`}
              />
            }
          />
          <Navbar_items
            itemName="Candidates"
            Icon={
              <StudentIcon
                height="24"
                width="24"
                fill={`${currentPage === "Candidates" ? "white" : "black"}`}
              />
            }
          />
          <Navbar_items
            Icon={
              <ListIcon
                fill={`${currentPage === "Courses" ? "white" : "black"}`}
              />
            }
            itemName="Courses"
          />

          <Navbar_items
            Icon={
              <ResultIcon
                fill={`${currentPage === "Result" ? "white" : "black"}`}
              />
            }
            itemName="Result"
          />
          <li>
            <h4>Account</h4>
          </li>
          <Navbar_items
            Icon={
              <UserIcon
                fill={`${currentPage === "Profile" ? "white" : "black"}`}
              />
            }
            itemName="Profile"
          />
        </ul>
      </div>
    </>
  );
};
export default Nav;
