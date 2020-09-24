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
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      {/* <button onClick={ props.onClickingBuy }>Buy a Pint</button> */}
      <button onClick={()=> onClickingDelete(keg.id) }>Close Keg</button> 
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func
}

export default KegDetail;