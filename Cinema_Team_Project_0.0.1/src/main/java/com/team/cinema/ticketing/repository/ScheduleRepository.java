package com.team.cinema.ticketing.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team.cinema.ticketing.entity.Schedule;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {
	// 어라 findAll 안적어줘도 되네
}
