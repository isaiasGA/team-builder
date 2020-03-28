import React, {useState} from 'react';
import './App.css';

import Form from './components/Form';
import Members from './components/Members';


function App() {
   //1. Setting up our state 
  const [team, setTeam] = useState([{
    id: 1,
    name: 'Isaias',
    position: 'Software Engineer',
    location: 'San Diego',
    age: '28'

  }]);

  //2. Create a function that will recive the members that have been added in our form.js file
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      position: member.position,
      location: member.location,
      age: member.age
    }
    //2.1: We now want re-render ALL (...) of our current memeber as well as our newly added members in to our
      //''team state
      setTeam([...team, newMember]);
  }

  return (
    <div className="App">
     <h1>My Team 👨‍💻👩‍💻</h1>
     <Form addNewMember = {addNewMember}/>
     {team.map(member => 
       <Members 
         name = {member.name}
         position = {member.position}
         location = {member.location}
         age = {member.age}
         />
       )}
    </div>
  );
}

export default App;
