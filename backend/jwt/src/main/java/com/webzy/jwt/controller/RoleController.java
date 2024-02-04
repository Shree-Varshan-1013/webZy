package com.webzy.jwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webzy.jwt.entity.Role;
import com.webzy.jwt.service.RoleServiceImpl;

@RestController
public class RoleController {
	
	@Autowired
	private RoleServiceImpl roleService;
	
	@PostMapping("/registerNewRole")
	public Role registerNewRole(Role role) {
		return roleService.registerNewRole(role);
	}
	
	
}
