import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState("Default User")
  const [errorCode, setErrorCode] = useState(0)

  useEffect(() => {
    fetch(url)
    .then((response) => { 
      if(response.status >= 200 && response.status <= 299)
      {
        return response.json()
      }
      else
      {
        setIsError(true)
        setErrorCode(response.status)
        setIsLoading(false)
      }
    })
    .then((user) => {
        const userName = user.login
        setUser(userName)
        setIsLoading(false)
    })
    .catch((error) => console.log(error))
  }, [])

  // this is the definition of multiple return
  // return different JSX on different condition
  if(isLoading)
  {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    )
  }

  if(isError)
  {
    return (
      <div>
        <h4>Error {errorCode}</h4>
      </div>
    )
  }

  // default case
  return (
    <div>
      <h4>{user}</h4>
    </div>
  )
};

export default MultipleReturns;
