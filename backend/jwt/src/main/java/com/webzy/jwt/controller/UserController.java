package com.webzy.jwt.controller;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webzy.jwt.entity.Addon;
import com.webzy.jwt.entity.Plan;
import com.webzy.jwt.service.AddonServiceImpl;
import com.webzy.jwt.service.UserServiceImpl;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5713/")
@RestController
@RequestMapping("/api/customer")
@RequiredArgsConstructor
public class UserController {
	
	private final UserServiceImpl userService;

	private final AddonServiceImpl  addonService;
	
	@PostConstruct
	public void initRolesAndUSer() {
		userService.initRolesAndUser();
	}
	
	@GetMapping("/forAdmin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminRoute() {
		return "Admin Routes";
	}
	
	@PreAuthorize("hasRole('CUSTOMER')")
	@GetMapping("/plan/{operatorName}")
	public List<Plan> viewPlan(@PathVariable String operatorName) {
		return userService.findPlansByOperator(operatorName);
	}

	@GetMapping("/getAddons/{operatorName}")
	public List<Addon> getAddons(@PathVariable String operatorName) {
		return addonService.getAddOnByOperatorName(operatorName);
	}

}
