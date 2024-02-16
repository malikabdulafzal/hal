import React from "react";
import "./Dashboard.css";
import Nav from "./Nav.jsx";
import Topbar from "./Topbar.jsx";
import Record from "./Record.jsx";
import CoursesTable from "./CoursesTable";
import TestTable from "./TestTable";
import AddCandidates from "./AddCandidates";
import Profile from "./Profile";
import Result from "./Result";

import { useLocation } from "react-router-dom";

const addSpace = (str) => {
  const parts = str.split("/");
  const newPath = parts.join(" / ");
  return newPath;
};
export const Dashboard = () => {
  const location = useLocation();
  const name1 = addSpace(location.pathname);

  return (
    <>
      <div className={`Admin-Dashboard`}>
        <Nav className="dash-left" />
        <div className="dash-right">
          <Topbar topName={name1} />

          {/* {location.pathname === "/Dashboard" ? (
            <Record />
          ) : location.pathname === "/Courses" ? (
            <CoursesTable />
          ) : null}

          {location.pathname === "/Dashboard" ? (
            <Record />
          ) : location.pathname === "/Test" ? (
            <TestTable />
          ) : null}
          {location.pathname === "/Dashboard" ? (
            <Record />
          ) : location.pathname === "/Candidates" ? (
            <AddCandidates />
          ) : null} */}
          {location.pathname === "/Dashboard" ? <Record /> : null}
          {location.pathname === "/Courses" ? <CoursesTable /> : null}
          {location.pathname === "/Test" ? <TestTable /> : null}
          {location.pathname === "/Candidates" ? <AddCandidates /> : null}
          {location.pathname === "/Profile" ? <Profile /> : null}
          {location.pathname === "/Result" ? <Result /> : null}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
