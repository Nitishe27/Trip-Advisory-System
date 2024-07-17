package net.java.tms.repository;

import net.java.tms.entity.Bookings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingsRepository extends JpaRepository<Bookings, Integer> {
}

//BookingsRepository is used to provide Spring Data JPA with the necessary information to perform CRUD operations on Bookings entities in the underlying database.