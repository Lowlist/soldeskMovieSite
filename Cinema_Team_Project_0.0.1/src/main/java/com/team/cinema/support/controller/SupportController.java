package com.team.cinema.support.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.team.cinema.support.dto.NoticeDTO;
import com.team.cinema.support.dto.QuestionDTO;
import com.team.cinema.support.dto.ReplyDTO;
import com.team.cinema.support.service.NoticeSerivce;
import com.team.cinema.support.service.QuestionService;
import com.team.cinema.support.service.ReplyService;

import lombok.AllArgsConstructor;

@Controller
@RequestMapping("/support/*")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class SupportController {
	private NoticeSerivce noticeService;
	private QuestionService questionService;
	private ReplyService replyService;
	
	// 공지사항 목록 조회
    @GetMapping("/notice")
    public ResponseEntity<List<NoticeDTO>> getNoticeList() {
        List<NoticeDTO> notices = noticeService.getList();
        return ResponseEntity.ok(notices);
    }

    // 공지사항 작성
    @PostMapping("/notice/write")
    public ResponseEntity<Void> writeNotice(@RequestBody NoticeDTO noticeDTO) {
        noticeService.write(noticeDTO);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    // 공지사항 상세 조회
    @GetMapping("/notice/{id}")
    public ResponseEntity<NoticeDTO> getNotice(@PathVariable("id") int id) {
        NoticeDTO notice = noticeService.read(id);
        return ResponseEntity.ok(notice);
    }

    // 공지사항 수정 폼 이동
    @GetMapping("/notice/modify/{id}")
    public ResponseEntity<NoticeDTO> modifyNoticeForm(@PathVariable("id") int id) {
        NoticeDTO notice = noticeService.read(id);
        return ResponseEntity.ok(notice);
    }

    // 공지사항 수정
    @PostMapping("/notice/modify/{id}")
    public ResponseEntity<Void> modifyNotice(@PathVariable("id") int id, @RequestBody NoticeDTO noticeDTO) {
        noticeService.modify(id, noticeDTO);
        return ResponseEntity.ok().build();
    }

    // 공지사항 삭제
    @DeleteMapping("/notice/{id}")
    public ResponseEntity<Void> deleteNotice(@PathVariable("id") int id) {
        noticeService.delete(id);
        return ResponseEntity.noContent().build();
    }

    // 질문 목록 조회
    @GetMapping("/question")
    public ResponseEntity<List<QuestionDTO>> getQuestionList() {
        List<QuestionDTO> questions = questionService.getList();
        return ResponseEntity.ok(questions);
    }

    // 질문 작성
    @PostMapping("/question/write")
    public ResponseEntity<Void> writeQuestion(@RequestBody QuestionDTO questionDTO) {
        questionService.write(questionDTO);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    // 질문 상세 조회 및 답변 목록 조회
    @GetMapping("/question/{id}")
    public ResponseEntity<QuestionDTO> getQuestion(@PathVariable("id") int id) {
        QuestionDTO question = questionService.read(id);
        List<ReplyDTO> replies = replyService.getList(id);
        question.setReplies(replies);
        return ResponseEntity.ok(question);
    }

    // 질문 수정 폼 이동
    @GetMapping("/question/modify/{id}")
    public ResponseEntity<QuestionDTO> modifyQuestionForm(@PathVariable("id") int id) {
        QuestionDTO question = questionService.read(id);
        return ResponseEntity.ok(question);
    }

    // 질문 수정
    @PostMapping("/question/modify/{id}")
    public ResponseEntity<Void> modifyQuestion(@PathVariable("id") int id, @RequestBody QuestionDTO questionDTO) {
        questionService.modify(id, questionDTO);
        return ResponseEntity.ok().build();
    }

    // 질문 삭제
    @DeleteMapping("/question/{id}")
    public ResponseEntity<Void> deleteQuestion(@PathVariable("id") int id) {
        questionService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
