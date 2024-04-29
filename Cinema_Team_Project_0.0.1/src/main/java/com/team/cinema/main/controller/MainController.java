package com.team.cinema.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {
	
	@GetMapping("/")
	public String babobobobo() {
		return "index";
	}
	
	@RequestMapping(value = "/test/hello")
	@ResponseBody
	public String helloRuckus(Model model) {
		return "Hello Ruckus";
	}
	
	
}
