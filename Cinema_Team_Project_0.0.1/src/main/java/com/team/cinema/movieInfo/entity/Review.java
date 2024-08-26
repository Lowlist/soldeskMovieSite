package com.team.cinema.movieInfo.entity;

import java.time.LocalDateTime;
import jakarta.persistence.*;

@Entity
@Table(name = "review")

public class Review {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int no;
	
	// 리뷰 내용
	@Column(name = "content", nullable = false, length = 50)
	private String content;
	
	// 평점
	@Column(name = "grade", nullable = false, length = 50)
	private Double grade;
	
	// 추천 여부
	@Column(name = "like", nullable = false)
	private int like;
	
	// 영화 번호(movie Table 외래키)
	@Column(name = "movieNo", nullable = false)
	private String movieNo;
	
	// 생성 날짜
	@Column(name = "createdAt", nullable = false)
	private LocalDateTime createdAt;
	
	// 업데이트 날짜
	@Column(name = "updatedAt", nullable = false)
	private LocalDateTime updatedAt;
	
	public Review() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
}
