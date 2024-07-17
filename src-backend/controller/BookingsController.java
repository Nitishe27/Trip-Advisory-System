package net.java.tms.controller;

import lombok.AllArgsConstructor;
import net.java.tms.dto.BookingsDto;
import net.java.tms.service.BookingsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/api/booking")
public class BookingsController {
    private BookingsService bookingsService;

    //Build Add Bookings Rest API
    @PostMapping //add incoming post request to this method
     public ResponseEntity<BookingsDto> createBookings(@RequestBody BookingsDto bookingsDto){
        BookingsDto savedBooking=bookingsService.createBookings(bookingsDto);
        return new ResponseEntity<>(savedBooking, HttpStatus.CREATED);
     }


    //Build Get Bookings Rest API
    @GetMapping("{id}") //id is a URL template variable
    public ResponseEntity<BookingsDto> getBookingsByID(@PathVariable("id") int bookingsId){
      BookingsDto bookingsDto=  bookingsService.getBookingsById(bookingsId);
      return ResponseEntity.ok(bookingsDto);
    }

    //Build Get All Bookings Rest API

    @GetMapping //convert into rest API
    public ResponseEntity<List<BookingsDto>> getAllBookings(){
      List<BookingsDto> bookings= bookingsService.getAllBookings();
      return ResponseEntity.ok(bookings);
    }

    //Build Update Rest API
    @PutMapping("{id}")
    public  ResponseEntity<BookingsDto> updateBookings(@PathVariable("id") int bookingsID,
                                                      @RequestBody BookingsDto updatedBooking){
     BookingsDto bookingsDto= bookingsService.updateBookings(bookingsID, updatedBooking);
        return ResponseEntity.ok(bookingsDto);
    }

    //Build Delete Rest API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteBookings(@PathVariable("id") int bookingsID){
        bookingsService.deleteBookings(bookingsID);
        return ResponseEntity.ok("Bookings deleted successfully !");
    }
}
