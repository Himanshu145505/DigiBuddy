import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to login page on logout
    navigate("/login");
  };

  return (
    <div className="profile-page">
      {/* Profile Header Section */}
      <div className="profile-header">
        <div className="profile-picture">
          {/* Placeholder for profile picture */}
          <span>P</span>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Profile Options */}
      <div className="profile-options">
        <div className="option-card" onClick={() => navigate("/edit-profile")}>
          ✏️ Edit Profile
        </div>
        <div
          className="option-card"
          onClick={() => navigate("/privacy-permissions")}
        >
          🔒 Privacy & Permissions
        </div>
        <div className="option-card" onClick={() => navigate("/help")}>
          ❓ Help
        </div>
        <div className="option-card" onClick={() => navigate("/data")}>
          📂 Data Deletion & Export
        </div>
        <div
          className="option-card"
          onClick={() => navigate("/theme-customization")}
        >
          🎨 Theme & Customization
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-navigation">
        <div
          className="nav-item"
          onClick={() => navigate("/homepage")}
        >
          🏠 <span>Home</span>
        </div>
        <div
          className="nav-item"
          onClick={() => navigate("/settings")}
        >
          ⚙️ <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
