package com.team.cinema.ticketing.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team.cinema.ticketing.entity.Cinema;

@Repository
public interface CinemaRepository extends JpaRepository<Cinema, Integer> {
    List<Cinema> findByArea(String area);
}