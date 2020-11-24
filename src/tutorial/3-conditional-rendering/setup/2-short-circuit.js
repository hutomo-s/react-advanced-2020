import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const toggleErrorBtn = () => {
    setIsError(!isError)
  }

  return (
    <>
      <h1>{text || 'John Doe'}</h1>
      <button className="btn" onClick={toggleErrorBtn}>Toggle Error</button>
      {isError && <h1>Error...</h1>}

      {isError ? <p>There is An Error</p> : <h2>There is No Error</h2>}
    </>
  )
};

export default ShortCircuit;
