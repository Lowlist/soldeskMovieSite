package com.team.cinema.member.repository;

import java.util.List;
<<<<<<< HEAD
import java.util.Optional;
=======
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.team.cinema.member.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByNo(int no);
<<<<<<< HEAD
	Optional<User> findById(String id);
=======
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
}

