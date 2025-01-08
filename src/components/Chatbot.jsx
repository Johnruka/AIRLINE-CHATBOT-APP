import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; // No empty messages

    const chatRequest = {
      chatId: Date.now().toString(), // Or some unique chat ID logic
      message,
    };

    // Add user message to chat history locally
    setChatHistory([...chatHistory, { from: 'user', message }]);
    setMessage('');
    setLoading(true);

    try {
      const response = await axios.post('/api/assistant/reactive/chat', chatRequest);
      // Assuming the response is an array of messages from the server
      response.data.forEach(msg =>
        setChatHistory(prevHistory => [...prevHistory, { from: 'bot', message: msg }])
      );
    } catch (err) {
      console.error('Error during chat:', err);
      setError('Failed to communicate with the chatbot');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <h2>Chat with our AI Assistant</h2>
      <div className="chat-history">
        {chatHistory.map((entry, index) => (
          <div key={index} className={`chat-message ${entry.from}`}>
            <b>{entry.from === 'user' ? 'You' : 'Assistant'}:</b> {entry.message}
          </div>
        ))}
      </div>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          required
        />
        <button type="submit">Send</button>
      </form>
      {loading && <p>Loading response...</p>}
    </div>
  );
};

export default Chatbot;
