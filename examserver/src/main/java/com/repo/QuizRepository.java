 package com.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.exam.Category;
import com.model.exam.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long>{

	public List<Quiz> findBycategory(Category category);
}
