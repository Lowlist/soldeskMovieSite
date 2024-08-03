package com.team.cinema.support.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "questionReply")
public class ReplyEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int replyNo;

	@Column(nullable = false, length = 255, columnDefinition = "varchar(255) default ''")
	private String replyContent;

	@Column(nullable = false, updatable = false, columnDefinition = "DATETIME default NOW()")
	private LocalDateTime createdAt;

	@Column(nullable = false, columnDefinition = "DATETIME default NOW() ON UPDATE NOW()")
	private LocalDateTime updatedAt;

	/*
	 @ManyToOne 
	 @JoinColumn(name = "adminId", referencedColumnName = "adminId") 
	 private Admin admin;
	 */
	
    @ManyToOne
    @JoinColumn(name = "questionNo", referencedColumnName = "questionNo")
    private QuestionEntity question;
    
    // Entity가 DB에 Insert되기 전에 호출됨
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    // Entity가 DB에 Update되기 전에 호출됨
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
