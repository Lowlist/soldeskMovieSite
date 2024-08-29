package com.team.cinema.movieInfo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.cinema.movieInfo.dto.ReviewDto;
import com.team.cinema.movieInfo.entity.MovieInfo;
import com.team.cinema.movieInfo.service.MovieInfoService;
import com.team.cinema.movieInfo.service.ReviewService;

@RestController
@RequestMapping("/movie")
public class MovieInfoController {
	
	@Autowired
	private MovieInfoService movieInfoService;
	@Autowired
	private ReviewService reviewService;
	
	@GetMapping("/main")
    public List<MovieInfo> getMovies() {
        return movieInfoService.getMovies();
    }
	
	@GetMapping("/info")
	public Optional<MovieInfo> getMovieInfo(@RequestParam("DOCID") String DOCID) {
		return movieInfoService.getMovieInfo(DOCID);
	}
	
	//영화리뷰 목록 조회
	@GetMapping("/review")
	public ResponseEntity<List<ReviewDto>> getReview(@RequestParam("movieNo") String movieNo) {
		List<ReviewDto> reviews = reviewService.getList(movieNo);
		return ResponseEntity.ok(reviews);
	}
	
	@GetMapping("/add")
    public String updateMovies() {
		movieInfoService.updateMovies();
        return "저장 성공";
    }
}