import "./App.css";
import React from "react";
import Service from "./component/Service";
import Contact from "./component/Contact.jsx";
import Navbar from "./component/Navbar.jsx";
import Top from "./component/Top.jsx";
import SignIn from "./component/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./component/SignUp";
import Picture from "./component/Picture";

import Dashboard from "./component/Admin_Dashboard/Dashboard";
import ForgetPassword from "./component/ForgetPassword";
// import AddCandidates from "./component/Admin_Dashboard/AddCandidates";
import CandidateDashboard from "./component/CandidateDashboard/CandidateDashboard";
import CandidateSignIn from "./component/CandidateDashboard/CandidateSignIn";
import CandidateSignup from "./component/CandidateDashboard/CandidateSignup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import PrivateRoutes from "./Utility/PrivateRoutes.js";
import { useNavigate } from "react-router-dom";
import AboutUs from "./component/AboutUs";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          {/* <PrivateRoutes> */}
          <Route element={<PrivateRoutesHR />}>
            <Route path="/Dashboard" element={<Dashboard />} />

            <Route path="/Courses" element={<Dashboard />} />
            <Route path="/Test" element={<Dashboard />} />
            <Route path="/Candidates" element={<Dashboard />} />
            <Route path="/Profile" element={<Dashboard />} />
            <Route path="/Result" element={<Dashboard />} />
          </Route>
          <Route element={<PrivateRoutesCandidate />}>
            <Route
              path="/CandidateDashboard"
              element={<CandidateDashboard />}
            />
            <Route path="/CandidateTest" element={<CandidateDashboard />} />
            <Route path="/CandidateCourses" element={<CandidateDashboard />} />
            <Route path="/CandidateProfile" element={<CandidateDashboard />} />
          </Route>
          {/* </PrivateRoutes> */}
          <Route path="/CandidateSignin" element={<CandidateSignIn />} />
          <Route path="/CandidateSignup" element={<CandidateSignup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
};

const PrivateRoutesHR = () => {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");
  console.log("in privateRoutes boolean", Boolean(storedToken));
  let auth = { token: Boolean(storedToken) };
  if (!auth.token) {
    toast.warn("Please login or Signup");
    navigate("/");
  }
  return auth.token ? <Dashboard /> : <Home />;
};
const PrivateRoutesCandidate = () => {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");
  console.log("in privateRoutes boolean", Boolean(storedToken));
  let auth = { token: Boolean(storedToken) };
  if (!auth.token) {
    toast.warn("Please login or Signup");
    navigate("/");
  }
  return auth.token ? <CandidateDashboard /> : <Home />;
};

const Home = () => {
  return (
    <div className="body-nav">
      <Navbar />
      <Picture />
      <Service />
      <Contact />
      <Footer />
      <Top />
    </div>
  );
};

export default App;
