import React, { useState, useEffect } from 'react';

const Item = () => {

  const [size, setSize] = useState(window.innerWidth)
  
  useEffect( () => {
    window.addEventListener('resize', () => {
      setSize(window.innerWidth)
    })

    // cleanup function
    return () => {
      window.removeEventListener('resize', () => {
        setSize(window.innerWidth)
      })
    }
  }, [])

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>Size: {size} px</h2>
    </div>
  )
}

const ShowHide = () => {

  const [show, setShow] = useState(false)

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Show / Hide
      </button>
      {show && <Item />}
    </>
  )
};

export default ShowHide;
