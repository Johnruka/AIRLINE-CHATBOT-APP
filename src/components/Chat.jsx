import React, { useState } from 'react';
import axios from 'axios';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const chatId = 'exampleChatId'; // Replace with a dynamic chat ID if needed

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return; // Avoid sending empty messages

    // Add the user's message to the chat
    const newMessage = { user: 'You', text: currentMessage };
    setMessages([...messages, newMessage]);

    try {
      // Make POST request to the chat API
      const response = await axios.post('http://localhost:8080/api/assistant/reactive/chat', {
        chatId,
        message: currentMessage,
      });

      // Log the response to debug
      console.log('API Response:', response.data);

      // Handle different response types
      if (Array.isArray(response.data)) {
        response.data.forEach((message) => {
          addBotMessage(message);
        });
      } else {
        addBotMessage(response.data);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      addBotMessage('Sorry, there was an error processing your request.');
    }

    // Clear the input field
    setCurrentMessage('');
  };

  // Function to add bot message to the chat
  const addBotMessage = (messageText) => {
    const botMessage = { user: 'AI', text: messageText };
    setMessages((msg) => [...msg, botMessage]);
  };

  return (
    <div className="Chat">
      <div className="Chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`Chat-message ${msg.user.toLowerCase()}`}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="Chat-input-area">
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;