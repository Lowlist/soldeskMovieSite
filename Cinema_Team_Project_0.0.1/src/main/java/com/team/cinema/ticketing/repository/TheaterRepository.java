package com.team.cinema.ticketing.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.team.cinema.ticketing.entity.Theater;

@Repository
public interface TheaterRepository extends JpaRepository<Theater, Integer> {
    List<Theater> findByCinemaNo(int cinemaNo);
}