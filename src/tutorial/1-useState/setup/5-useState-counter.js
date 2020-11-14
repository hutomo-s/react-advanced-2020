import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0)

  const complexIncrease = () => {
      setTimeout(() => {
        // setValue(value + 1)
        setValue( (prevValue) => {
          return prevValue + 1
        })
      }, 2000)
  }

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
          <h2>Basic Counter</h2>
          <h2>{value}</h2>
          <button className="btn" onClick={ () => setValue(value - 1) }>
            decrease
          </button>
          <button className="btn" onClick={ () => setValue(0) }>
            reset
          </button>
          <button className="btn" onClick={ () => setValue(value + 1) }>
            increase
          </button>
      </section>

      <section style={{ margin: '4rem 0' }}>
          <h2>Complex Counter</h2>
          <h2>{value}</h2>
          <button className="btn" onClick={complexIncrease}>
            complex increase
          </button>
      </section>
    </>
  )
};

export default UseStateCounter;
