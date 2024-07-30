package com.team.cinema.seat.entity;

import java.time.LocalDateTime;
import jakarta.persistence.*;

@Entity
@Table(name = "theaterLine")
public class TheaterLine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;

    @Column(name = "theaterNo", nullable = false)
    private int theaterNo;

    @Column(name = "line", nullable = false)
    private int line;

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

	public int getTheaterNo() {
		return theaterNo;
	}

	public void setTheaterNo(int theaterNo) {
		this.theaterNo = theaterNo;
	}

	public int getLine() {
		return line;
	}

	public void setLine(int line) {
		this.line = line;
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
