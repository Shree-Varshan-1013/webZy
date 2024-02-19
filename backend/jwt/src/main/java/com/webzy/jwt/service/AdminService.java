package com.webzy.jwt.service;

import java.util.List;

import com.webzy.jwt.entity.AppUser;

public interface AdminService {

    List<AppUser> getAllUsers();

    AppUser registerNewAdmin(AppUser user);
    
    List<AppUser> searchUsers(String searchTerm);

}
