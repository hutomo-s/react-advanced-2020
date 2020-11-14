import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
      const filteredPeople = people.filter((p) => {
        return p.id !== id
      })

      setPeople(filteredPeople)
  }

  return (
    <>
      {people.map( ({id, name}) => {
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>
              Remove Item
            </button>
          </div>
        )
      })}
      <button className="btn" onClick={() => setPeople([])}>Remove All Items</button>
    </>
  )
};

export default UseStateArray;
