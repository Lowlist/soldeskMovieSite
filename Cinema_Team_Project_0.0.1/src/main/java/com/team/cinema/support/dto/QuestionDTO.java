package com.team.cinema.support.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;

@Data
public class QuestionDTO {
    private int questionNo;
    private String questionTitle;
    private String questionContent;
    private int questionHit;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private int no; 
    private int replyNo; 
    private List<ReplyDTO> replies;  
    private byte[] questionImage; // 이미지 데이터 추가
}
