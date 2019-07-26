import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationDropdown from './components/LocationDropdown'

function App() {

  let provinces = [
    { name: 'Bangkok', id: 1 },
    { name: 'Nonthaburi', id: 2 }
  ]

  return (
    <div>
      <LocationDropdown defaultLabel="จังหวัด" locations={provinces} />
    </div>
  );
}

export default App;
