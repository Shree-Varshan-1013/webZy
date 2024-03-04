package com.webzy.jwt.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class JwtResponse {

	public JwtResponse() {
	}

	public JwtResponse(UserData user, String jwtToken) {
		super();
		this.user = user;
		this.jwtToken = jwtToken;
	}

	public JwtResponse(String string) {
		this.jwtToken = "Error: " + string;
	}

	private UserData user;
	private String jwtToken;

	public UserData getUser() {
		return user;
	}

	public void setUser(UserData user) {
		this.user = user;
	}

	public String getJwtToken() {
		return jwtToken;
	}

	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}

}
