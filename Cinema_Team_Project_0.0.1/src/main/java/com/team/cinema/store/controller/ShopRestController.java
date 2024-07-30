package com.team.cinema.store.controller;

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
@RequestMapping("/store")
public class ShopRestController {

}
