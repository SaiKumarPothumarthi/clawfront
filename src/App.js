import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/EventList';
import CreateEvent from './components/CreateEvent';
import EventDetails from './components/EventDetails';
import Login from './components/Login';
import Register from './components/Register';
import './styles/Global.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
