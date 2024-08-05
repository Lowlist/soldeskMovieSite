package com.team.cinema.store.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team.cinema.store.entity.Food;
import com.team.cinema.store.entity.Goods;
import com.team.cinema.store.entity.GoodsSet;
import com.team.cinema.store.entity.StoreBasket;
import com.team.cinema.store.service.StoreService;

@RestController
@RequestMapping("/store")
public class StoreRestController {
	
	@Autowired
	private StoreService storeSevice;
	
	@GetMapping("/food")
	public List<Food> food() {
		return storeSevice.getFoodList();
	}
	
	@GetMapping("/goods")
	public List<Goods> goods() {
		return storeSevice.getGoodsList();
	}
	
	@GetMapping("/goodsSet")
	public List<GoodsSet> foodSet() {
		return storeSevice.getGoodsSetList();
	}
	
	@PostMapping("/basket")
	public void saveBasket(@RequestBody StoreBasket basketData) {
		storeSevice.insertBasket(basketData);
	}
	
	@PostMapping("/deleteBasket")
	public void deleteBasket(@RequestBody StoreBasket basketData) {
		storeSevice.deleteBasket(basketData);
	}
	
	@GetMapping("/basket")
	public List<StoreBasket> basket() {
		return storeSevice.getBasketList();
	}
	
}