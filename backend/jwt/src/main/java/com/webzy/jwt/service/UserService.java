package com.webzy.jwt.service;

import org.springframework.http.ResponseEntity;

import com.webzy.jwt.entity.AppUser;

public interface UserService {
	
	ResponseEntity<?> registerNewUser(AppUser user);

	AppUser findUserNameByEmail(String email);
}
