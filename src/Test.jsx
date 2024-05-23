import React, { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const [travellist, settravellist] = useState([]);

  const gettravel = () => {
    axios.get('/travels').then((response) => {
      settravellist(response.data);
    });
  };

  const deleteTravel = (id) => {
    axios.delete(`/travels/${id}`).then((response) => {
      // Refresh the travel list after deletion
      gettravel();
    });
  };

  
  return (
    <div>
      <hr />
      <div className='travel'>
      
        <button className='btn btn-primary' onClick={gettravel}>Show Travel</button>
        <div className="card-container"> 
        {travellist.map((val, key) => {
          return (
            <div className='travle card' key={key}>
              <div className='card-body text-left'>
                <p className='card-text'>Name: {val.name}</p>
                <p className='card-text'>Detail: {val.detail}</p>
                <img src={val.coverimage} alt="" />
                {/* <p className='card-text'>Latitude: {val.latitude}</p>
                <p className='card-text'>Longitude: {val.longitude}</p> */}
                <p/>
                <br />
                <button className='btn btn-danger' onClick={() => deleteTravel(val.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default Test;