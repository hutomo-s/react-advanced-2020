import React, { useState } from 'react';

const UseStateBasics = () => {

  const [text, setText] = useState('random title 123')

  const handleClick = () => {
      if(text === 'random title 123')
        setText('hello world')
      else
        setText('random title 123')
  }

  return (
      <React.Fragment>
        <h2>{text}</h2>
        <button className="btn" onClick={handleClick}>Change Text</button>
      </React.Fragment>
    )
};

export default UseStateBasics;
