import React, { useState } from 'react';
import {data} from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }

  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  )
};

/**
 * The Idea of Prop Drilling is following
 * When List Component, technically does not need to have access
 * to the removePerson() function 
 * 
 * But we have no other way to pass down our function
 * into the SinglePerson
 * unless we actually pass it to the List
 * 
 * Solution to Prop Drilling: Context API
 */
const List = ({people, removePerson}) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={people.id} {...person} removePerson={removePerson} />
      })}
    </>
  )
}

const SinglePerson = ({id, name, removePerson}) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  )
}

export default PropDrilling;
