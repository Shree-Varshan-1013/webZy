package com.webzy.jwt.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.webzy.jwt.entity.AppUser;
import com.webzy.jwt.entity.Plan;

public interface UserService {
	
	ResponseEntity<?> registerNewUser(AppUser user);

	AppUser findUserNameByEmail(String email);

	int findAll();
	
	List<Plan> findPlansByOperator(String operatorName);

}
