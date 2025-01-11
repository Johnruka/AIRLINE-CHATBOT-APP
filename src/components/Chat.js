import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const chatId = 'exampleChatId'; // Replace with a dynamic chat ID if needed

  const handleSendMessage = async () => {
    const newMessage = { user: 'You', text: currentMessage };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post('http://localhost:8080/api/assistant/reactive/chat', {
        chatId,
        message: currentMessage,
      });

      response.data.forEach((message) => {
        const botMessage = { user: 'AI', text: message };
        setMessages((msg) => [...msg, botMessage]);
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setCurrentMessage('');
  };

  return (
    <div>
      <div style={{ border: '1px solid black', padding: '10px', height: '400px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input 
        type="text" 
        value={currentMessage} 
        onChange={(e) => setCurrentMessage(e.target.value)} 
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
