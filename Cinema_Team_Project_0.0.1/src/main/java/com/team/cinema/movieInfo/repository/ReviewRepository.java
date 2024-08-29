package com.team.cinema.movieInfo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team.cinema.movieInfo.entity.Review;

//CRUD를 어떻게 처리할지 정의하는 계층이 바로 리포지터리이다.
//JpaRepository 인터페이스를 상속
//<엔티티의 타입(Review), 엔티티의 PK의 속성 타입(Integer)>
@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {
	List<Review> findByMovieNo(String movieNo);
}
