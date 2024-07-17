import React, { useEffect, useState } from 'react';
import axios from "axios";
import {FaEdit, FaEye, FaTrashAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Search from '../common/Search';

const BookingsView = () => {

    const[bookings, setBookings]= useState([]);
    const[places,setPlaces]=useState([]);
    const[search, setSearch]= useState("");

    useEffect(() =>{
        loadBookings();
    }, [])

    useEffect(() =>{
        loadPlaces();
    }, [])

    const loadBookings = async()=>{
        const result = await axios.get("http://localhost:8080/api/booking");
        setBookings(result.data)
    };

    const loadPlaces = async()=>{
        const result = await axios.get("http://localhost:8080/api/places");
        setPlaces(result.data)
    };

const handleDelete = async(id)=>{
    await axios.delete(`http://localhost:8080/api/booking/${id}`);
    
    loadBookings();
}

const handleDeletePlaces = async(id)=>{
    await axios.delete(`http://localhost:8080/api/places/${id}`);
    
    loadPlaces();
}

  return (
    <section>
        <center>
            <h1 className='title'>Search Package Details</h1>
        <Search search={search}
        setSearch={setSearch}/>
        </center>
        <table className="table table-bordered table-hover shadow">
            <thead>
                <tr className="text-center">
                    <th>ID</th>
                    <th>Location</th>
                    <th>Amount</th>
                    <th>Hotel</th>
                    <th colSpan="3">Actions</th>
                </tr>
            </thead>

            <tbody className="text-center">
                {bookings.filter((st)=>
                st.place.toLowerCase().includes(search))
                
                
                .map((booking, index)=>(
                    <tr key={booking.id}>
                        <th scope="row">{booking.id}
                            </th>
                    <td>{booking.place}</td>
                    <td>{booking.amount}</td>
                    <td>{booking.hotel}</td>
                    <td className="mx-2">
                    <Link to={`/bookings-profile/${booking.id}`}
                    className="btn btn-info"><FaEye/>
                    </Link>
                    </td>

                    <td className="mx-2"> 
                    <Link to={`/edit-booking/${booking.id}`}
                    className="btn btn-warning"><FaEdit/>
                    </Link>
                    </td>

                    <td className="mx-2"> 
                    <button
                    className="btn btn-danger" onClick={()=>handleDelete(booking.id)}><FaTrashAlt/>
                    </button>
                    </td>
                </tr>
                ))}
            

            </tbody>
        </table>
        <h1 className='title'>Search Your Place</h1>
                <div className='.map-responsive'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63367.842163400834!2d80.73974733680323!3d6.951364420442299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae380434e1554c7%3A0x291608404c937d9c!2sNuwara%20Eliya!5e0!3m2!1sen!2slk!4v1713967768769!5m2!1sen!2slk" width="1300" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

        <table className="table table-bordered table-hover shadow">
            <thead>
                <tr className="text-center">
                    <th>ID</th>
                    <th>Location</th>
                    <th>Historical</th>
                    <th>Nature</th>
                    <th>Adventure</th>
                    <th>Food</th>
                    <th colSpan="3">Actions</th>
                </tr>
            </thead>

            <tbody className="text-center">
                {places.filter((st)=>
                st.location.toLowerCase().includes(search))
                
                
                .map((place, index)=>(
                    <tr key={place.id}>
                        <th scope="row">{place.id}
                            </th>

                    <td>{place.location}</td>
                    <td>{place.historical}</td>
                    <td>{place.nature}</td>
                    <td>{place.adventure}</td>
                    <td>{place.food}</td>
                    <td className="mx-2">
                    <Link to={`/places-profile/${place.id}`}
                    className="btn btn-info"><FaEye/>
                    </Link>
                    </td>

                    <td className="mx-2"> 
                    <Link to={`/edit-places/${place.id}`}
                    className="btn btn-warning"><FaEdit/>
                    </Link>
                    </td>

                    <td className="mx-2"> 
                    <button
                    className="btn btn-danger" onClick={()=>handleDeletePlaces(place.id)}><FaTrashAlt/>
                    </button>
                    </td>
                </tr>
                ))}
            

            </tbody>
        </table>
        <br></br>
        <h1 className='title'>Search Your Place</h1>
                <div className='.map-responsive'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63367.842163400834!2d80.73974733680323!3d6.951364420442299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae380434e1554c7%3A0x291608404c937d9c!2sNuwara%20Eliya!5e0!3m2!1sen!2slk!4v1713967768769!5m2!1sen!2slk" width="1300" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
    </section>
  )
}

export default BookingsView