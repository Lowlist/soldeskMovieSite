package com.team.cinema.store.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team.cinema.store.entity.Food;
import com.team.cinema.store.entity.Goods;

@Repository
public interface GoodsRepository extends JpaRepository<Goods, Integer> {
	List<Goods> findAll();
}
