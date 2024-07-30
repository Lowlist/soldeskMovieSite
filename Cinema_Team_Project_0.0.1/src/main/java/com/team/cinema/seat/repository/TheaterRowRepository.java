package com.team.cinema.seat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team.cinema.seat.entity.TheaterRow;

@Repository
public interface TheaterRowRepository extends JpaRepository<TheaterRow, Integer> {
    List<TheaterRow> findByTheaterNo(int theaterNo);
}
