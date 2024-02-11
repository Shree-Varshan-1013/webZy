package com.webzy.jwt.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.webzy.jwt.dao.AppUserRepo;
import com.webzy.jwt.dao.RoleRepo;
import com.webzy.jwt.entity.AppUser;
import com.webzy.jwt.entity.Role;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AppUserRepo appUserRepo;

    @Autowired
    private RoleRepo roleRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }

    @Override
    public List<AppUser> getAllUsers() {
        return appUserRepo.findAll();
    }
    
    @Override
    public AppUser registerNewAdmin(AppUser user) {
        Role role = roleRepo.findById("ADMIN").get();
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        user.setRole(roles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));
        return appUserRepo.save(user);
    }

}
