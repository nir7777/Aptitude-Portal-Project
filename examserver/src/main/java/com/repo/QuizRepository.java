package com.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.exam.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long>{

}
