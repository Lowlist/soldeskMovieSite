package com.team.cinema.store.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team.cinema.store.entity.Food;
import com.team.cinema.ticketing.entity.Cinema;

@Repository
public interface FoodRepository extends JpaRepository<Food, Integer> {
	List<Food> findAll();
}
