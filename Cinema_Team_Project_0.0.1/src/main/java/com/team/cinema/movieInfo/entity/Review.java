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
	private int movieNo;
	
	// 생성 날짜
	@Column(name = "createdAt", nullable = false)
	private LocalDateTime createdAt;
	
	// 업데이트 날짜
	@Column(name = "updatedAt", nullable = false)
	private LocalDateTime updatedAt;
	
	@PrePersist
	protected void onCreate() {
		LocalDateTime now = LocalDateTime.now();
		createdAt = now;
		updatedAt = now;
	}

	// 엔티티가 업데이트되기 전에 호출되는 메서드입니다.
	// 수정 시간을 현재 시간으로 갱신합니다.
	@PreUpdate
	protected void onUpdate() {
		updatedAt = LocalDateTime.now();
	}
	
	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}
	
	public String getContent() {
		return content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
	
	public Double getGrade() {
		return grade;
	}
	
	public void setGrade(Double grade) {
		this.grade = grade;
	}

	public int getLike() {
		return like;
	}

	public void setLike(int like) {
		this.like = like;
	}

	public int getMovieNo() {
		return movieNo;
	}

	public void setMovieNo(int movieNo) {
		this.movieNo = movieNo;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	
}
