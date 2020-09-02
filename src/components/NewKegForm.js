import React from "react";
import { v4 } from 'uuid'; 
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, price: event.target.price.value, content: event.target.content.value, description: event.target.description.value, id: v4()});
  
  }

  
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input type='text' name='name' placeholder='Name of Beer' />
        <input type='text'name='price'placeholder='Price of the Beer' />
        <input type='text'name='content'placeholder='How much alcohol' />
        <textarea name='description' placeholder='Describe your issue.' />
        <button type='submit'>Add a Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};


export default NewKegForm;
