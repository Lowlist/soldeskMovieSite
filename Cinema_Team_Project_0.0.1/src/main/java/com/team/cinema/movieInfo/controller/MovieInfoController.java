package com.team.cinema.movieInfo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.cinema.movieInfo.entity.MovieInfo;
import com.team.cinema.movieInfo.entity.Review;
import com.team.cinema.movieInfo.service.MovieInfoService;

@RestController
@RequestMapping("/movie")
public class MovieInfoController {
	
	@Autowired
	private MovieInfoService movieInfoService;
	
	@GetMapping("/main")
    public List<MovieInfo> getMovies() {
        return movieInfoService.getMovies();
    }
	
	@GetMapping("/info")
	public Optional<MovieInfo> getMovieInfo(@RequestParam("DOCID") String DOCID) {
		return movieInfoService.getMovieInfo(DOCID);
	}
	
//	@GetMapping("/review")
//	public List<Review> getReview(@RequestParam("movieNo") int movieNo) {
//		return movieInfoService.getReviewByMovieNo(movieNo);
//	}
	
	@GetMapping("/add")
    public String updateMovies() {
		movieInfoService.updateMovies();
        return "저장 성공";
    }
}