package com.team.cinema.movieInfo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.cinema.movieInfo.dto.ReviewDto;
import com.team.cinema.movieInfo.entity.Review;
import com.team.cinema.movieInfo.repository.ReviewRepository;

@Service
public class ReviewService {
	@Autowired
	private ReviewRepository reviewRepository;
	
	// 영화 리뷰 DB연결, this::convertToDto =>convertToDto를 참조한다는 의미
	public List<ReviewDto> getList(String movieNo) {
		List<Review> reviews = reviewRepository.findByMovieNo(movieNo);
		return reviews.stream().map(this::convertToDto).collect(Collectors.toList());
	}
	
	// Entity를 Dto로 전환하는 메서드
	private ReviewDto convertToDto(Review review) {
		ReviewDto reviewDto = new ReviewDto(); //새로운 ReviewDto 객체 생성
		reviewDto.setReviewNo(review.getNo());
		reviewDto.setIdNo(review.getIdNo());
		reviewDto.setReviewContent(review.getContent());
		reviewDto.setReviewGrade(review.getGrade());
		reviewDto.setReviewLike(review.getLike());
		reviewDto.setMovieNo(review.getMovieNo());
		reviewDto.setCreatedAt(review.getCreatedAt());
		reviewDto.setUpdatedAt(review.getUpdatedAt());
		return reviewDto; // ReviewDto 객체 반환
	}
}
