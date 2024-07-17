import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import '../bookings/Booking.css'


const AddBookings = () => {

    let navigate= useNavigate(); 
const[booking, setBooking]= useState({
    id:0,
    amount:0,
    place:'',
    hotel:'',
})



const{id,amount,place,hotel}=booking;


const handleInputChange =(e)=>{
    setBooking({...booking,[e.target.name]:e.target.value});
    
    
};


const saveBookings = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/api/booking",booking);
    navigate("/view-bookings");
};




  return (
    <section>
        <h1 className='title'>Enter Package Details</h1>
    <div className="col-sm-8 py-2 px-5 offset-2 shadow" >
        <form  onSubmit={(e)=> saveBookings(e)}>
            
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

    
    </section>
  )
}

export default AddBookings