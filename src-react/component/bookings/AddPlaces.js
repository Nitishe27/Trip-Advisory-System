import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import '../bookings/Booking.css'

const AddPlaces = () => {
    let navigate= useNavigate();

    const[places, setPlaces]= useState({
        id:0,
        location:'',
        historical:'',
        nature:'',
        adventure:'',
        food:'',
      })

      const{id,location,historical,nature,adventure,food}=places;

      const handleInputChangePlaces =(a)=>{
        setPlaces({...places,[a.target.name]:a.target.value});
          
      };

      const savePlaces = async(a)=>{
        a.preventDefault();
        await axios.post("http://localhost:8080/api/places",places);
        navigate("/view-bookings");
    };

  return (
<section>
<h1 className='title'>Enter Visit Details</h1>
    <div className="col-sm-8 py-2 px-5 offset-2 shadow" >
        <form  onSubmit={(a)=> savePlaces(a)}>
            
            <div className="input-group mb-5"> 
            <label className="input-group-text" htmlFor="id">
                ID
            </label>
            <input className="form-control col-sm-6" type="number" name="id" id="id" required value={id} onChange={(a)=>handleInputChangePlaces(a)}/>
            </div>

            <div className="input-group mb-5"> 
            <label className="input-group-text" htmlFor="location">
                Location
            </label>
            <input className="form-control col-sm-6" type="text" name="location" id="location" required value={location} onChange={(a)=>handleInputChangePlaces(a)}/>
            </div>

            <div className="input-group mb-5"> 
            <label className="input-group-text" htmlFor="historical">
                Historical
            </label>
            <input className="form-control col-sm-6" type="text" name="historical" id="historical" required value={historical} onChange={(a)=>handleInputChangePlaces(a)}/>
            </div>


            <div className="input-group mb-5"> 
            <label className="input-group-text" htmlFor="nature">
                Nature
            </label>
            <input className="form-control col-sm-6" type="text" name="nature" id="nature" required value={nature} onChange={(a)=>handleInputChangePlaces(a)}/>
            </div>

            <div className="input-group mb-5"> 
            <label className="input-group-text" htmlFor="adventure">
                Adventure
            </label>
            <input className="form-control col-sm-6" type="text" name="adventure" id="adventure" required value={adventure} onChange={(a)=>handleInputChangePlaces(a)}/>
            </div>

            <div className="input-group mb-5"> 
            <label className="input-group-text" htmlFor="food">
                Food
            </label>
            <input className="form-control col-sm-6" type="text" name="food" id="food" required value={food} onChange={(a)=>handleInputChangePlaces(a)}/>
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

export default AddPlaces
