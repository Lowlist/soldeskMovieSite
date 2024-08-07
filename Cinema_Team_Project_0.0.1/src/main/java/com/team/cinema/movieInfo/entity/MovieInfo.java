package com.team.cinema.movieInfo.entity;

import java.time.LocalDateTime;
import java.time.LocalDate;
import jakarta.persistence.*;

//JPA 엔티티 클래스를 정의하는 어노테이션입니다.
@Entity
// 데이터베이스에서 사용할 테이블의 이름을 지정합니다.
@Table(name = "movie")

public class MovieInfo {

	// 이 필드는 엔티티의 기본 키(primary key)로 지정됩니다.
	@Id
	// 기본 키의 생성 전략을 IDENTITY로 설정하여, 데이터베이스에서 자동으로 생성되도록 합니다.
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int no;

	// 영화의 제목을 나타내는 필드입니다. Not null 제약 조건과 최대 길이 128이 설정되어 있습니다.
	@Column(name = "title", nullable = false, length = 128)
	private String title;

	// 영화의 개봉일을 나타내는 필드입니다. Not null 제약 조건이 있습니다.
	@Column(name = "releaseDate", nullable = false)
	private LocalDate releaseDate;

	// 영화 상영 종료일을 나타내는 필드입니다. Not null 제약 조건과 최대 길이 64가 설정되어 있습니다.
	@Column(name = "deadLine", nullable = false, length = 64)
	private String deadLine;

	// 영화의 평점을 나타내는 필드입니다. Not null 제약 조건이 있습니다.
	@Column(name = "grade", nullable = false)
	private Double grade;

	// 영화의 상영 시간을 분 단위로 나타내는 필드입니다. Not null 제약 조건이 있습니다.
	@Column(name = "runtime", nullable = false)
	private int runtime;

	// 영화 포스터 이미지의 URL을 나타내는 필드입니다. Not null 제약 조건과 최대 길이 256이 설정되어 있습니다.
	@Column(name = "poster", nullable = false, length = 256)
	private String poster;

	// 영화의 카테고리 번호를 나타내는 필드입니다. Not null 제약 조건이 있습니다.
	@Column(name = "categoryNo", nullable = false)
	private int categoryNo;

	// 영화의 국가 번호를 나타내는 필드입니다. Not null 제약 조건이 있습니다.
	@Column(name = "nationNo", nullable = false)
	private int nationNo;

	// 영화의 등급 번호를 나타내는 필드입니다. Not null 제약 조건이 있습니다.
	@Column(name = "ratingNo", nullable = false)
	private int ratingNo;

	// 영화의 평점 관련 번호를 나타내는 필드입니다. Not null 제약 조건이 있습니다.
	@Column(name = "gradeNo", nullable = false)
	private int gradeNo;

	// 영화의 내용 번호를 나타내는 필드입니다. Not null 제약 조건이 있습니다.
	@Column(name = "contentNo", nullable = false)
	private int contentNo;

	// 영화의 순위를 나타내는 필드입니다. Not null 제약 조건이 있습니다.
	@Column(name = "ranking", nullable = false)
	private int ranking;

	// 엔티티가 생성된 날짜와 시간을 나타내는 필드입니다. Not null 제약 조건이 있습니다.
	@Column(name = "createdAt", nullable = false)
	private LocalDateTime createdAt;

	// 엔티티가 마지막으로 수정된 날짜와 시간을 나타내는 필드입니다. Not null 제약 조건이 있습니다.
	@Column(name = "updatedAt", nullable = false)
	private LocalDateTime updatedAt;

	// 엔티티가 처음으로 저장되기 전에 호출되는 메서드입니다.
	// 현재 시간을 생성 및 수정 시간으로 설정합니다.
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

	// Getter와 Setter 메서드: 각 필드의 값을 가져오거나 설정할 수 있습니다.
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
