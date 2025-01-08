import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/bookings')
      .then(response => {
        if (Array.isArray(response.data)) {
          setBookings(response.data);
        } else {
          setBookings([]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
        setError('Failed to fetch bookings');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.bookingNumber}>
            {booking.firstName} {booking.lastName} - {booking.bookingNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;