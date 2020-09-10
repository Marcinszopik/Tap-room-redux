import React from "react";
import PropTypes from "prop-types";


function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' 
        name='name' 
        placeholder='Name of Beer' />
        <input type='text'
        name='price'
        placeholder='Price of the Beer' />
        <input type='text'
        name='content'
        placeholder='How much alcohol' />
        <textarea name='description' placeholder='Describe your issue.' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;