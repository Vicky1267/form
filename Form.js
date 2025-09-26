import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form has been submitted:", { name, email, message });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email Address: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="message">Feedback: </label>
        <textarea
          id="message"
          name="message"
          value={message}
          rows="5"
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
