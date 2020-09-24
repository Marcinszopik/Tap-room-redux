import * as c from './../actions/ActionTypes';


export default (state = {}, action) => {
  const { name, price, content, pints, description, id } = action;
  switch (action.type) {
  case c.ADD_KEG:
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
  case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;
  default:
    return state;
  }
};