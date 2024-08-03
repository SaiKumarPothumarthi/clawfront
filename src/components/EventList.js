import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/EventList.css';


const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/events', { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h1>Event List</h1>
      <Link to="/create">Create New Event</Link>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <Link to={`/events/${event._id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
