package com.team.cinema.store.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team.cinema.store.entity.Food;
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
	public String goods() {
		return "asdf";
	}
	
	@GetMapping("/foodSet")
	public String foodSet() {
		return "asdf";
	}
	
	@GetMapping("/basket")
	public String basket() {
		return "asdf";
	}
	
}
