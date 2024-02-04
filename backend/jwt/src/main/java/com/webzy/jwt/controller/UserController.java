package com.webzy.jwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.webzy.jwt.entity.AppUser;
import com.webzy.jwt.service.UserServiceImpl;

import jakarta.annotation.PostConstruct;

@RestController
public class UserController {
	
	@Autowired
	private UserServiceImpl userService;
	
	@PostConstruct
	public void initRolesAndUSer() {
		userService.initRolesAndUser();
	}
	
	@PostMapping("/registerNewUser")
	public AppUser registerNewUser(@RequestBody AppUser user) {
		return userService.registerNewUser(user);
	}
	
	@GetMapping("/forAdmin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminRoute() {
		return "Admin Routes";
	}
	
	@GetMapping("/forUser")
	@PreAuthorize("hasRole('USER')")
	public String userRoute() {
		return "User Routes";
	}
}
