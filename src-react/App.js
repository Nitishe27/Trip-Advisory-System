import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Home from './Home';
import BookingsView from './component/bookings/BookingsView';
import NavBar from './component/common/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';{/*Routes is used to define your routes */}
import AddBookings from './component/bookings/AddBookings';
import EditBookings from './component/bookings/EditBookings';
import BookingProfile from './component/bookings/BookingProfile';
import PlacesProfile from './component/bookings/PlacesProfile';
import EditPlaces from './component/bookings/EditPlaces';
import AddPlaces from './component/bookings/AddPlaces';




function App() {
  return (
    <main className="container mt-5"> {/* used to make the nav bar small and fixed*/ }
      
      <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route> {/*Route is used to define your individual routes */}
        <Route exact path="/view-bookings" element={<BookingsView/>}></Route>
        <Route exact path="/add-bookings" element={<AddBookings/>}></Route>
        <Route exact path="/add-places" element={<AddPlaces/>}></Route>
        <Route exact path="/edit-booking/:id" element={<EditBookings/>}></Route>
        <Route exact path="/edit-places/:id" element={<EditPlaces/>}></Route>
        <Route exact path="/bookings-profile/:id" element={<BookingProfile/>}></Route>
        <Route exact path="/places-profile/:id" element={<PlacesProfile/>}></Route>
      </Routes>
      </Router>
    </main>
  );
}

export default App;
