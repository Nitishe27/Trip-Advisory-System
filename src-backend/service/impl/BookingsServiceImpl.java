package net.java.tms.service.impl;
import lombok.AllArgsConstructor;
import net.java.tms.dto.BookingsDto;
import net.java.tms.entity.Bookings;
import net.java.tms.exception.ResourceNotFoundException;
import net.java.tms.mapper.BookingsMapper;
import net.java.tms.repository.BookingsRepository;
import net.java.tms.service.BookingsService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class BookingsServiceImpl implements BookingsService {
    private BookingsRepository bookingsRepository;

    @Override
    public BookingsDto createBookings(BookingsDto bookingsDto) {//create employee method
        Bookings bookings= BookingsMapper.maptoBookings(bookingsDto); //converted bookingsdto to bookings entity
        Bookings savedBookings= bookingsRepository.save(bookings);//save bookingsjpa entity into database

        return BookingsMapper.maptoBookingsDto(savedBookings);
    }

    @Override
    public BookingsDto getBookingsById(int bookingsId) {
        Bookings bookings= bookingsRepository.findById(bookingsId)
                .orElseThrow(()->
                        new ResourceNotFoundException("Bookings doesn't exist with the given ID: "+bookingsId));

        return BookingsMapper.maptoBookingsDto(bookings);
    }

    @Override
    public List<BookingsDto> getAllBookings() {
       List<Bookings> bookings= bookingsRepository.findAll();//convert list of BookingsJpa entity into list of BookingsDto
        return bookings.stream().map((booking) ->BookingsMapper.maptoBookingsDto(booking))
                .collect(Collectors.toList());
    }

    @Override
    public BookingsDto updateBookings(int bookingId, BookingsDto updatedBookings) {

    Bookings bookings=   bookingsRepository.findById(bookingId).orElseThrow(
                ()->new ResourceNotFoundException("Booking doesn't exist with the given ID: "+bookingId)
        );

    //setting all the updatedBookings information into bookings
    bookings.setAmount(updatedBookings.getAmount());
    bookings.setPlace(updatedBookings.getPlace());
    bookings.setHotel(updatedBookings.getHotel());

   Bookings updatedBookingsObj= bookingsRepository.save(bookings);//Saving all the updated information

        return BookingsMapper.maptoBookingsDto(updatedBookingsObj);//passing the object to BookingsDto

    }

    @Override
    public void deleteBookings(int bookingID) {
        Bookings bookings=bookingsRepository.findById(bookingID).orElseThrow(
                ()-> new ResourceNotFoundException("Booking doesn't exist with the given ID: "+bookingID)
        );

        bookingsRepository.deleteById(bookingID);

    }
}
