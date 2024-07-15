package com.team.cinema.ticketing.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team.cinema.ticketing.entity.Theater;

@Repository("theaterRepository")
public interface TicketingRepository extends JpaRepository<Theater, Integer>{
	
}
