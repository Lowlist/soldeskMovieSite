package com.team.cinema.ticketing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.cinema.ticketing.entity.Cinema;
import com.team.cinema.ticketing.entity.Theater;
import com.team.cinema.ticketing.service.TicketingService;

@RestController
@RequestMapping("/ticketing")
public class TicketingRestController {

    @Autowired
    private TicketingService ticketingService;

    @GetMapping("/movies")
    public String getMovies(@RequestParam("releaseDate") String releaseDate) {
        return ticketingService.getMovies(releaseDate);
    }

    @GetMapping("/theaters")
    public List<Cinema> getTheaters(@RequestParam("area") String area) {
        return ticketingService.getTheatersByArea(area);
    }

    @GetMapping("/theater/list")
    public List<Theater> getTheatersByCinema(@RequestParam("cinemaNo") int cinemaNo) {
        return ticketingService.getTheatersByCinema(cinemaNo);
    }
    
    @GetMapping("/movie/add")
    public String updateMovies() {
    	ticketingService.updateMovies();
        return "저장 성공";
    }
}
