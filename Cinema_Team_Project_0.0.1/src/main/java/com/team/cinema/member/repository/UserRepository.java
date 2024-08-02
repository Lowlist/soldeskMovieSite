package com.team.cinema.member.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.team.cinema.member.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByNo(int no);
    User findById(String id);
}

