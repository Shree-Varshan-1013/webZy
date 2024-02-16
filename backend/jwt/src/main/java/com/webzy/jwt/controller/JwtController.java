package com.webzy.jwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.webzy.jwt.entity.JwtRequest;
import com.webzy.jwt.entity.JwtResponse;
import com.webzy.jwt.service.JwtService;

@CrossOrigin(origins = "http://localhost:5713")
@RestController
public class JwtController {

	@Autowired
	private JwtService jwtService;
	
	@PostMapping("/authenticate")
	public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception{
		return jwtService.createJwtToken(jwtRequest);
	}
	
}
