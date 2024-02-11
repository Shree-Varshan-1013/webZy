package com.webzy.jwt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webzy.jwt.dao.AppUserRepo;
import com.webzy.jwt.entity.AppUser;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AppUserRepo appUserRepo;

    @Override
    public List<AppUser> getAllUsers() {
        return appUserRepo.findAll();
    }
    
}
