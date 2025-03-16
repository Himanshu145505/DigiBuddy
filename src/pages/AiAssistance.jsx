import React, { useEffect, useRef } from "react";
import "../styles/AiAssistance.css";

const AiAssistance = () => {
  const chatWindowRef = useRef(null);
  const chatInputRef = useRef(null);

  useEffect(() => {
    // Get DOM elements after component mounts
    const chatWindow = chatWindowRef.current;
    const chatInput = chatInputRef.current;
    const sendButton = document.querySelector(".send-button");

    // Initial typing animation for the first message
    const initialMessage = document.querySelector(".ai-response");
    if (initialMessage) {
      initialMessage.textContent = "🤖 ";
      const text =
        "Hi there! How can I help you today? Need advice on staying productive or limiting distractions?";

      let index = 0;

      function typeInitialText() {
        if (index < text.length) {
          initialMessage.textContent += text.charAt(index);
          index++;
          setTimeout(typeInitialText, Math.random() * 50 + 30);
        }
      }

      setTimeout(typeInitialText, 500);
    }

    // Handle sending messages function
    function handleSendMessage() {
      if (chatInput.value.trim() !== "") {
        // Add user message
        const userMessage = document.createElement("p");
        userMessage.textContent = chatInput.value;
        userMessage.style.textAlign = "right";
        userMessage.style.color = "#64ffda";
        chatWindow.appendChild(userMessage);

        // Clear input
        chatInput.value = "";

        // Simulate AI typing response
        setTimeout(() => {
          const aiResponse = document.createElement("p");
          aiResponse.className = "ai-response";
          aiResponse.textContent = "🤖 ";
          chatWindow.appendChild(aiResponse);

          // Type out the response
          const responses = [
            "I understand your question. Let me help with that.",
            "That's an interesting query. Here's what I found.",
            "I'd be happy to assist with that request.",
            "I'm analyzing that now. Here's my response.",
          ];
          const randomResponse =
            responses[Math.floor(Math.random() * responses.length)];
          let responseIndex = 0;

          function typeResponse() {
            if (responseIndex < randomResponse.length) {
              aiResponse.textContent += randomResponse.charAt(responseIndex);
              responseIndex++;
              setTimeout(typeResponse, Math.random() * 50 + 30);
            }
          }

          typeResponse();

          // Scroll to bottom
          chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 500);
      }
    }

    // Add event listeners
    if (sendButton) {
      sendButton.addEventListener("click", handleSendMessage);
    }

    if (chatInput) {
      chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          handleSendMessage();
        }
      });
    }

    // Cleanup function to remove event listeners
    return () => {
      if (sendButton) {
        sendButton.removeEventListener("click", handleSendMessage);
      }
      if (chatInput) {
        chatInput.removeEventListener("keypress", function (e) {
          if (e.key === "Enter") {
            handleSendMessage();
          }
        });
      }
    };
  }, []);

  return (
    <div className="ai-assistancemain">
      {/* Header Section */}
      <div className="header">
        <h1>Hi, I’m your DigiBuddy Assistant!</h1>
        <p>
          I’m here to help you understand your habits and share practical tips
          to boost your productivity.
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
        <div className="chat-window" ref={chatWindowRef}>
          <p className="ai-response">
            🤖 Hi there! How can I help you today? Need advice on staying
            productive or limiting distractions?
          </p>
        </div>
        <input
          type="text"
          className="chat-input"
          placeholder="Type your question here..."
          ref={chatInputRef}
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

