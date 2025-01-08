import React from 'react';
import BookingList from './BookingList';
import ReserveBookingForm from './ReserveBookingForm';
import CancelBookingForm from './CancelBookingForm';
import './styles.css'; 

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