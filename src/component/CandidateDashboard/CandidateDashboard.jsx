import React from "react";
import Style from "./CandidateDashboard.module.css";
import CandidateResult from "./CandidateResult";
import CandidateTest from "./CandidateTest";
import CandidateCourses from "./CandidateCourses";
import CandidateProfile from "./CandidateProfile";

import "./CandidateResult";

import "./CandidateProfile";
import { useLocation } from "react-router-dom";

import Nav from "./Nav";
import Topbar from "./Topbar";

const CandidateDashboard = () => {
  const location = useLocation();
  console.log("the location is".location);
  return (
    <>
      <div className={Style.DashboardContainer}>
        <Nav />
        <div className={Style.Right}>
          <Topbar />
          {/* {location.pathname === "/CandidateDashboard" ? (
            <CandidateResult />
          ) : location.pathname === "/CandidateTest" ? (
            <CandidateTest />
          ) : null}
          {location.pathname === "/CandidateDashboard" ? (
            <CandidateResult />
          ) : location.pathname === "/CandidateCourses" ? (
            <CandidateCourses />
          ) : null}
          {location.pathname === "/CandidateDashboard" ? (
            <CandidateResult />
          ) : location.pathname === "/CandidateProfile" ? (
            <CandidateProfile />
          ) : null} */}
          {location.pathname === "/CandidateProfile" ? (
            <CandidateProfile />
          ) : null}
          {location.pathname === "/CandidateTest" ? <CandidateTest /> : null}
          {location.pathname === "/CandidateCourses" ? (
            <CandidateCourses />
          ) : null}
          {location.pathname === "/CandidateDashboard" ? (
            <CandidateResult />
          ) : null}
        </div>
      </div>
    </>
  );
};
export default CandidateDashboard;
