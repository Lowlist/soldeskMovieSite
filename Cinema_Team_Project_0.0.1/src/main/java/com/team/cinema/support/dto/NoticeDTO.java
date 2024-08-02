package com.team.cinema.support.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class NoticeDTO {
    private int noticeNo;
    private String noticeTitle;
    private String noticeContent;
    private int noticeHit;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String adminId;
}
