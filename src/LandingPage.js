import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./LandingPage.css";
import a from "./images/hy2.png";
import c from "./images/c.png";
import fu from "./images/fu.png";
import h from "./images/h.png";
import i from "./images/i.png";
import l from "./images/l.png";
import m from "./images/m.png";
import s from "./images/s.png";
import sa from "./images/sa.png";

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container navi">
          <a className="navbar-brand" href="/">HyperComply</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Center Navigation Links */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Customers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Enterprise</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Learn more</a>
              </li>
            </ul>
            {/* Right Aligned Links */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-success " href="/">Request A Demo</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container hero-section py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="hero-title">
              Complete security questionnaires in minutes using AI
            </h1>
            <p className="hero-description">
              Build and scale customer trust using HyperComply's AI-powered platform. Automate security questionnaires and automate evidence-sharing with a powerful and secure Trust Page.
            </p>
            <form className="d-flex mb-3">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter Your Work Email"
              />
              <button type="submit" className="btn btn-success">
                Request A Demo
              </button>
            </form>
          </div>
          <div className="col-md-6 shadow-lg">
            <img
              src={a}
              alt="Application & Interface Security"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Footer Logos */}
      <div className="footer-logos">
        <div className="logo-ticker">
          <div className="logo-track">
            {/* First set of logos */}
            <img src={c} alt="Logo 1" className="footer-logo" />
            <img src={fu} alt="Logo 2" className="footer-logo" />
            <img src={h} alt="Logo 3" className="footer-logo" />
            <img src={i} alt="Logo 4" className="footer-logo" />
            {/* Second (duplicated) set of logos for smooth looping */}
            <img src={l} alt="Logo 1" className="footer-logo" />
            <img src={m} alt="Logo 2" className="footer-logo" />
            <img src={s} alt="Logo 3" className="footer-logo" />
            <img src={sa} alt="Logo 4" className="footer-logo" />
          </div>
        </div>
      </div>

      {/* Popup Component */}
      {showPopup && (
        <div className="chat-popup">
          <div className="chat-popup-header">
            <h5>Have any questions? Our team is here to help.</h5>
            <button onClick={closePopup} className="close-btn">&times;</button>
          </div>
          <div className="chat-popup-body">
            <p>
              <span>💬 Messages</span>
            </p>
            <p>
              <span>📩 Send us a message</span>
            </p>
          </div>
          <div className="chat-popup-footer">
            <small>Powered by TXC</small>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
