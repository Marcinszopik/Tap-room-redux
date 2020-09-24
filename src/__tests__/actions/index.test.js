import * as actions from './../../actions';
import * as c from './../actions/ActionTypes';

describe('help queue actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleFrom should create TOGGLE_FORM action', () => {
  expect(actions.toggleForm()).toEqual({
    type: c.TOGGLE_FORM
  });
  });

  it('addKeg should create ADD_KEG action', () => {
  expect(actions.addKeg({name: "Light Beer",
  price: "5.00",
  content: "6.0",
  pints: "120",
  description: "This light beer is soothing and refreshing", id: 1})).toEqual({
    type: c.ADD_KEG,
    name: "Light Beer",
    price: "5.00",
   content: "6.0",
  pints: "120",
  description: "This light beer is soothing and refreshing",
  id: 1
      });
  });

});