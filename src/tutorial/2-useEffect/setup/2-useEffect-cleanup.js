import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [value, setValue] = useState(window.innerWidth)

  const checkSize = () => {
    setValue(window.innerWidth)
  }

  // use effect yang berbeda bisa dipanggil beberapa kali
  // dalam satu komponen
  // parameter: callback function
  useEffect( () => {
    console.log("useEffect")

    // contoh yang salah:
    // window.addEventListener('resize', setValue(window.innerWidth))

    // contoh yang benar 1
    // window.addEventListener('resize', checkSize)
    
    // contoh yang benar 2
    // parameter: callback function
    window.addEventListener('resize', () => {
      setValue(window.innerWidth)
    })

    // untuk mencegah memory leak
    // ketika aplikasi semakin besar
    // dibutuhkan cleanup function
    // contoh: ketika show/hide sebuah component
    // akan menambah jumlah event listener secara signifikan
    return () => {
      console.log("cleanup")
      window.removeEventListener('resize', checkSize)
    }
  })

  return (
    <>
      <h2>Window</h2>
      <h4>{value} PX</h4>
    </>
  )
};

export default UseEffectCleanup;
