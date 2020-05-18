import React from 'react';
import './App.css';
import Header from './coponents/Header';
import Navbar from './coponents/Navbar';
import Profile from './coponents/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      < Header />
      < Navbar />
      < Profile />
      
    </div>
  );
}

export default App;
