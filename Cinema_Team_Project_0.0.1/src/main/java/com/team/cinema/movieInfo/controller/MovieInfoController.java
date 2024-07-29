package com.team.cinema.movieInfo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

}