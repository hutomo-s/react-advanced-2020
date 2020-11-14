import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: "John",
    age: 24,
    message: "Hai I'm John"
  })

  const changeMessage = () => {
    setPerson({
      ...person,
      message: "Hello World"
    })
  }

  return (
    <>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.message}</h4>
      <button className="btn" onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default UseStateObject;
