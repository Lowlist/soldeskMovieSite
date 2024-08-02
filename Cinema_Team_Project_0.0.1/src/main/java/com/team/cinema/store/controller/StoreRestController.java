package com.team.cinema.store.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team.cinema.store.entity.Food;
import com.team.cinema.store.entity.Goods;
import com.team.cinema.store.entity.GoodsSet;
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
	
	@GetMapping("/basket")
	public String basket() {
		return "asdf";
	}
	
}
