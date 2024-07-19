package com.team.cinema.seat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.cinema.seat.entity.TheaterLine;
import com.team.cinema.seat.entity.TheaterRow;
import com.team.cinema.seat.repository.TheaterLineRepository;
import com.team.cinema.seat.repository.TheaterRowRepository;
import com.team.cinema.ticketing.entity.Theater;
import com.team.cinema.ticketing.repository.TheaterRepository;

@Service
public class SeatService {

    @Autowired
    private TheaterRowRepository theaterRowRepository;
    @Autowired
    private TheaterLineRepository theaterLineRepository;
    @Autowired
    private TheaterRepository theaterRepository;

    public List<TheaterRow> getRowsByTheaterNo(int theaterNo) {
        return theaterRowRepository.findByTheaterNo(theaterNo);
    }

    public List<TheaterLine> getColsByTheaterNo(int theaterNo) {
        return theaterLineRepository.findByTheaterNo(theaterNo);
    }
    
    public Theater getTheaterByNo(int theaterNo) {
        return theaterRepository.findById(theaterNo).orElseThrow(() -> new IllegalArgumentException("Invalid theater No: " + theaterNo));
    }
    
}