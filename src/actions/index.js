import * as c from './../actions/ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const addKeg = (keg) => {
  const { name, price, content, pints, description } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    price: price,
   content: content,
  pints: pints,
  description: description,
  id: 1
  }
}

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});