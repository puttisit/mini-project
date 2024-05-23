import React, { useState } from 'react';
import axios from 'axios';
import './AddTravelForm.css';

function AddTravelForm() {
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [coverimage, setCoverimage] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTravel = {
      name: name,
      detail: detail,
      coverimage: coverimage,
      latitude: latitude,
      longitude: longitude
    };

    axios.post('/travels/add', newTravel)
      .then(res => {
        console.log(res.data);
        // Reset form fields
        setName('');
        setDetail('');
        setCoverimage('');
        setLatitude('');
        setLongitude('');

        alert('Travel added successfully!');
      })
      .catch(err => {
        console.error('Error adding travel:', err);
      });
  };

  return (
    <div className="add-travel-form">
      <h2>Add New Travel</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="detail">Detail:</label>
          <textarea id="detail" value={detail} onChange={(e) => setDetail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="coverimage">Cover Image:</label>
          <input type="text" id="coverimage" value={coverimage} onChange={(e) => setCoverimage(e.target.value)} />
        </div>
        {/* <div className="form-group">
          <label htmlFor="latitude">Latitude:</label>
          <input type="text" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="longitude">Longitude:</label>
          <input type="text" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
        </div> */}
        <button type="submit" className="submit-button">Add Travel</button>
      </form>
    </div>
  );
}

export default AddTravelForm;