package com.webzy.jwt.controller;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webzy.jwt.entity.Addon;
import com.webzy.jwt.entity.AppUser;
import com.webzy.jwt.entity.Plan;
import com.webzy.jwt.service.AdminServiceImpl;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5713")
@RestController
@RequestMapping("api/v1/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminServiceImpl adminService;

    @GetMapping("/get-all-users")
    @PreAuthorize("hasRole('ADMIN')")
    public List<AppUser> getAllUsers() {
        return adminService.getAllUsers();
    }

    @PostMapping("/register-new-admin")
    public AppUser registerNewUser(@RequestBody AppUser user) {
        return adminService.registerNewAdmin(user);
    }

    @GetMapping("/search/{searchTerm}")
    public List<AppUser> searchUsers(@PathVariable String searchTerm) {
        System.out.println("reached controller");
        return adminService.searchUsers(searchTerm);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/plan")
    public List<Plan> viewPlan() {
        return adminService.findPlans();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/getAddons")
    public List<Addon> getAddons() {
        return adminService.getAddOn();
    }

    @GetMapping("/plan/{id}")
    public Plan getPlanById(@PathVariable Long id) {
        return adminService.getPlanById(id);
    }
    @GetMapping("/addon/{id}")
    public Addon getAddonById(@PathVariable Long id) {
        return adminService.getAddonById(id);
    }

}
