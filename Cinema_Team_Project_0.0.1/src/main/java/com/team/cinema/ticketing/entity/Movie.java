package com.team.cinema.ticketing.entity;

import java.time.LocalDateTime;
import java.time.LocalDate;
import jakarta.persistence.*;

@Entity
@Table(name = "movie")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;

    @Column(name = "title", nullable = false, length = 128)
    private String title;
    
    @Column(name = "releaseDate", nullable = false)
    private LocalDate releaseDate;

    @Column(name = "deadLine", nullable = false, length = 64)
    private String deadLine;
    
    @Column(name = "grade", nullable = false)
    private Double grade;

    @Column(name = "runtime", nullable = false)
    private int runtime;

    @Column(name = "poster", nullable = false, length = 256)
    private String poster;
    
    @Column(name = "categoryNo", nullable = false)
    private int categoryNo;

    @Column(name = "nationNo", nullable = false)
    private int nationNo;
    
    @Column(name = "ratingNo", nullable = false)
    private int ratingNo;
    
    @Column(name = "gradeNo", nullable = false)
    private int gradeNo;
    
    @Column(name = "contentNo", nullable = false)
    private int contentNo;
    
    @Column(name = "ranking", nullable = false)
    private int ranking;

    @Column(name = "createdAt", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updatedAt", nullable = false)
    private LocalDateTime updatedAt;

	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public LocalDate getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(LocalDate releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getDeadLine() {
		return deadLine;
	}

	public void setDeadLine(String deadLine) {
		this.deadLine = deadLine;
	}

	public Double getGrade() {
		return grade;
	}

	public void setGrade(Double grade) {
		this.grade = grade;
	}

	public int getRuntime() {
		return runtime;
	}

	public void setRuntime(int runtime) {
		this.runtime = runtime;
	}

	public String getPoster() {
		return poster;
	}

	public void setPoster(String poster) {
		this.poster = poster;
	}

	public int getCategoryNo() {
		return categoryNo;
	}

	public void setCategoryNo(int categoryNo) {
		this.categoryNo = categoryNo;
	}

	public int getNationNo() {
		return nationNo;
	}

	public void setNationNo(int nationNo) {
		this.nationNo = nationNo;
	}

	public int getRatingNo() {
		return ratingNo;
	}

	public void setRatingNo(int ratingNo) {
		this.ratingNo = ratingNo;
	}

	public int getGradeNo() {
		return gradeNo;
	}

	public void setGradeNo(int gradeNo) {
		this.gradeNo = gradeNo;
	}

	public int getContentNo() {
		return contentNo;
	}

	public void setContentNo(int contentNo) {
		this.contentNo = contentNo;
	}

	public int getRanking() {
		return ranking;
	}

	public void setRanking(int ranking) {
		this.ranking = ranking;
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
