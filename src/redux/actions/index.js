let nextContactId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_CONTACT',
    id: nextContactId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_CONTACT',
    id
  }
}
