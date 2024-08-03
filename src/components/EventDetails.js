import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/events/${id}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
      .then(response => setEvent(response.data))
      .catch(error => console.error('Error fetching event:', error));
  }, [id]);

  return (
    <div>
      {event ? (
        <div>
          <h1>{event.name}</h1>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <p>Description: {event.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EventDetails;
