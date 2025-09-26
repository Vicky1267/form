import React from "react";
import { useState } from "react";


const [name, SetName] = useState ('');
const [email, SetEmail] = useState ('');
const [message, SetMessage] = useState ('');

const handleChange = (e) => {
    const {name, value} = e.target;
    If (name=='name'); {
        SetName(value);
    }  if (name=='email') {
        SetEmail(value);
    } else if (name=='message'){
        SetMessage(value);
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form has been submitted:', {name, email, message});

    SetName('');
    SetEmail('');
    SetMessage('')
};
function Form() {
    return ( 
        <form onSubmit ={handleSubmit}>
            <div>
            <label htmlFor="name">Name: </label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={handleChange}
            required
            />
            </div>
             <div>
            <label htmlFor="name">Email Address: </label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
            />
            </div>
             <div>
            <label htmlFor="name">Feedback: </label>
            <input
            type="text"
            id="message"
            value={message}
            rows="5"
            onChange={handleChange}
            required
            />
            </div>
        </form>
        
        )};

 
export default Form;