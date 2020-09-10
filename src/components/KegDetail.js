import React from "react";
import PropTypes from "prop-types";


function KegDetail(props){
  const { keg, onClickingDelete  } = props
  return (
    <React.Fragment>
      <h1>keg Detail</h1>
      <h2>{keg.name}</h2>
      <h3>Price: {keg.price} - Alchohol Content{keg.content}</h3>
      <p><em>{keg.description}</em></p>
      <button onClick={()=> onClickingDelete(keg.id) }>Close Ticket</button> 
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetail;