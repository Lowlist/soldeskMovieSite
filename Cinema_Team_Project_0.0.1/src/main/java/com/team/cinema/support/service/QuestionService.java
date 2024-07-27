package com.team.cinema.support.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.cinema.support.dto.QuestionDTO;
import com.team.cinema.support.entity.QuestionEntity;
import com.team.cinema.support.repository.QuestionRepository;



@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    public List<QuestionDTO> getList() {
        List<QuestionEntity> questions = questionRepository.findAll();
        return questions.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<QuestionDTO> getSearchList(String keyword) {
        List<QuestionEntity> questions = questionRepository.findByQuestionTitleContaining(keyword);
        return questions.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public QuestionDTO write(QuestionDTO questionDTO) {
        QuestionEntity question = convertToEntity(questionDTO);
        QuestionEntity savedQuestion = questionRepository.save(question);
        return convertToDTO(savedQuestion);
    }

    public QuestionDTO read(int questionNo) {
        QuestionEntity question = questionRepository.findById(questionNo)
                .orElseThrow(() -> new RuntimeException("Question not found"));
        return convertToDTO(question);
    }

    public void delete(int questionNo) {
        questionRepository.deleteById(questionNo);
    }

    public QuestionDTO modify(int questionNo, QuestionDTO questionDTO) {
        QuestionEntity question = questionRepository.findById(questionNo)
                .orElseThrow(() -> new RuntimeException("Question not found"));
        question.setQuestionTitle(questionDTO.getQuestionTitle());
        question.setQuestionContent(questionDTO.getQuestionContent());
        question.setQuestionHit(questionDTO.getQuestionHit());
        QuestionEntity updatedQuestion = questionRepository.save(question);
        return convertToDTO(updatedQuestion);
    }

    private QuestionDTO convertToDTO(QuestionEntity question) {
        QuestionDTO questionDTO = new QuestionDTO();
        questionDTO.setQuestionNo(question.getQuestionNo());
        questionDTO.setQuestionTitle(question.getQuestionTitle());
        questionDTO.setQuestionContent(question.getQuestionContent());
        questionDTO.setQuestionHit(question.getQuestionHit());
        questionDTO.setCreatedAt(question.getCreatedAt());
        questionDTO.setUpdatedAt(question.getUpdatedAt());
        // questionDTO.setNo(question.getMember() != null ? question.getMember().getNo() : 0)
        questionDTO.setReplyNo(question.getQuestionReply() != null ? question.getQuestionReply().getReplyNo() : 0);
        return questionDTO;
    }

    private QuestionEntity convertToEntity(QuestionDTO questionDTO) {
        QuestionEntity question = new QuestionEntity();
        question.setQuestionNo(questionDTO.getQuestionNo());
        question.setQuestionTitle(questionDTO.getQuestionTitle());
        question.setQuestionContent(questionDTO.getQuestionContent());
        question.setQuestionHit(questionDTO.getQuestionHit());
        question.setCreatedAt(questionDTO.getCreatedAt());
        question.setUpdatedAt(questionDTO.getUpdatedAt());
        // question.setMember(member); 
        // question.setQuestionReply(replyEntity); 
        return question;
    }
}