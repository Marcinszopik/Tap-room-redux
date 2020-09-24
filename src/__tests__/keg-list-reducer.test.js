import kegListReducer from '../reducers/keg-list-reducer.js';

describe('kegListReducer', () => {


    let action;
    const kegData = {
      name: "Light Beer",
      price: "5.00",
     content: "6.0",
    pints: "120",
    description: "This light beer is soothing and refreshing",
    id: 1
    };

    const currentState = {
      1: {      name: "Light Beer",
      price: "5.00",
     content: "6.0",
    pints: "120",
    description: "This light beer is soothing and refreshing",
    id: 1 },
      2: {name: "IPA",
      price: "6.50",
      content: "8.0",
      pints: "120",
      description: "This IPA is little hoppy and a bit bitter",
      id: 2 }
    }




    test('Should return default state if there is no action type passed into the reducer', () => {
      expect(kegListReducer({}, { type: null })).toEqual({});
    });
  
    test('Should successfully add new keg data to masterKegList', () => {
      const { name, price, content,pints, description, id } = kegData;
      action = {
        type: 'ADD_KEG',
        name: name,
        price: price,
        content: content, 
        pints: pints,
        description: description,
        id: id
      };
  

      expect(kegListReducer({}, action)).toEqual({
        [id] : {
          name: name,
          price: price,
          content: content, 
          pints: pints,
          description: description,
          id: id
        }
      });
    });

    test('Should successfully delete a keg', () => {
      action = {
        type: 'DELETE_KEG',
        id: 1
      };
      expect(kegListReducer(currentState, action)).toEqual({
        2: {name: "IPA",
        price: "6.50",
        content: "8.0",
        pints: "120",
        description: "This IPA is little hoppy and a bit bitter",
          id: 2 }
      });
    });


});