import React from 'react';
import BookingList from './components/BookingList';
import ReserveBookingForm from './components/ReserveBookingForm';
import CancelBookingForm from './components/CancelBookingForm';
import Chatbot from './components/Chatbot';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Airline Reservation System</h1>
      <BookingList />
      <ReserveBookingForm />
      <CancelBookingForm />
      <Chatbot />
    </div>
  );
};

export default App;
