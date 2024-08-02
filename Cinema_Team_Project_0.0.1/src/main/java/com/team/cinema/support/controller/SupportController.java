//package com.team.cinema.support.controller;
//
//import java.util.List;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//import com.team.cinema.support.dto.NoticeDTO;
//import com.team.cinema.support.dto.QuestionDTO;
//import com.team.cinema.support.dto.ReplyDTO;
//import com.team.cinema.support.service.NoticeSerivce;
//import com.team.cinema.support.service.QuestionService;
//import com.team.cinema.support.service.ReplyService;
//
//import lombok.AllArgsConstructor;
//
//@Controller
//@RequestMapping("/support/*")
//@AllArgsConstructor
//public class SupportController {
//	private NoticeSerivce noticeService;
//	private QuestionService questionService;
//	private ReplyService replyService;
//	
//    // 공지사항 목록 조회
//    @GetMapping("/notice")
//    public String getNoticeList(Model model) {
//        List<NoticeDTO> notices = noticeService.getList();
//        model.addAttribute("notices", notices);
//        return "support/notice";
//    }
//
//    // 공지사항 작성 폼 이동
//    @GetMapping("/notice/write")
//    public String writeNoticeForm(Model model) {
//        model.addAttribute("notice", new NoticeDTO());
//        return "support/noticeWrite";
//    }
//
//    // 공지사항 작성
//    @PostMapping("/notice/write")
//    public String writeNotice(@ModelAttribute NoticeDTO noticeDTO) {
//        noticeService.write(noticeDTO);
//        return "redirect:/support/notice";
//    }
//
//    // 공지사항 상세 조회
//    @GetMapping("/notice/{id}")
//    public String getNotice(@PathVariable int id, Model model) {
//        NoticeDTO notice = noticeService.read(id);
//        model.addAttribute("notice", notice);
//        return "support/noticeDetail";
//    }
//
//    // 공지사항 수정 폼 이동
//    @GetMapping("/notice/modify/{id}")
//    public String modifyNoticeForm(@PathVariable int id, Model model) {
//        NoticeDTO notice = noticeService.read(id);
//        model.addAttribute("notice", notice);
//        return "support/noticeModify";
//    }
//
//    // 공지사항 수정
//    @PostMapping("/notice/modify/{id}")
//    public String modifyNotice(@PathVariable int id, @ModelAttribute NoticeDTO noticeDTO) {
//        noticeService.modify(id, noticeDTO);
//        return "redirect:/support/notice";
//    }
//
//    // 공지사항 삭제
//    @DeleteMapping("/notice/{id}")
//    public String deleteNotice(@PathVariable int id) {
//        noticeService.delete(id);
//        return "redirect:/support/notice";
//    }
//
//    // 질문 목록 조회
//    @GetMapping("/question")
//    public String getQuestionList(Model model) {
//        List<QuestionDTO> questions = questionService.getList();
//        model.addAttribute("questions", questions);
//        return "support/question";
//    }
//
//    // 질문 작성 폼 이동
//    @GetMapping("/question/write")
//    public String writeQuestionForm(Model model) {
//        model.addAttribute("question", new QuestionDTO());
//        return "support/questionWrite";
//    }
//
//    // 질문 작성
//    @PostMapping("/question/write")
//    public String writeQuestion(@ModelAttribute QuestionDTO questionDTO) {
//        questionService.write(questionDTO);
//        return "redirect:/support/question";
//    }
//
//    // 질문 상세 조회 및 답변 목록 조회
//    @GetMapping("/question/{id}")
//    public String getQuestion(@PathVariable int id, Model model) {
//        QuestionDTO question = questionService.read(id);
//        List<ReplyDTO> replies = replyService.getList(id);
//        model.addAttribute("question", question);
//        model.addAttribute("replies", replies);
//        return "support/questionDetail";
//    }
//
//    // 질문 수정 폼 이동
//    @GetMapping("/question/modify/{id}")
//    public String modifyQuestionForm(@PathVariable int id, Model model) {
//        QuestionDTO question = questionService.read(id);
//        model.addAttribute("question", question);
//        return "support/questionModify";
//    }
//
//    // 질문 수정
//    @PostMapping("/question/modify/{id}")
//    public String modifyQuestion(@PathVariable int id, @ModelAttribute QuestionDTO questionDTO) {
//        questionService.modify(id, questionDTO);
//        return "redirect:/support/question";
//    }
//
//    // 질문 삭제
//    @DeleteMapping("/question/{id}")
//    public String deleteQuestion(@PathVariable int id) {
//        questionService.delete(id);
//        return "redirect:/support/question";
//    }
//}
