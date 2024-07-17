import React, {useEffect,useState,}from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const BookingProfile = () => {
    const { id } = useParams();
    
    const[booking, setBooking]= useState({
        id:0,
        amount:0,
        place:'',
        hotel:'',
    })

    useEffect(() =>{
        loadBooking();
    }, [])
    
    const loadBooking = async()=>{
        const result = await axios.get(`http://localhost:8080/api/booking/${id}`);
        setBooking(result.data)
    };

    return (
		<section >
				<div className="row">
					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											ID
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{booking.id}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Amount
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{booking.amount}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Place
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{booking.place}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Hotel
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{booking.hotel}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
		</section>
	);
};



export default BookingProfile