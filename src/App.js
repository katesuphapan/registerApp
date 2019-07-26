import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationDropdown from './components/LocationDropdown'
import ThaiLocationSelectForm from './components/ThaiLocationSelectForm'

function App() {

  let provinces = [
    { name: 'Bangkok', id: 1 },
    { name: 'Nonthaburi', id: 2 }
  ]

  return (
    <ThaiLocationSelectForm/>
  );
}

export default App;
