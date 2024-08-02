package com.team.cinema.support.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.team.cinema.support.entity.QuestionEntity;

public interface QuestionRepository extends JpaRepository<QuestionEntity, Integer>{
	List<QuestionEntity> findByQuestionTitleContaining(String keyword);
}
