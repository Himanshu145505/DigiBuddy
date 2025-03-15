import React from "react";
import "../styles/Authentication.css";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Authentication = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <div className="auth-page">
      <div className="auth-header">
        <div className="graph-icon">📈</div> {/* Replace this with a graph icon if needed */}
        <h1>DigiHabit</h1>
        <p className="auth-tagline">
          Unveil your digital footprint, decode your habits, and take control of your online behavior.
        </p>
      </div>
      <div className="auth-buttons">
        <button
          className="auth-button login"
          onClick={() => navigate("/login")} // Navigate to the login page
        >
          Log In
        </button>
        <button
          className="auth-button signup"
          onClick={() => navigate("/signup")} // Navigate to the signup page
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Authentication;
