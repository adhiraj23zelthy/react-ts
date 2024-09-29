import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';

// USE TYPES WHEN MAKING APPLICATIONS
// USE INTERFACES WHEN MAKING LIBRARIES

function App() {
  return (
    <div className="App">
      <Button onClick={()=>alert('Button clicked')} />
    </div>
  );
}

export default App;
