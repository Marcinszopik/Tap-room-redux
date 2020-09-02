import React from "react";
import Keg from "./Keg";

const masterKegList = [
  {
        name:"Light Beer",
        price:"5.00",
        content:"6.0",
        description:"This light beer is soothing and refreshing"
  },
  {
        name:"IPA",
        price:"6.50",
        content:"8.0",
        description:"This IPA is little hoppy and a bit bitter"
}
];


function KegList(){
  return (
    <React.Fragment>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name} price={keg.price} content={keg.content} description={keg.description} key={index}/>
      )}
    </React.Fragment>
  );
}

export default KegList;
