import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const reqUsers = await fetch(url)
    const users = await reqUsers.json()

    // set users will trigger re render of the component
    setUsers(users)
  }

  // be careful of infinite loop
  // because in getUsers() calling setUsers()
  // which re render of the component
  // so we give dependency array []
  // to run this useEffect only once
  useEffect( () => {
    getUsers()
  }, [])

  return (
    <>
      <h3>Github Users</h3>

      <ul className="users">
      {users.map( (user) => {

        const {id, avatar_url, login, html_url} = user
        return (
          <li key={id}>
            <img src={avatar_url}></img>
            <div>
              <p>{login}</p>
              <a href={html_url}>Profile</a>
            </div>        
          </li>
        )
      })}
      </ul>
    </>
  )
};

export default UseEffectFetchData;
