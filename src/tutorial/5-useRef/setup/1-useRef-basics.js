import React, { useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const refFirstName = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(refFirstName.current.value)
  }

  // dont need dependency array
  // because no use state which doing re render
  useEffect( () => {
    // focus on 1 dom element
    refFirstName.current.focus() 
  })

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              ref={refFirstName}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
    </>
  )
}

export default UseRefBasics
