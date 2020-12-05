import React, { useEffect, useRef, useState } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

// reference
// https://ui.dev/useref/
const UseRefBasics = () => {

  const [count, setCount] = useState(0)

  const domCount = useRef(null)

  const handleClick = (e) => {
    e.preventDefault()
    window.clearInterval(domCount.current)
  }

  useEffect( () => {
    domCount.current = window.setInterval( () => {
      setCount( (prevCount) => prevCount + 1)
    }, 1000)
  }, [])

  return (
    <>
      <h1>{count}</h1>
      <button type="submit" onClick={handleClick}>Stop</button>
    </>
  )
}

export default UseRefBasics
