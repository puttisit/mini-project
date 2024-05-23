import React, { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const [travellist,settravellist] = useState([]);
  const gettravel = () =>{
    axios.get('/travels').then((response) =>{
      settravellist(response.data)
    });
  }

  return (
    <div>
       <hr/>
      <div className='travel'>
      <button className='btn btn-primary' onClick={gettravel}>Show Travel</button>
      {travellist.map((val,key) =>{
        return(
          <div className='travle card'> 
            <div className='card-body text-left'> 
            <p className='card-text'>Name : {val.name}</p>
            <p className='card-text'>detail : {val.detail}</p>
            <img src={val.coverimage} alt="" />
            <p className='card-text'>latitude : {val.latitude}</p>
            <p className='card-text'>longitude : {val.longitude}</p>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default Test;
