import React from "react";
import { v4 } from 'uuid'; 

function NewKegForm(){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.price.value);
    console.log(event.target.content.value);
    console.log(event.target.description.value);
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



export default NewKegForm;
