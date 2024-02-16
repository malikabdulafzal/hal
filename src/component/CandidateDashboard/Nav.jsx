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
import CandidateProfile from "./CandidateProfile";

const Nav = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);
  return (
    <>
      <div className="dash-container">
        <Link to="/Dashboard" style={{ textDecoration: "none" }}>
          <div>
            <h3 style={{ fontSize: "24px" }}>Hiring and learning</h3>
          </div>
        </Link>

        <ul className="ul-items">
          <Navbar_items
            itemName="Candidate Dashboard"
            fileName="dash.svg"
            Icon={
              <DashBoardIcon
                fill={`${
                  currentPage === "CandidateDashboard" ? "white" : "black"
                }`}
              />
            }
            path="CandidateDashboard"
          />
          <Navbar_items
            itemName=" Attempt Test"
            Icon={
              <ArticleIcon
                fill={`${currentPage === "CandidateTest" ? "white" : "black"}`}
              />
            }
            path="CandidateTest"
          />

          <Navbar_items
            Icon={
              <ListIcon
                fill={`${
                  currentPage === "CandidateCourses" ? "white" : "black"
                }`}
              />
            }
            itemName="Learning Courses"
            path="CandidateCourses"
          />

          <li>
            <h4>Account</h4>
          </li>
          <Navbar_items
            Icon={
              <UserIcon
                fill={`${
                  currentPage === "CandidateProfile" ? "white" : "black"
                }`}
              />
            }
            itemName="Candidate Profile"
            path="CandidateProfile"
          />
        </ul>
      </div>
    </>
  );
};
export default Nav;
