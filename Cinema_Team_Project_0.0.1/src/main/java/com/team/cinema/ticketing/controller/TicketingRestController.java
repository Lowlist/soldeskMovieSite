package com.team.cinema.ticketing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.cinema.ticketing.Movie.Movie;
import com.team.cinema.ticketing.service.TicketingService;

@RestController
public class TicketingRestController {
	
	@Autowired
    private TicketingService ticketingService;

    @GetMapping("/movies")
    public List<Movie> getMovies(@RequestParam String releaseDate) {
        return ticketingService.getMovies(releaseDate);
    }
}
