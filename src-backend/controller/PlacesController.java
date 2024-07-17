package net.java.tms.controller;


import lombok.AllArgsConstructor;
import net.java.tms.dto.BookingsDto;
import net.java.tms.dto.PlacesDto;
import net.java.tms.service.PlacesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@AllArgsConstructor
@RestController//capable to handle http request
@RequestMapping("/api/places")
public class PlacesController {
    private PlacesService placesService;

    //Build Add Places Rest API
    @PostMapping //add incoming post request to this method
    public ResponseEntity<PlacesDto> createPlaces(@RequestBody PlacesDto placesDto){ //@RequestBody converts json into PlacesDto java object
        PlacesDto savedBooking=placesService.createPlaces(placesDto);
        return new ResponseEntity<>(savedBooking, HttpStatus.CREATED);
    }

    //Build Get Bookings Rest API
    @GetMapping("{id}") //id is a URL template variable
    public ResponseEntity<PlacesDto> getPlacedByID(@PathVariable("id") int placesID){
        PlacesDto placesDto=  placesService.getPlacesById(placesID);
        return ResponseEntity.ok(placesDto);
    }

    //Build Get All Bookings Rest API
    //create a method and convert it into spring by using rest annotiation
    @GetMapping //convert into rest API
    public ResponseEntity<List<PlacesDto>> getAllPlaces(){
        List<PlacesDto> places= placesService.getAllPlaces();
        return ResponseEntity.ok(places);
    }

    //Build Update Rest API
    @PutMapping("{id}")
    public  ResponseEntity<PlacesDto> updatePlaces(@PathVariable("id") int placesID,
                                                       @RequestBody PlacesDto updatedPlaces){
        PlacesDto placesDto= placesService.updatePlaces(placesID, updatedPlaces);
        return ResponseEntity.ok(placesDto);
    }

    //Build Delete Rest API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePlaces(@PathVariable("id") int placesID){
        placesService.deletePlaces(placesID);
        return ResponseEntity.ok("Location deleted successfully !");
    }

}
