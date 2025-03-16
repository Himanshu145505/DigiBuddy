import React, { useEffect, useRef, useState } from "react";
import { 
  FaRobot, 
  FaPaperPlane, 
  FaLightbulb, 
  FaChartLine, 
  FaMobileAlt, 
  FaClock,
  FaArrowLeft 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/AiAssistance.css";

const AiAssistance = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const chatWindowRef = useRef(null);
  const navigate = useNavigate();

  // Initial AI message
  useEffect(() => {
    addMessage("ai", "Hi there! How can I help you today? Need advice on staying productive or limiting distractions?");
  }, []);

  const addMessage = (sender, text) => {
    setMessages(prev => [...prev, { sender, text }]);
    setTimeout(() => {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }, 100);
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    addMessage("user", inputText);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I understand your question. Let me help with that.",
        "That's an interesting query. Here's what I found.",
        "I'd be happy to assist with that request.",
        "I'm analyzing that now. Here's my response.",
      ];
      addMessage("ai", responses[Math.floor(Math.random() * responses.length)]);
    }, 1000);

    setInputText("");
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="ai-assistancemain">
      {/* Header Section */}
      <div className="header">
        <button className="back-button" onClick={handleGoBack}>
          <FaArrowLeft />
        </button>
        <div className="header-content">
          <h1><FaRobot className="header-icon" /> Hi, I'm your DigiBuddy Assistant!</h1>
          <p>
            I'm here to help you understand your habits and share practical tips
            to boost your productivity.
          </p>
        </div>
      </div>

      {/* Rest of your existing JSX... */}
      {/* Behavior Insights Section */}
      <div className="insights">
        <h2><FaChartLine className="section-icon" /> Your Behavior Insights</h2>
        <div className="insight-cards">
          <div className="insight-card">
            <FaMobileAlt className="card-icon" />
            <h3>Most Used App</h3>
            <p>Instagram</p>
            <p className="stats">2h 30m / day</p>
          </div>
          <div className="insight-card">
            <FaClock className="card-icon" />
            <h3>Productive Time</h3>
            <p className="stats">4h 15m / day</p>
          </div>
          <div className="insight-card">
            <FaChartLine className="card-icon" />
            <h3>Social Media Usage</h3>
            <p className="stats">3h 20m / day</p>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="chat-box">
        <h2><FaPaperPlane className="section-icon" /> Ask Me Anything</h2>
        <div className="chat-window" ref={chatWindowRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.sender === 'ai' && <FaRobot className="message-icon" />}
              <div className="message-content">{msg.text}</div>
            </div>
          ))}
        </div>
        <div className="chat-controls">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your question here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="send-button" onClick={handleSend}>
            Send <FaPaperPlane className="send-icon" />
          </button>
        </div>
      </div>

      {/* Quick Tips Section */}
      <div className="quick-tips">
        <h2><FaLightbulb className="section-icon" /> Quick Productivity Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <FaLightbulb className="tip-icon" />
            Turn off push notifications for non-essential apps
          </div>
          <div className="tip-card">
            <FaLightbulb className="tip-icon" />
            Try the Pomodoro technique for focused work
          </div>
          <div className="tip-card">
            <FaLightbulb className="tip-icon" />
            Dedicate 30 minutes daily to offline hobbies
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAssistance;