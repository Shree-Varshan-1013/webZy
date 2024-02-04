package com.webzy.jwt.entity;

public class JwtResponse {
	
	public JwtResponse() {}
	
	public JwtResponse(AppUser user, String jwtToken) {
		super();
		this.user = user;
		this.jwtToken = jwtToken;
	}
	
	private AppUser user;
	private String jwtToken;
	
	public AppUser getUser() {
		return user;
	}
	public void setUser(AppUser user) {
		this.user = user;
	}
	public String getJwtToken() {
		return jwtToken;
	}
	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}
	
	
}