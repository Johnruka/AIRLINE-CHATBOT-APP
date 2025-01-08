import React, { useState } from 'react';
import axios from 'axios';

const CancelBookingForm = () => {
  const [bookingNumber, setBookingNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [customerId, setCustomerId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookingRequest = { bookingNumber, firstName, lastName, customerId };
    
    axios.post('/api/bookings/cancel', bookingRequest)
      .then(response => alert(response.data))
      .catch(error => console.error('Error canceling booking:', error));
  };

  return (
    <div>
      <h2>Cancel Booking</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={bookingNumber} onChange={e => setBookingNumber(e.target.value)} placeholder="Booking Number" required/>
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" required/>
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" required/>
        <input type="text" value={customerId} onChange={e => setCustomerId(e.target.value)} placeholder="Customer ID" required/>
        <button type="submit">Cancel</button>
      </form>
    </div>
  );
};

export default CancelBookingForm;