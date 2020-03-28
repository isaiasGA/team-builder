import React, { useState } from 'react';

const Form = props => {
    //3. Set up a STATE that will handle the INPUT VALUE from our form
    const [member, setMember] = useState({
        name: '',
        position: '',
        location: '',
        age: ''
    })

      //Target the correct value for each input
    const handleChange = event => {
      setMember({...member, [event.target.name]:[event.target.value]})
      console.log(member)
    };

    //Handle submitting the form functionality

    const submitForm = event => {
       //prevent refreshing each time we submit a form
      event.preventDefault();
        //We now are linking the function in our app.js files to our form input values
       props.addNewMember(member);
       //Reset inputs after submitting form
       setMember({ name: '', position: '', location: '', age: ''})
    }


    return(
        <form onSubmit = {submitForm}>
         <label htmlFor = 'name'>Name: </label>
         <input
          id = 'name'
          name = 'name'
          type = 'text'
          value = {member.name}
          onChange = {handleChange}
          autoComplete = 'off'
         />

         <label htmlFor = 'position'>Position: </label>
         <input
          id = 'position'
          name = 'position'
          type = 'text'
          value = {member.position}
          onChange = {handleChange}
          autoComplete = 'off'
         />

         <label htmlFor = 'location'>Location: </label>
         <input
          id = 'location'
          name = 'location'
          type = 'text'
          value = {member.location}
          onChange = {handleChange}
          autoComplete = 'off'
         />

         <label htmlFor = 'age'>Age: </label>
         <input
          id = 'age'
          name = 'age'
          type = 'text'
          value = {member.age}
          onChange = {handleChange}
          autoComplete = 'off'
         />
         <button>Submit</button>
        </form>
    )
};

export default Form;