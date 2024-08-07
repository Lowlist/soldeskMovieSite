package com.team.cinema.support.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "question")
public class QuestionEntity {
	   @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int questionNo;

	    @Column(nullable = false, length = 50, columnDefinition = "varchar(50) default ''")
	    private String questionTitle;

	    @Column(nullable = false, length = 255, columnDefinition = "varchar(255) default ''")
	    private String questionContent;

	    @Column(nullable = false, columnDefinition = "int default 0")
	    private int questionHit;

	    @Column(nullable = false, updatable = false, columnDefinition = "DATETIME default NOW()")
	    private LocalDateTime createdAt;

	    @Column(nullable = false, columnDefinition = "DATETIME default NOW() ON UPDATE NOW()")
	    private LocalDateTime updatedAt;

	    /*
	    @ManyToOne
	    @JoinColumn(name = "no", referencedColumnName = "no")
	    private Member member;
	    */

	    @OneToOne
	    @JoinColumn(name = "replyNo", referencedColumnName = "replyNo")
	    private ReplyEntity questionReply;
	    
	    @Lob
	    @Column(name = "questionImage")
	    private byte[] questionImage;
	    
	    public QuestionEntity() {
	    	this.createdAt = LocalDateTime.now();
	    	this.updatedAt = LocalDateTime.now();
	    }
}
