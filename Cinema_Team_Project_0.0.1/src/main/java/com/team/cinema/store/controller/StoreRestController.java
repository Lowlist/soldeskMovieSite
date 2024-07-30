package com.team.cinema.store.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/store")
public class StoreRestController {
	
	@GetMapping("/food")
	@ResponseBody
	public String food() {
		return "asdf";
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
