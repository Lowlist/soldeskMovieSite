package com.team.cinema.store.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team.cinema.store.entity.StoreBasket;

@Repository
public interface StoreBasketRepository extends JpaRepository<StoreBasket, Integer> {
	List<StoreBasket> findAll();
	void deleteByIdAndTitleAndContent(String id,String title,String content);
}
