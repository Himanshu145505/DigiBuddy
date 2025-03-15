import React from "react";
import "../styles/AiAssistance.css";

const AiAssistance = () => {
  return (
    <div className="ai-assistancemain">
      {/* Header Section */}
      <div className="header">
        <h1>Hi, I’m your DigiBuddy Assistant!</h1>
        <p>
          I’m here to help you understand your habits and share practical tips to boost your productivity.
        </p>
      </div>

      {/* Behavior Insights Section */}
      <div className="insights">
        <h2>Your Behavior Insights</h2>
        <div className="insight-cards">
          <div className="insight-card">
            <h3>Most Used App</h3>
            <p>Instagram</p>
            <p>2h 30m / day</p>
          </div>
          <div className="insight-card">
            <h3>Productive Time</h3>
            <p>4h 15m / day</p>
          </div>
          <div className="insight-card">
            <h3>Social Media Usage</h3>
            <p>3h 20m / day</p>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="chat-box">
        <h2>Ask Me Anything</h2>
        <div className="chat-window">
          <p className="ai-response">
            🤖 Hi there! How can I help you today? Need advice on staying productive or limiting distractions?
          </p>
        </div>
        <input
          type="text"
          className="chat-input"
          placeholder="Type your question here..."
        />
        <button className="send-button">Send</button>
      </div>

      {/* Quick Tips Section */}
      <div className="quick-tips">
        <h2>Quick Productivity Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            🌱 Turn off push notifications for non-essential apps.
          </div>
          <div className="tip-card">
            ⏱ Try the Pomodoro technique for focused work.
          </div>
          <div className="tip-card">
            📵 Dedicate 30 minutes daily to offline hobbies.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAssistance;
