import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashScreen.css";

const SplashScreen = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  return (
    <div className="splash-screen">
      {/* Logo Section */}
      <div className="splash-logo">
        <div className="logo-circle">D</div>
      </div>

      {/* Title and Tagline Section */}
      <h1 className="splash-title">Welcome to DigiBuddy</h1>
      <p className="splash-tagline">
        Helping you understand and improve your digital habits with AI-powered insights.
      </p>

      {/* Features Section */}
      <div className="splash-features">
        <div className="feature-card">
          <div className="icon-circle green">📊</div>
          <h3>Usage Analysis</h3>
        </div>
        <div className="feature-card">
          <div className="icon-circle blue">🤖</div>
          <h3>AI Assistance</h3>
        </div>
        <div className="feature-card">
          <div className="icon-circle orange">📑</div>
          <h3>Report Generation</h3>
        </div>
        <div className="feature-card">
          <div className="icon-circle purple">🔧</div>
          <h3>Other</h3>
        </div>
      </div>

      {/* Start Button Section */}
      <button
        className="start-button"
        onClick={() => navigate("/authentication")}
      >
        Get Started <span className="arrow">→</span>
      </button>
    </div>
  );
};

export default SplashScreen;
