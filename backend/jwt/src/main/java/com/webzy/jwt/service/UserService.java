package com.webzy.jwt.service;

import com.webzy.jwt.entity.AppUser;

public interface UserService {
	
	AppUser registerNewUser(AppUser user);
}
