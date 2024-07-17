import React, {useEffect,useState,}from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const PlacesProfile = () => {
    const { id } = useParams();
    
    const[places, setPlaces]= useState({
        id:0,
        location:0,
        historical:'',
        nature:'',
        adventure:'',
        food:'',
    })
 
    useEffect(() =>{
        loadplaces();
    }, [])
    
    const loadplaces = async()=>{
        const result = await axios.get(`http://localhost:8080/api/places/${id}`);
        setPlaces(result.data)
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
											{places.id}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Location
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{places.location}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Historical
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{places.historical}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Nature
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{places.nature}
										</p>
									</div>
								</div>
                                <hr />

                                <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Adventure
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{places.adventure}
										</p>
									</div>
								</div>
                                <hr />

                                <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Food
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{places.food}
										</p>
									</div>
								</div>
                                <hr />

							</div>
						</div>
					</div>
				</div>
			
		</section>
	);
};



export default PlacesProfile