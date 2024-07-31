package com.team.cinema.support.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.team.cinema.support.dto.ReplyDTO;
import com.team.cinema.support.entity.QuestionEntity;
import com.team.cinema.support.entity.ReplyEntity;
import com.team.cinema.support.repository.QuestionRepository;
import com.team.cinema.support.repository.ReplyRepository;


@Service
public class ReplyService {
    @Autowired
    private ReplyRepository replyRepository;
    
    @Autowired
    private QuestionRepository questionRepository;

    @Transactional(readOnly = true)
    public List<ReplyDTO> getList(int questionNo) {
        List<ReplyEntity> replies = replyRepository.findByQuestion_QuestionNo(questionNo);
        return replies.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public ReplyDTO write(ReplyDTO replyDTO) {
        ReplyEntity reply = convertToEntity(replyDTO);
        QuestionEntity question = questionRepository.findById(replyDTO.getQuestionNo())
                .orElseThrow(() -> new RuntimeException("Question not found"));
        reply.setQuestion(question);
        ReplyEntity savedReply = replyRepository.save(reply);
        return convertToDTO(savedReply);
    }

    @Transactional
    public ReplyDTO modify(int replyNo, ReplyDTO replyDTO) {
        ReplyEntity reply = replyRepository.findById(replyNo)
                .orElseThrow(() -> new RuntimeException("Reply not found"));
        reply.setReplyContent(replyDTO.getReplyContent());
        ReplyEntity updatedReply = replyRepository.save(reply);
        return convertToDTO(updatedReply);
    }

    @Transactional
    public void delete(int replyNo) {
        replyRepository.deleteById(replyNo);
    }

    private ReplyDTO convertToDTO(ReplyEntity reply) {
        ReplyDTO replyDTO = new ReplyDTO();
        replyDTO.setReplyNo(reply.getReplyNo());
        replyDTO.setReplyContent(reply.getReplyContent());
        replyDTO.setCreatedAt(reply.getCreatedAt());
        replyDTO.setUpdatedAt(reply.getUpdatedAt());
        replyDTO.setQuestionNo(reply.getQuestion().getQuestionNo());
        return replyDTO;
    }

    private ReplyEntity convertToEntity(ReplyDTO replyDTO) {
        ReplyEntity reply = new ReplyEntity();
        reply.setReplyNo(replyDTO.getReplyNo());
        reply.setReplyContent(replyDTO.getReplyContent());
        reply.setCreatedAt(replyDTO.getCreatedAt());
        reply.setUpdatedAt(replyDTO.getUpdatedAt());
        return reply;
    }
}
