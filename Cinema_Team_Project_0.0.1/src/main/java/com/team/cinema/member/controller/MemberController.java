package com.team.cinema.member.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.team.cinema.member.mapper.MemberMapper;

@Controller
@RequestMapping("/member")
public class MemberController {
	@Autowired
	MemberMapper mapper;
	@GetMapping("/signIn")
	public void helloWorld() {
		System.out.println("컨트롤러테스틋");
		System.out.println("테스트해볼겅!");
		mapper.insertTest();
		String a = mapper.selectTest();
		System.out.println(a);
	}
}
