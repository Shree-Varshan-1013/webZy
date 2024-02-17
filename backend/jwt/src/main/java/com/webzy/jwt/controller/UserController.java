package com.webzy.jwt.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.webzy.jwt.entity.AppUser;
import com.webzy.jwt.service.UserServiceImpl;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5713")
@RestController
@RequiredArgsConstructor
public class UserController {
	
	private final UserServiceImpl userService;
	
	@PostConstruct
	public void initRolesAndUSer() {
		userService.initRolesAndUser();
	}
	
	@PostMapping("/registerNewUser")
	public ResponseEntity<?> registerNewUser(@RequestBody AppUser user) {
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
