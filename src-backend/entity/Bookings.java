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
@Table(name="bookings") //create table named bookings in database.
public class Bookings {

    @Id
    @Column(name="id") //create column named id.
    private int id;
    @Column(name="amount")
    private int amount;
    @Column(name="place")
    private String place;
    @Column(name="hotel")
    private String hotel;

}
