package com.team.cinema.ticketing.entity;

import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "movie")
public class Movie {
	@Id
    @Column(name = "DOCID")
    private String docId;

    @Column(name = "title", nullable = false, length = 128)
    private String title;
    
    @Column(name = "releaseDate", nullable = false)
    private LocalDateTime releaseDate;

    @Column(name = "deadLine", nullable = false, length = 64)
    private LocalDateTime deadLine;

    @Column(name = "runtime", nullable = false)
    private int runtime;

    @Column(name = "poster", nullable = false, length = 256)
    private String poster;
    
    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "nation", nullable = false)
    private String nation;
    
    @Column(name = "rating", nullable = false)
    private String rating;
    
    @Column(name = "reviewNo", nullable = false)
    private int reviewNo;
   
    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "createdAt", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updatedAt", nullable = false)
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        LocalDateTime now = LocalDateTime.now();
        createdAt = now;
        updatedAt = now;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
    

}
