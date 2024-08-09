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
@Data
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

}
