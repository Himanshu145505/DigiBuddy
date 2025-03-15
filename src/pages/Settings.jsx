import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Settings.css";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="settings-page">
      <h1 className="settings-title">Settings</h1>

      {/* Account Section */}
      <div className="settings-section">
        <h2>Account</h2>
        <div className="settings-option" onClick={() => navigate("/manage-account")}>
          Manage Email & Password
        </div>
        <div className="settings-option">Enable Two-Factor Authentication</div>
        <div className="settings-option">Delete Account</div>
      </div>

      {/* Notifications Section */}
      <div className="settings-section">
        <h2>Notifications</h2>
        <div className="settings-option">Notification Preferences</div>
        <div className="settings-option">Set Quiet Hours</div>
      </div>

      {/* Display Section */}
      <div className="settings-section">
        <h2>Display & Themes</h2>
        <div className="settings-option">Switch to Dark/Light Mode</div>
        <div className="settings-option">Change Font Size</div>
        <div className="settings-option">Pick an Accent Color</div>
      </div>

      {/* Privacy & Data Section */}
      <div className="settings-section">
        <h2>Privacy & Data</h2>
        <div className="settings-option">Manage App Permissions</div>
        <div className="settings-option">Request Data Export</div>
        <div className="settings-option">Delete All Data</div>
      </div>

      {/* About & Support Section */}
      <div className="settings-section">
        <h2>About & Support</h2>
        <div className="settings-option">Help Center</div>
        <div className="settings-option">Contact Support</div>
        <div className="settings-option">App Version: 1.0.0</div>
      </div>
    </div>
  );
};

export default Settings;
