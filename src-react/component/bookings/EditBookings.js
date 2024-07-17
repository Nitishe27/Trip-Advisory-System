import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditBookings = () => {
  let navigate= useNavigate();

  const{id} = useParams(); //For example, if the route is "/edit-bookings/1", id will be assigned the value "1".
  

  const[booking, setBooking]= useState({
      id:0,
      amount:0,
      place:'',
      hotel:'',
  })
  
  const{amount,place,hotel}=booking;

  useEffect(() =>{
    loadBooking();
}, [])

const loadBooking = async()=>{
    const result = await axios.get(`http://localhost:8080/api/booking/${id}`);
    setBooking(result.data)
};
  
  const handleInputChange =(e)=>{
      setBooking({...booking,[e.target.name]:e.target.value});
      
  };
  
  const updateBookings = async(e)=>{
      e.preventDefault();
      await axios.put(`http://localhost:8080/api/booking/${id}`,booking);
      navigate("/view-bookings");
  };
  
    return (
      <div className="col-sm-8 py-2 px-5 offset-2 shadow">
        <h2 className="mt-5"> Edit Bookings</h2>
          <form onSubmit={(e)=> updateBookings(e)}>
              <div className="input-group mb-5"> 
              <label className="input-group-text" htmlFor="id">
                  ID
              </label>
              <input className="form-control col-sm-6" type="number" name="id" id="id" required value={id} onChange={(e)=>handleInputChange(e)}/>
              </div>
  
              <div className="input-group mb-5"> 
              <label className="input-group-text" htmlFor="amount">
                  Amount
              </label>
              <input className="form-control col-sm-6" type="number" name="amount" id="amount" required value={amount} onChange={(e)=>handleInputChange(e)}/>
              </div>
  
              <div className="input-group mb-5"> 
              <label className="input-group-text" htmlFor="place">
                  Place
              </label>
              <input className="form-control col-sm-6" type="text" name="place" id="place" required value={place} onChange={(e)=>handleInputChange(e)}/>
              </div>
  
  
              <div className="input-group mb-5"> 
              <label className="input-group-text" htmlFor="hotel">
                  Hotel
              </label>
              <input className="form-control col-sm-6" type="text" name="hotel" id="hotel" required value={hotel} onChange={(e)=>handleInputChange(e)}/>
              </div>
  
              <div className="row mb-5">
                  <div className="col-sm-2">
                      <button type="submit" className="btn btn-outline-success btn-lg">Save</button>
                  </div>
  
                  <div className="col-sm-2">
                      <Link to={"/view-bookings"} type="submit" className="btn btn-outline-warning btn-lg">Cancel</Link>
                  </div>
              </div>
          </form>
      </div>
    )
}

export default EditBookings