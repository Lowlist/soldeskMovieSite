package com.team.cinema.support.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class NoticeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int noticeNo;

    @Column(nullable = false, length = 50, columnDefinition = "varchar(50) default ''")
    private String noticeTitle;

    @Column(nullable = false, length = 255, columnDefinition = "varchar(255) default ''")
    private String noticeContent;

    @Column(nullable = false, columnDefinition = "int default 0")
    private int noticeHit;

    @Column(nullable = false, updatable = false, columnDefinition = "DATETIME default NOW()")
    private LocalDateTime createdAt;

    @Column(nullable = false, columnDefinition = "DATETIME default NOW() ON UPDATE NOW()")
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name = "adminId", referencedColumnName = "adminId")
    private Admin admin;
}
