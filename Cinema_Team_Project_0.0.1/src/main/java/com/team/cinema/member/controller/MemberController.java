//package com.team.cinema.member.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//import com.team.cinema.member.entity.User;
//import com.team.cinema.member.service.UserService;
//
//@Controller
//@RequestMapping("/member")
//public class MemberController {
//	@Autowired
//	private UserService userService;
//	 
//	@GetMapping("/signIn")
//	public void helloWorld() {
//		System.out.println("컨트롤러테스틋");
//		System.out.println("테스트해볼겅!");
////		mapper.insertTest();
////		String a = mapper.selectTest();
////		System.out.println(a);
//	}
//	
//	@PostMapping("/signUp")
//	public ResponseEntity<String> signUp(@RequestBody User user) {
//	    
//	    // 디버깅을 위해 user 객체의 필드를 확인
//	    System.out.println("Received user: " + user);
//
//	    userService.saveUser(user);
//	    return ResponseEntity.ok("회원가입 성공");
//	}
//}
