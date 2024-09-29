import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

// USE TYPES WHEN MAKING APPLICATIONS
// USE INTERFACES WHEN MAKING LIBRARIES
const personName = {
    first:'Adhiraj',
    last: 'Kar'
}
const nameList = [
  {
    first:'Adhiraj',
    last: 'Kar'
  },
  {
    first:'Akhil',
    last: 'Pratap'
  },
  {
    first:'Aryan',
    last: 'Arkane'
  }
]
function App() {
  return (
    <div className="App">
     <Greet name='Adhiraj' messageCount={3} isLoggedIn={true} />
     <Person name={personName}  />
     <PersonList names={nameList} />
    </div>
  );
}

export default App;
