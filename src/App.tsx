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
import Input from './components/Input';
import Container from './components/Container';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import Counter from './components/state/Counter';

// USE TYPES WHEN MAKING APPLICATIONS
// USE INTERFACES WHEN MAKING LIBRARIES

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
