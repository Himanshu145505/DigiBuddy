import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";

const Homepage = () => {
  const navigate = useNavigate(); // Navigation hook for redirection

  return (
    <div className="homepage">
      {/* Header Section */}
      <div className="homepage-header">
        <h1>Welcome to DigiBuddy</h1>
        <button
          className="logout-button"
          onClick={() => navigate("/login")} // Redirect to login page on logout
        >
          Logout
        </button>
      </div>

      {/* AI Recommendation Section */}
      <div className="ai-recommendations">
        <h2>AI-Powered Insights</h2>
        <p>
          Today's tip: Minimize your time spent on social media by enabling content filters and using the Pomodoro technique to enhance focus.
        </p>

        <p>
          Today's tip: Minimize your time spent on social media by enabling content filters and using the Pomodoro technique to enhance focus.
        </p>

        <p>
          Today's tip: Minimize your time spent on social media by enabling content filters and using the Pomodoro technique to enhance focus.
        </p>
      </div>

      {/* Features Section */}
      <div className="features">
        <div
          className="feature-card usage-analysis"
          onClick={() => navigate("/usage-analysis")}
        >
          <h3>Usage Analysis</h3>
        </div>
        <div
          className="feature-card ai-assistance"
          onClick={() => navigate("/ai-assistance")}
        >
          <h3>AI Assistance</h3>
        </div>
        <div
          className="feature-card report-generation"
          onClick={() => navigate("/report-generation")}
        >
          <h3>Report Generation</h3>
        </div>
        <div
          className="feature-card other"
          onClick={() => navigate("/other")}
        >
          <h3>Other</h3>
        </div>
      </div>

      {/* Bottom Navigation Section */}
      <div className="bottom-navigation">
        <div
          className="nav-item"
          onClick={() => navigate("/homepage")} // Keep user on the homepage
        >
          🏠 <span>Home</span>
        </div>
        <div
          className="nav-item"
          onClick={() => navigate("/report-generation")} // Redirect to reports
        >
          📄 <span>Reports</span>
        </div>
        <div
          className="nav-item"
          onClick={() => navigate("/settings")} // Redirect to settings
        >
          ⚙️ <span>Settings</span>
        </div>
        <div
          className="nav-item"
          onClick={() => navigate("/profile")} // Redirect to profile
        >
          👤 <span>Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
