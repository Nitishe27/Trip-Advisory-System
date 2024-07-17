import React, { useEffect, useState } from 'react';
import axios from "axios"; {/*Making HTTP requests in JavaScript applications in backend*/}
import { Link } from 'react-router-dom';
import Search from '../src/component/common/Search';




const BookingsView = () => {

    const[bookings, setBookings]= useState([]); {/* bookings will hold an array of data and setBookings can be used to update the state*/}
    const[places,setPlaces]=useState([]);
    const[search, setSearch]= useState("");  {/*in this search will hol the current value which has been input */}

    useEffect(() =>{        {/* Used two arguments one is a call back function and a empty array to execute */}
        loadBookings();
    }, [])                

    useEffect(() =>{
        loadPlaces();
    }, [])

    const loadBookings = async()=>{
        const result = await axios.get("http://localhost:8080/api/booking");
        setBookings(result.data)    
    };                          {/*it updates the bookings state using setBookings with the fetched data (result.data). */}

    const loadPlaces = async()=>{
        const result = await axios.get("http://localhost:8080/api/places");
        setPlaces(result.data)
    };

  return (
    <section >
      <h1 className='title'>Plan your Trip</h1>
      <p className='subTitle'>Travel to your Favourite Places with respectful of the Environment</p>
        <center><Search search={search}
        setSearch={setSearch}/>
        </center>
        <table className="table table-bordered table-hover shadow">
            <thead>
                <tr className="text-center">
                    <th>ID</th>
                    <th>Package</th>
                    <th>Place</th>
                    <th>Hotel</th>
                    
                </tr>
            </thead>

            <tbody className="text-center">
                {bookings.filter((st)=>
                st.place.toLowerCase().includes(search)) 
                
                
                .map((booking, index)=>(
                    <tr key={booking.id}>
                        <th scope="row">{booking.id}  
                            </th>

                    <td>{booking.amount}</td>
                    <td>{booking.place}</td>
                    <td>{booking.hotel}</td>
                    
                </tr>
                ))}   {/*first it will filter to lowercase and then it will check each row by row by .map using a key id*/}
            

            </tbody>
        </table>
<br></br>
<h1 className='title'>Check some interesting parts</h1>
        <table className="table table-bordered table-hover shadow">
            <thead>
                <tr className="text-center">
                    <th>ID</th>
                    <th>Location</th>
                    <th>Historical</th>
                    <th>Nature</th>
                    <th>Adventure</th>
                    <th>Food</th>
                    
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
                    
                </tr>
                ))}
            

            </tbody>
        </table>
     
        
        
    </section>
  )
}

export default BookingsView