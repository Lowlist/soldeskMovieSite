package com.team.cinema.support.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.team.cinema.support.entity.ReplyEntity;

public interface ReplyRepository extends JpaRepository<ReplyEntity, Integer>{
	List<ReplyEntity> findByQuestion_QuestionNo(int questionNo);
}
