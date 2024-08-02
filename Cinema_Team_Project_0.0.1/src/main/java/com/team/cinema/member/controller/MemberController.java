package com.team.cinema.member.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.team.cinema.member.entity.User;
import com.team.cinema.member.repository.UserRepository;
import com.team.cinema.member.service.UserService;

@Controller
@RequestMapping("/member")
public class MemberController {
	@Autowired
	private UserService userService;
	
	 @Autowired
	private UserRepository userRepository;

	 @Autowired
	 private BCryptPasswordEncoder pwEncoder;
	
	@PostMapping("/signUp")
	public ResponseEntity<String> signUp(@RequestBody User user) {
	    
	    // 디버깅을 위해 user 객체의 필드를 확인
	    System.out.println("Received user: " + user);

	    userService.saveUser(user);
	    
	    System.out.println("확인 : signUp");
	    return ResponseEntity.ok("회원가입 성공");
	}
	
	 @PostMapping("/signIn")
	    public ResponseEntity<String> signIn(@RequestBody User user) {
	        if (user.getId() == null || user.getId().isEmpty() ||
	            user.getPassword() == null || user.getPassword().isEmpty()) {
	        	System.out.println("아이디와 비밀번호가 비어있습니다.");
	            return ResponseEntity.badRequest().body("아이디와 비밀번호를 입력해주세요.");
	        }

	        User storedUser = userRepository.findById(user.getId()); // 사용자 ID로 조회
	        
	        if (storedUser != null && pwEncoder.matches(user.getPassword(), storedUser.getPassword())) {
	            return ResponseEntity.ok("로그인에 성공했습니다.");
	        } else {
	            return ResponseEntity.status(401).body("아이디 또는 비밀번호가 올바르지 않습니다.");
	        }
	    }
}
