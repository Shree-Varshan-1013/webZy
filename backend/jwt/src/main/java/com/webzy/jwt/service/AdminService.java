package com.webzy.jwt.service;

import java.util.List;

import com.webzy.jwt.entity.Addon;
import com.webzy.jwt.entity.AppUser;
import com.webzy.jwt.entity.Plan;

public interface AdminService {

    List<AppUser> getAllUsers();

    AppUser registerNewAdmin(AppUser user);

    List<AppUser> searchUsers(String searchTerm);

    List<Plan> findPlans();

    List<Addon> getAddOn();

    boolean addPlan(Plan plan);

    boolean addAddon(Addon addon);

}
