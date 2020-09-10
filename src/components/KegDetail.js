import React from "react";
import PropTypes from "prop-types";


function KegDetail(props){
  const { keg } = props
  return (
    <React.Fragment>
      <h1>keg Detail</h1>
      <h2>{keg.name}</h2>
      <h3>Price: {keg.price} - Alchohol Content{keg.content}</h3>
      <p><em>{keg.description}</em></p>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;