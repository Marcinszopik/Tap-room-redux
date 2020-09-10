import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
       <div onClick = {() => props.whenKegClicked(props.id)}>
      <h3>Keg Detail</h3>
      <h2>This keg is named {props.name}</h2>
      <h3> The alcohol content is {props.content}</h3>
      <h3> Price per pint is  {props.price}</h3>
      <p><em>{props.description}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  content: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;