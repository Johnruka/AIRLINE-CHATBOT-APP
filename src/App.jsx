import React from 'react';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://images.unsplash.com/photo-1529074963765-fc8a6e2c1b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fGFlcm9wbGFuZXx8MHx8fHx8MTY5ODAwMzY5OQ&ixlib=rb-1.2.1&q=80&w=1080"
          alt="Airplane in sky"
          className="header-image"
        />
        <h1>Welcome to LexFunAirline Chatbot</h1>
        <p>Created by John Baptist</p>
        <div className="App-description">
          <p>
            Our AI-powered chatbot is here to assist you with making and managing your flight reservations. Whether you want to reserve a new booking or cancel an existing one, LexFunAirline is here to assist with ease and convenience.
          </p>
          <p><strong>What You Can Do:</strong></p>
          <ul>
            <li>Reserve a flight booking with a booking number, first name, and last name.</li>
            <li>Cancel a flight booking with booking number, first name, last name, and customer ID.</li>
            <li>Get assistance from our friendly and joyous AI support agent!</li>
          </ul>
        </div>
      </header>
      <Chat />
    </div>
  );
}

export default App;
