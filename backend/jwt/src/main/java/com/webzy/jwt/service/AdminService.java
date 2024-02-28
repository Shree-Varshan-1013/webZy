package com.webzy.jwt.service;

import java.util.List;

import com.webzy.jwt.entity.Addon;
import com.webzy.jwt.entity.AppUser;
import com.webzy.jwt.entity.Plan;

public interface AdminService {

    List<AppUser> getAllUsers();

    AppUser registerNewAdmin(AppUser user);
    
    List<AppUser> searchUsers(String searchTerm);

    public List<Plan> findPlans();

    public List<Addon> getAddOn();

}
