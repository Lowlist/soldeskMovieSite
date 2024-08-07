package com.team.cinema;

import org.mybatis.spring.annotation.MapperScan;
import org.mybatis.spring.boot.autoconfigure.MybatisAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

import com.team.cinema.handler.WebSocketHandler;
@SpringBootApplication(exclude = {MybatisAutoConfiguration.class})
@ComponentScan(basePackages = {"com.team.cinema"})
@EnableJpaRepositories(basePackages = {"com.team.cinema.ticketing.repository", "com.team.cinema.seat.repository", "com.team.cinema.store.repository" ,"com.team.cinema.support.repository", "com.team.cinema.member.repository"})
@MapperScan(basePackages = "com.team.cinema.ticketing.dao")
@EnableScheduling // 스케줄
public class Application {

   public static void main(String[] args) {
      SpringApplication.run(Application.class, args);
   }
   
   // WebSocket 설정
    @Bean
    public WebSocketHandler webSocketHandler() {
        return new WebSocketHandler();
    }
}
