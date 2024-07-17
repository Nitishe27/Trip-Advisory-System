package net.java.tms.mapper;

import net.java.tms.dto.BookingsDto;
import net.java.tms.entity.Bookings;

//mapper class used to convert between DTOs (Data Transfer Objects) and entity objects in a Java application, particularly when working with Spring Data JPA or similar frameworks
public class BookingsMapper {
    public static BookingsDto maptoBookingsDto(Bookings bookings){ //It extracts data from the Bookings object and uses it to create a new BookingsDto object.
        return new BookingsDto(
                bookings.getId(),
                bookings.getAmount(),
                bookings.getPlace(),
                bookings.getHotel()
        );
    }

    public static Bookings maptoBookings(BookingsDto bookingsDto){ //It extracts data from the BookingsDto object and uses it to create a new Bookings entity object.
        return new Bookings(
                bookingsDto.getId(),
                bookingsDto.getAmount(),
                bookingsDto.getPlace(),
                bookingsDto.getHotel()
        );
    }
}
