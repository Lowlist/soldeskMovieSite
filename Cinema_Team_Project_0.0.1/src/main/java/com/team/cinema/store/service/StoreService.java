package com.team.cinema.store.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.cinema.store.entity.Food;
import com.team.cinema.store.entity.Goods;
import com.team.cinema.store.entity.GoodsSet;
import com.team.cinema.store.entity.StoreBasket;
import com.team.cinema.store.repository.FoodRepository;
import com.team.cinema.store.repository.GoodsRepository;
import com.team.cinema.store.repository.GoodsSetRepository;
import com.team.cinema.store.repository.StoreBasketRepository;
import com.team.cinema.ticketing.service.TicketingService;

@Service
public class StoreService {
	private static final Logger logger = LoggerFactory.getLogger(TicketingService.class);
	
	@Autowired
	private FoodRepository foodRepository;
	
	@Autowired
	private GoodsRepository goodsRepository;
	
	@Autowired
	private GoodsSetRepository goodsSetRepository;
	
	@Autowired
	private StoreBasketRepository storeBasketRepository;
	
	public List<Food> getFoodList(){
		return foodRepository.findAll();
	}
	
	public List<Goods> getGoodsList(){
		return goodsRepository.findAll();
	}
	
	public List<GoodsSet> getGoodsSetList(){
		return goodsSetRepository.findAll();
	}
	
	public List<StoreBasket> getBasketList(){
		return storeBasketRepository.findAll();
	}
	
	public void insertBasket(StoreBasket data){
		storeBasketRepository.save(data);
	}
	
	public void deleteBasket(StoreBasket data) {
		storeBasketRepository.deleteByIdAndTitleAndContent(data.getId(), data.getTitle(), data.getContent());
	}
	
}