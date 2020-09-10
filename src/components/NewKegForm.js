import React from "react";
import { v4 } from 'uuid'; 
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, price: event.target.price.value, content: event.target.content.value, description: event.target.description.value, id: v4()});
  
  }

  
  return (
    <React.Fragment>
    <ReusableForm 
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};


export default NewKegForm;
