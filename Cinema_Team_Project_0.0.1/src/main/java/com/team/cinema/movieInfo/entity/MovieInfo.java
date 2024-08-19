package com.team.cinema.movieInfo.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.Data;

// JPA 엔티티 클래스를 정의하는 어노테이션입니다.
@Entity
// Lombok의 @Data 어노테이션을 사용하여 getter, setter, toString, equals, hashCode 메서드를 자동으로 생성합니다.
//@Data
// 데이터베이스에서 사용할 테이블의 이름을 지정합니다.
@Table(name = "movie")
public class MovieInfo {

    // 이 필드는 엔티티의 기본 키(primary key)로 지정됩니다.
    @Id
    // 이 필드는 DOCID라는 이름의 컬럼과 매핑됩니다.
    @Column(name = "DOCID")
    private String docId;

    // title이라는 이름의 컬럼과 매핑되고, 길이는 최대 128자로 제한되며, null 값을 허용하지 않습니다.
    @Column(name = "title", nullable = false, length = 128)
    private String title;

    // releaseDate라는 이름의 컬럼과 매핑되고, null 값을 허용하지 않습니다.
    @Column(name = "releaseDate", nullable = false)
    private LocalDateTime releaseDate;

    // deadLine이라는 이름의 컬럼과 매핑되고, null 값을 허용하지 않습니다.
    @Column(name = "deadLine", nullable = false)
    private LocalDateTime deadLine;

    // runtime이라는 이름의 컬럼과 매핑되고, null 값을 허용하지 않습니다.
    @Column(name = "runtime", nullable = false)
    private int runtime;

    // poster라는 이름의 컬럼과 매핑되고, 길이는 최대 256자로 제한되며, null 값을 허용하지 않습니다.
    @Column(name = "poster", nullable = false, length = 256)
    private String poster;

    // category라는 이름의 컬럼과 매핑되고, null 값을 허용하지 않습니다.
    @Column(name = "category", nullable = false)
    private String category;

    // nation이라는 이름의 컬럼과 매핑되고, null 값을 허용하지 않습니다.
    @Column(name = "nation", nullable = false)
    private String nation;

    // rating이라는 이름의 컬럼과 매핑되고, null 값을 허용하지 않습니다.
    @Column(name = "rating", nullable = false)
    private String rating;

    // reviewNo라는 이름의 컬럼과 매핑되고, null 값을 허용하지 않습니다.
    @Column(name = "reviewNo", nullable = false)
    private int reviewNo;

    // content라는 이름의 컬럼과 매핑되고, null 값을 허용하지 않습니다.
    @Column(name = "content", nullable = false)
    private String content;

    // createdAt이라는 이름의 컬럼과 매핑되고, null 값을 허용하지 않습니다.
    @Column(name = "createdAt", nullable = false)
    private LocalDateTime createdAt;

    // updatedAt이라는 이름의 컬럼과 매핑되고, null 값을 허용하지 않습니다.
    @Column(name = "updatedAt", nullable = false)
    private LocalDateTime updatedAt;
    
// // 새롭게 추가할 필드들
//    @Column(name = "genre", nullable = false)
//    private String genre;
//
//    @Column(name = "prodYear", nullable = false)
//    private String prodYear;

    // 엔티티가 처음 저장되기 전에 호출되는 메서드입니다.
    @PrePersist
    protected void onCreate() {
        LocalDateTime now = LocalDateTime.now();
        createdAt = now;
        updatedAt = now;
    }

    // 엔티티가 업데이트되기 전에 호출되는 메서드입니다.
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

	public String getDocId() {
		return docId;
	}

	public void setDocId(String docId) {
		this.docId = docId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public LocalDateTime getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(LocalDateTime releaseDate) {
		this.releaseDate = releaseDate;
	}

	public LocalDateTime getDeadLine() {
		return deadLine;
	}

	public void setDeadLine(LocalDateTime deadLine) {
		this.deadLine = deadLine;
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

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getNation() {
		return nation;
	}

	public void setNation(String nation) {
		this.nation = nation;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public int getReviewNo() {
		return reviewNo;
	}

	public void setReviewNo(int reviewNo) {
		this.reviewNo = reviewNo;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
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
