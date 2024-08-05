package com.team.cinema;

import org.mybatis.spring.annotation.MapperScan;
import org.mybatis.spring.boot.autoconfigure.MybatisAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(exclude = {MybatisAutoConfiguration.class})
@ComponentScan(basePackages = {"com.team.cinema"})
<<<<<<< HEAD
@EnableJpaRepositories(basePackages = {"com.team.cinema.ticketing.repository", "com.team.cinema.seat.repository", "com.team.cinema.member.repository", "com.team.cinema.store.repository"})
=======
@EnableJpaRepositories(basePackages = {"com.team.cinema.ticketing.repository", "com.team.cinema.seat.repository", "com.team.cinema.member.repository"})
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
@MapperScan(basePackages = "com.team.cinema.ticketing.dao")
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
