package net.java.tms.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="places") //create table named bookings in database.
public class Places {

    @Id
    @Column(name="id") //create column named id.
    private int id;

    @Column(name="Location")
    private String Location;

    @Column(name="historical")
    private String historical;

    @Column(name="Nature")
    private String Nature;

    @Column(name="Adventure")
    private String Adventure;

    @Column(name="Food")
    private String Food;

}