package com.team.cinema.seat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team.cinema.seat.entity.TheaterLine;

@Repository
public interface TheaterLineRepository extends JpaRepository<TheaterLine, Integer> {
    List<TheaterLine> findByTheaterNo(int theaterNo);
}