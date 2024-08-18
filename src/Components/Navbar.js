import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Phone } from "@mui/icons-material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Coachsignup from "./Coachsignup";
const Navbar = (props) => {
  const [navState, setNavState] = useState({
    logged_userId: sessionStorage.getItem("userId"),
    logged_coachId: sessionStorage.getItem("coachId"),
    loggedOut: false,
  });

  return (
    <div
      style={{
        backgroundImage: `url(https://img.freepik.com/premium-vector/healthcare-technology-concept-modern-abstract-background-with-medical-symbol-hexagon-pattern_236657-1688.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100%",
      }}
    >
      <Router>
        <nav className="navbar">
          <div className="navbar-brand">WeCare</div>
          <ul className="navbar-nav">
            {!navState.logged_userId ? (
              <>
                <li className="navbar-item">
                  <a href="#">View Profile</a>
                </li>
                <li className="navbar-item">
                  <a href="#">My Schedules</a>
                </li>
                <li className="navbar-item">
                  <a href="#">Call Us: 080 2233447</a>
                </li>
                <li className="navbar-item">
                  <a href="#">Logout</a>
                </li>
              </>
            ) : (
              <div className="navbar-nav">
                <Phone fontSize="small" color="primary" />
                <li className="navbar-item">Call us: 080 2233447</li>
              </div>
            )}
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/coachsignup" element={<Coachsignup />} />
          <Route path="/coachlogin" element={<Home />} />
          <Route path="/usersignup" element={<Home />} />
          <Route path="/userlogin" element={<Home />} />
          <Route path="/coachhome" element={<Home />} />
          <Route path="/userhome" element={<Home />} />
          <Route path="/userappointments" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navbar;
