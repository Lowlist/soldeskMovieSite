package com.team.cinema.support.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.team.cinema.support.entity.NoticeEntity;

public interface NoticeRepository extends JpaRepository<NoticeEntity, Integer>{
	List<NoticeEntity> findByNoticeTitleContaining(String keyword);
}
