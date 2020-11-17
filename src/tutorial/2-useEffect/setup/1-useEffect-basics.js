import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0)

  console.log("Rendering")

  // use effect tidak boleh dipanggil secara conditional
  // di dalam if
  // basic rules of react hooks
  useEffect(() => {
    console.log("Calling Use Effect")

    // conditional use effect
    if(value >= 1)
      document.title = `New Message (${value})`
  }, [value])

  // second parameter: dependency list, format array
  // case 1: no parameter
  // useEffect will be called every time the component rendered / re-rendered
  // potential infinite loop

  // case 2: empty array []
  // useEffect only run exactly once (on first render)

  // case 3: array with values [value]
  // will ensure useEffect only runs if value changes
  
  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </>
  )
};

export default UseEffectBasics;
