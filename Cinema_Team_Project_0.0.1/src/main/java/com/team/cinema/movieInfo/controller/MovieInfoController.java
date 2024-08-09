package com.team.cinema.movieInfo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.cinema.movieInfo.entity.Review;
import com.team.cinema.movieInfo.service.MovieInfoService;

@RestController
@RequestMapping("/movie")
public class MovieInfoController {
	
	@Autowired
	private MovieInfoService movieInfoService;
	
	@GetMapping("/main")
	public String getMovies(@RequestParam("releaseDate") String releaseDate) {
		return movieInfoService.getMovies(releaseDate);
	}
	
	@GetMapping("/info")
	public String getMovieInfo(@RequestParam("movieId") String movieId, @RequestParam("movieSeq") String movieSeq) {
		return movieInfoService.getMovieInfo(movieId, movieSeq);
	}
	
	@GetMapping("/review")
	public List<Review> getReview(@RequestParam("movieNo") int movieNo) {
		return movieInfoService.getReviewByMovieNo(movieNo);
	}
	
//	@GetMapping("/movie/add")
//    public String updateMovies() {
//		movieInfoService.updateMovies();
//        return "저장 성공";
//    }
}