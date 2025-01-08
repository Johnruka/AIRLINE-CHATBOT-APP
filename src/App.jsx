import React from 'react';
import BookingList from './components/BookingList';
import ReserveBookingForm from './components/ReserveBookingForm';
import CancelBookingForm from './components/CancelBookingForm';
import './App.css'; 

const App = () => {
  return (
    <div>
      <h1>Airline Reservation System</h1>
      <BookingList />
      <ReserveBookingForm />
      <CancelBookingForm />
    </div>
  );
};

export default App;