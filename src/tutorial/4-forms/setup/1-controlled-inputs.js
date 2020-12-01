import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [people, setPeople] = useState([])

  // read these references
  // https://dmitripavlutin.com/react-usestate-hook-guide/#14-updating-state
  // https://sbalagop.wordpress.com/2017/07/15/copy-concat-prepend-javascript-array-with-es6-spread/
  const handleSubmit = (e) => {
    e.preventDefault()

    // validation
    if(!firstName)
    {
      alert("First Name is Required")
      return
    }
    if(!email)
    {
      alert("Email is Required")
      return
    }

    // success case
    setPeople(() => {
      const id = new Date().getTime().toString()
      const person = {id, firstName, email}
      setFirstName('')
      setEmail('')
      return [...people, person]
    })
  }

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              id="email" 
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="submit">Add Person</button>
        </form>

        {people.map(person => {
          const {id, firstName, email} = person
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
