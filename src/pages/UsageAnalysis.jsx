import React from "react";
import "../styles/UsageAnalysis.css";

const UsageAnalysis = () => {
  return (
    <div className="usage-analysismain">
      {/* Header Section */}
      <div className="header">
        <h1>Usage Analysis</h1>
      </div>

      {/* Statistics Section */}
      <div className="stats">
        <div className="stat-card">
          <h3>Total Clicks</h3>
          <p>12,345</p>
        </div>
        <div className="stat-card">
          <h3>Peak Hours</h3>
          <p>2pm - 4pm</p>
        </div>
        <div className="stat-card">
          <h3>% Change</h3>
          <p>30% vs Last Week</p>
        </div>
        <div className="stat-card">
          <h3>Most Used App</h3>
          <p>Chrome</p>
        </div>
        <div className="stat-card">
          <h3>Most Visited Website</h3>
          <p>Youtube.com</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts">
        <div className="chart-card">
          <h3>Usage Trends</h3>
          {/* Add a placeholder or chart library component */}
          <div className="chart-placeholder">Bar Chart Placeholder</div>
        </div>
        <div className="chart-card">
          <h3>Ads Clicked</h3>
          {/* Add a placeholder or chart library component */}
          <div className="chart-placeholder">Bar Chart Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default UsageAnalysis;
