package com.team.cinema.seat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.cinema.seat.entity.TheaterLine;
import com.team.cinema.seat.entity.TheaterRow;
import com.team.cinema.seat.service.SeatService;
import com.team.cinema.ticketing.entity.Theater;

@RestController
@RequestMapping("/seats")
public class SeatRestController {

    @Autowired
    private SeatService seatService;

    @GetMapping("/rows")
    public List<TheaterRow> getRows(@RequestParam("theaterNo") int theaterNo) {
        return seatService.getRowsByTheaterNo(theaterNo);
    }

    @GetMapping("/cols")
    public List<TheaterLine> getCols(@RequestParam("theaterNo") int theaterNo) {
        return seatService.getColsByTheaterNo(theaterNo);
    }
    
    @GetMapping("/theater/price")
    public int getTheaterPrice(@RequestParam("theaterNo") int theaterNo) {
        Theater theater = seatService.getTheaterByNo(theaterNo);
        return theater.getPrice();
    }
}
