package net.java.tms.service;

import net.java.tms.dto.BookingsDto;

import java.util.List;

public interface BookingsService {
    BookingsDto createBookings(BookingsDto bookingsDto);

    BookingsDto getBookingsById(int bookingsId);

    List<BookingsDto> getAllBookings();

    BookingsDto updateBookings(int bookingId, BookingsDto updatedBookings);

    void deleteBookings(int bookingID);
}
