import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';

// USE TYPES WHEN MAKING APPLICATIONS
// USE INTERFACES WHEN MAKING LIBRARIES

function App() {
  return (
    <div className="App">
      <Status status='error' />
      <Heading>Title here</Heading>
      <Oscar>
        <Heading>Oscar Title</Heading>
      </Oscar>
      <Greet name='Sam' isLoggedIn={true} />
    </div>
  );
}

export default App;
