import React from 'react';

const Members = props => {
    return (
        <div>
         <h3>🤓 Name: {props.name}</h3>
         <p><strong>💻 Role: </strong>{props.position}</p>
         <p><strong>🌐 Location: </strong>{props.location}</p>
         <p><strong>🎂 Age: </strong>{props.age}</p>
         <button>Edit Info 📝</button>
        </div>
    )
};

export default Members;