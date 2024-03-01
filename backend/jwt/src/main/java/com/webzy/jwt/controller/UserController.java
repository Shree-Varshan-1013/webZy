package com.webzy.jwt.controller;

import java.util.List;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.webzy.jwt.entity.Addon;
import com.webzy.jwt.entity.Plan;
import com.webzy.jwt.service.AddonServiceImpl;
import com.webzy.jwt.service.UserServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/customer")
@RequiredArgsConstructor
public class UserController {

	private final UserServiceImpl userService;
	private final AddonServiceImpl addonService;

	// @PostConstruct
	// public void initRolesAndUSer() {
	// 	userService.initRolesAndUser();
	// }

	@Operation(summary = "Admin route", description = "Accessible only by admin roles.")
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	@GetMapping("/forAdmin")
	public String adminRoute() {
		return "Admin Routes";
	}

	@Operation(summary = "View plans by operator name", description = "View plans by operator name.")
	@PreAuthorize("hasRole('CUSTOMER') or hasRole('ADMIN')")
	@GetMapping("/plan/{operatorName}")
	public List<Plan> viewPlan(@Parameter(description = "Operator name") @PathVariable String operatorName) {
		return userService.findPlansByOperator(operatorName);
	}

	@Operation(summary = "Get addons by operator name", description = "Get addons by operator name.")
	@PreAuthorize("hasRole('CUSTOMER') or hasRole('ADMIN')")
	@GetMapping("/getAddons/{operatorName}")
	public List<Addon> getAddons(@Parameter(description = "Operator name") @PathVariable String operatorName) {
		return addonService.getAddOnByOperatorName(operatorName);
	}
}
