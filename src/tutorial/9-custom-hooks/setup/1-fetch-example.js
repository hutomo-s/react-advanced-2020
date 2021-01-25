import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {

  // object desctructuring
  // the goal is to move the operations to separate function
  // useFetch is the custom hooks, can be reusable in another component
  const {loading, products} = useFetch(url)
  
  console.log(products)
  
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
