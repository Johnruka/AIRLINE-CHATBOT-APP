import React, { useState } from 'react';
import axios from 'axios';

const ReserveBookingForm = () => {
  const [bookingNumber, setBookingNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookingRequest = { bookingNumber, firstName, lastName };
    
    axios.post('/api/bookings/reserve', bookingRequest)
      .then(response => alert(response.data))
      .catch(error => console.error('Error reserving booking:', error));
  };

  return (
    <div>
      <h2>Reserve Booking</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={bookingNumber} onChange={e => setBookingNumber(e.target.value)} placeholder="Booking Number" required/>
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" required/>
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" required/>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default ReserveBookingForm;
