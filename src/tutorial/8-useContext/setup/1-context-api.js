import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext()

// two components - Provider, Consumer
// Provider works like a distributor

// Prop Drilling starts when we pass the parameter
// more than 1 level down

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    // wraps all your component tree
    <PersonContext.Provider value={{removePerson, people}}>
      <h3>Use Context</h3>
      <List people={people} removePerson={removePerson} />
    </PersonContext.Provider>
  );
};

const List = () => {

  const {people} = useContext(PersonContext)

  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {

  const {removePerson} = useContext(PersonContext)
  
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
