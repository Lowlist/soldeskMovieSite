package com.team.cinema.support.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.team.cinema.support.service.NoticeSerivce;
import com.team.cinema.support.service.QuestionService;
import com.team.cinema.support.service.ReplyService;

import lombok.AllArgsConstructor;

@Controller
@RequestMapping("/support/*")
@AllArgsConstructor
public class SupportController {
	private NoticeSerivce notice;
	private QuestionService question;
	private ReplyService reply;
	
	@GetMapping("/notice")
	public String notice() {
		return "support/notice";
	}
	
	@GetMapping("/question")
	public String question() {
		return "support/question";
	}
	
	@GetMapping("/question/realtime")
	public String realTime() {
		return "support/notice/realtime";
	}
}
