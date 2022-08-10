package com.service;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.model.User;
import com.model.UserRole;


public interface UserService {

	
	//Creating user
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	
	//get user by username
	public User getUser(String username);
	
	//delete user by username or id
	public void deleteUser(Long userId);
	
	//update user
	public User updateUser(User user );
}
