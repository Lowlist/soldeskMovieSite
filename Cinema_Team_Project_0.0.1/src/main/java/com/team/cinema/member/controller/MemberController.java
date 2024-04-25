package com.team.cinema.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/member")
public class MemberController {
	
	@GetMapping("/signIn")
	public void helloWorld() {
		System.out.println("컨트롤러테스틋");
	}
	

}
