package com.team.cinema.main.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
@Controller
public class MainController {
	
//	@GetMapping("/")
//	public String mainTest() {
//		return "index";
//	}
	
	@PostMapping("/ip")
	public ResponseEntity<String> ip (HttpServletRequest request){
		// 요청 보낸 클라이언트 ip 반환
		return ResponseEntity.ok(request.getRemoteAddr());
	}
	@GetMapping("/hello")
	public String tests (){
		// 요청 보낸 클라이언트 ip 반환
		return "테스트할꺼임";
	}
    
}