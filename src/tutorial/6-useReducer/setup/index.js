import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function
const reducer = (state, action) => {
  if(action.type === 'ADD_PERSON') {
    const people = [...state.people, action.payload]
    return {
      ...state,
      people,
      isModalOpen: true,
      modalContent: 'Person Added'
    }
  }

  if(action.type === 'VALIDATE_PERSON_NAME') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please Enter A Person Name'
    }
  }

  if(action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    }
  }

  // throw error
  throw new Error('no matching action type')
}

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}

const Index = () => {
  const [name, setName] = useState('')
  // const [people, setPeople] = useState(data)
  // const [showModal, setShowModal] = useState(false)

  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!name){
      // setShowModal(true)
      dispatch({type: 'VALIDATE_PERSON_NAME'})
      return
    }

    const newPeople = {id: new Date().getTime().toString(), name}
    //setPeople([...data, newPeople])
    
    dispatch({type: 'ADD_PERSON', payload: newPeople})
    setName('')
  }

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }

  return (<>
    {/*{showModal && <Modal />} */}
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}

    <form onSubmit={handleSubmit} className="form">
      <div>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
      </div>

      <button type="submit">Add</button>
    </form>

    <div>
      {state.people.map((person) => {
        return (
          <div className="item" key={person.id}>
            {person.name}
          </div>
        )
      })}  
    </div>

  </>);
};

export default Index;
