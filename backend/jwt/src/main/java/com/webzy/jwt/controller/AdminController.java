package com.webzy.jwt.controller;

import java.util.List;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.webzy.jwt.entity.Addon;
import com.webzy.jwt.entity.AppUser;
import com.webzy.jwt.entity.Plan;
import com.webzy.jwt.service.AdminServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5713")
@RestController
@RequestMapping("api/v1/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminServiceImpl adminService;

    @Operation(summary = "Get all users", description = "Retrieve a list of all users.")
    @GetMapping("/get-all-users")
    @PreAuthorize("hasRole('ADMIN')")
    public List<AppUser> getAllUsers() {
        return adminService.getAllUsers();
    }

    @Operation(summary = "Register a new admin", description = "Register a new admin user.")
    @PostMapping("/register-new-admin")
    public AppUser registerNewUser(@RequestBody AppUser user) {
        return adminService.registerNewAdmin(user);
    }

    @Operation(summary = "Search users", description = "Search users by a search term.")
    @GetMapping("/search/{searchTerm}")
    public List<AppUser> searchUsers(@Parameter(description = "Search term") @PathVariable String searchTerm) {
        return adminService.searchUsers(searchTerm);
    }

    @Operation(summary = "View plans", description = "View all available plans.")
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/plan")
    public List<Plan> viewPlan() {
        return adminService.findPlans();
    }

    @Operation(summary = "Get all addons", description = "Retrieve a list of all addons.")
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/getAddons")
    public List<Addon> getAddons() {
        return adminService.getAddOn();
    }

    @Operation(summary = "Get plan by ID", description = "Retrieve a plan by its ID.")
    @GetMapping("/plan/{id}")
    public Plan getPlanById(@Parameter(description = "Plan ID") @PathVariable Long id) {
        return adminService.getPlanById(id);
    }

    @Operation(summary = "Get addon by ID", description = "Retrieve an addon by its ID.")
    @GetMapping("/addon/{id}")
    public Addon getAddonById(@Parameter(description = "Addon ID") @PathVariable Long id) {
        return adminService.getAddonById(id);
    }
}
