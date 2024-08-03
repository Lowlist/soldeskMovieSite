package com.team.cinema.store.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team.cinema.store.entity.GoodsSet;

@Repository
public interface GoodsSetRepository extends JpaRepository<GoodsSet, Integer> {
	List<GoodsSet> findAll();
}
