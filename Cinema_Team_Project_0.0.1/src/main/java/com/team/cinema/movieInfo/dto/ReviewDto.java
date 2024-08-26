package com.team.cinema.movieInfo.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class ReviewDto {
	private int reviewNo;
	private String reviewContent;
	private Double reviewGrade;
	private int reviewLike;
	private String movieNo;
	private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
