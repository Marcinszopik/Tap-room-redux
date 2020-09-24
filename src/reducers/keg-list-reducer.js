export default (state = {}, action) => {
  const { name, price, content, pints, description, id } = action;
  switch (action.type) {
  case 'ADD_KEG':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        price: price,
        content: content, 
        pints: pints,
        description: description,
        id: id
      }
    });
  case 'DELETE_KEG':
      const newState = { ...state };
      delete newState[id];
      return newState;
  default:
    return state;
  }
};