package com.webzy.jwt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webzy.jwt.entity.AppUser;
import com.webzy.jwt.service.AdminServiceImpl;

@RestController
@RequestMapping("api/v1/admin")
public class AdminController {

    @Autowired
    private AdminServiceImpl adminService;

    @GetMapping("/getAllUsers")
    @PreAuthorize("hasRole('ADMIN')")
    public List<AppUser> getAllUsers(){
        return adminService.getAllUsers();
    }
}