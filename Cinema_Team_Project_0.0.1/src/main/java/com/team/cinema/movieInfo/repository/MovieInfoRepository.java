package com.team.cinema.movieInfo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team.cinema.movieInfo.entity.MovieInfo;

@Repository
//JpaRepository<MovieInfo, String> 는
//Spring Data JPA에서 제공하는 인터페이스로, 데이터베이스에 접근하는 데 필요한 여러 메서드를 기본적으로 제공 
//이를 통해 별도의 구현 없이도 기본적인 CRUD(Create, Read, Update, Delete) 작업을 수행 
public interface MovieInfoRepository extends JpaRepository<MovieInfo, String> {

}
