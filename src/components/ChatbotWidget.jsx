import React, { useState } from 'react';
import './ChatbotWidget.css';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I'm Sparky, your safety mascot. How can I help you today?" }
  ]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleQuickReply = (reply) => {
    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: reply }]);
    
    // Simulate bot thinking and responding
    setTimeout(() => {
      if (reply === "I need a quote") {
        setMessages(prev => [...prev, { type: 'bot', text: "Great! You can browse our products and add them to your Quote Cart, or talk to an expert directly." }]);
      } else if (reply === "Talk to an Expert") {
        setMessages(prev => [...prev, { type: 'bot', text: "Redirecting you to our WhatsApp support line..." }]);
        setTimeout(() => {
          window.open("https://wa.me/917976315557?text=Hi,%20I%20would%20like%20to%20talk%20to%20a%20fire%20safety%20expert.", "_blank");
        }, 1500);
      }
    }, 1000);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="header-info">
            <img src="./images/mascot.jpg" alt="Sparky Mascot" className="chat-avatar" />
            <div>
              <h4>Sparky</h4>
              <span>Online</span>
            </div>
          </div>
          <button className="chat-close" onClick={toggleChat}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        
        <div className="chat-body">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-bubble ${msg.type}`}>
              {msg.text}
            </div>
          ))}
          
          {/* Quick Replies */}
          {messages[messages.length - 1].type === 'bot' && (
            <div className="quick-replies animate-fade-up">
              <button onClick={() => handleQuickReply("I need a quote")}>I need a quote</button>
              <button onClick={() => handleQuickReply("Talk to an Expert")}>Talk to an Expert</button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Button */}
      <button className={`chatbot-fab ${isOpen ? 'hidden' : ''}`} onClick={toggleChat}>
        <img src="./images/mascot.jpg" alt="Chat with us" />
        <span className="fab-badge">1</span>
      </button>
    </div>
  );
};

export default ChatbotWidget;
