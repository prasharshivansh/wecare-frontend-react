import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Phone } from "@mui/icons-material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Coachsignup from "./Coachsignup";
import Coachloginpage from "./Coachloginpage";
const Navbar = (props) => {
  const [navState, setNavState] = useState({
    logged_userId: sessionStorage.getItem("userId"),
    logged_coachId: sessionStorage.getItem("coachId"),
    loggedOut: false,
  });
  // useEffect(() => {
  //   console.log("sessionStorage");
  //   setNavState(sessionStorage.getItem("coachId"));
  // }, [sessionStorage]);

  return (
    <div
      style={{
        backgroundImage: `url(data:image/jpeg;base64,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`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        minHeight: "150% !important",
      }}
    >
      <Router>
        <nav className="navbar">
          <div className="navbar-brand">WeCare</div>
          <ul className="navbar-nav">
            {navState.logged_userId || navState.logged_coachId ? (
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
          <Route path="/coachlogin" element={<Coachloginpage />} />
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
