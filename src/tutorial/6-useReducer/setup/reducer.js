export const reducer = (state, action) => {
  if (action.type === 'ADD_PERSON') {
    const people = [...state.people, action.payload]
    return {
      ...state,
      people,
      isModalOpen: true,
      modalContent: 'Person Added'
    }
  }

  if (action.type === 'VALIDATE_PERSON_NAME') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please Enter A Person Name'
    }
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    }
  }

  if (action.type === 'REMOVE_PERSON') {
    const newPeople = state.people.filter((person) => {
      return person.id !== action.payload
    })
    return {
      ...state,
      people: newPeople
    }
  }

  // throw error
  throw new Error('no matching action type')
}