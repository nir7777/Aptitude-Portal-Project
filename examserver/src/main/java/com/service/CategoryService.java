package com.service;

import java.util.Set;

import com.model.exam.Category;

public interface CategoryService {
	
	public Category addCategory(Category category);
	public Category updateCategory(Category category);
	public Set<Category> getCateggories();
	public Category getCategory(Long categoryId);
	
	public void deleteCategory(Long categoryId);
	

}
