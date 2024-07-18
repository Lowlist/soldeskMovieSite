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

    @Column(name = "genre", nullable = false, length = 64)
    private String genre;

    @Column(name = "runtime", nullable = false)
    private int runtime;

    @Column(name = "poster", nullable = false, length = 256)
    private String poster;

    @Column(name = "releaseDate", nullable = false)
    private LocalDate releaseDate;

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

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
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

	public LocalDate getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(LocalDate releaseDate) {
		this.releaseDate = releaseDate;
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
