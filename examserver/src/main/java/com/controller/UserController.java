package com.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Role;
import com.model.User;
import com.model.UserRole;
import com.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	//  Creating User  
	//	when there will be request for /user then this method will get executed
	
	@PostMapping("/register")
	@CrossOrigin("*")
	public User createUser(@RequestBody User user) throws Exception
	{
		
			user.setProfile("default.png");
			Set<UserRole> roles = new HashSet<>();
			
			Role role=new Role();
			role.setRoleId(45L);
			role.setRoleName("Normal");
			
			UserRole UserRole = new UserRole();
			UserRole.setUser(user);
			UserRole.setRole(role);
			
			roles.add(UserRole);
			
			
			return this.userService.createUser(user,roles);
	}
	
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username)
	{
			return this.userService.getUser(username);
	}
	
	//delete the user by id
	@DeleteMapping("/{userId}")
	public void deleteUser(@PathVariable("userId") Long userId)
	{
		this.userService.deleteUser(userId);
	}

	//update the uset by id
	@PutMapping("/update_user")
	public User update(@RequestBody User user)
	{
		return this.userService.updateUser(user);
	}
}
