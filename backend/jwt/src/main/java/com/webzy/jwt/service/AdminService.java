package com.webzy.jwt.service;

import java.util.List;

import com.webzy.jwt.entity.AppUser;

public interface AdminService {

    public List<AppUser> getAllUsers();

    public AppUser registerNewAdmin(AppUser user);
}
