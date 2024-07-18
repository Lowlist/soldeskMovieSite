package com.team.cinema.seat.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.cinema.seat.entity.TheaterLine;
import com.team.cinema.seat.entity.TheaterRow;
import com.team.cinema.seat.repository.TheaterLineRepository;
import com.team.cinema.seat.repository.TheaterRowRepository;

@Service
public class SeatService {

    private static final Logger logger = LoggerFactory.getLogger(SeatService.class);

    @Autowired
    private TheaterRowRepository theaterRowRepository;

    @Autowired
    private TheaterLineRepository theaterLineRepository;

    public List<TheaterRow> getRowsByTheaterNo(int theaterNo) {
        return theaterRowRepository.findByTheaterNo(theaterNo);
    }

    public List<TheaterLine> getColsByTheaterNo(int theaterNo) {
        return theaterLineRepository.findByTheaterNo(theaterNo);
    }
}