package com.team.cinema.support.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class ReplyDTO {
    private int replyNo;
    private String replyContent;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String adminId;
}
