// UVTChatbot.jsx
import React, { useState, useEffect } from 'react';
import './index.css';

const UVTChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    // You can send the user's message to your backend or process it with GPT here
  };

  useEffect(() => {
    // Simulate a response from the chatbot (you would replace this with GPT responses)
    const botResponse = { text: 'Hello! How can I help you today?', sender: 'bot' };
    setMessages([...messages, botResponse]);
  }, []);

  return (
    <div className="uvt-chatbot-container">
      <div className="uvt-chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`uvt-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="uvt-chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default UVTChatbot;
