import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';

// USE TYPES WHEN MAKING APPLICATIONS
// USE INTERFACES WHEN MAKING LIBRARIES

function App() {
  return (
    <div className="App">
     <Greet name='Adhiraj' />
     <Greet name='Akhil' />
     <Greet name='Aryan' />
    </div>
  );
}

export default App;
