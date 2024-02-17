package com.webzy.jwt.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.webzy.jwt.dao.AppUserRepo;
import com.webzy.jwt.dao.RoleRepo;
import com.webzy.jwt.entity.AppUser;
import com.webzy.jwt.entity.Role;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final AppUserRepo userRepo;

	private final RoleRepo roleRepo;

	private final PasswordEncoder passwordEncoder;

	@Override
	public ResponseEntity<?> registerNewUser(AppUser user) {
		String name = user.getUserName();
		String email = user.getEmail();

		AppUser existingUserEmail = userRepo.findByEmail(email);
		AppUser existingUser = userRepo.findByUserName(name);


		if (existingUser != null || existingUserEmail != null) {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).header("message", "User already exists with this email")
					.build();
		}

		Role role = roleRepo.findById("USER").orElseThrow(() -> new RuntimeException("Role 'USER' not found"));
		Set<Role> roles = new HashSet<>();
		roles.add(role);
		user.setRole(roles);
		user.setUserPassword(getEncodedPassword(user.getUserPassword()));
		AppUser savedUser = userRepo.save(user);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
	}

	public void initRolesAndUser() {
		Role adminRole = new Role();
		adminRole.setRoleName("ADMIN");
		adminRole.setRoleDescription("Admin Role");
		roleRepo.save(adminRole);

		Role userRole = new Role();
		userRole.setRoleName("USER");
		userRole.setRoleDescription("User Role");
		roleRepo.save(userRole);

		AppUser admin = new AppUser();
		admin.setUserName("shree1013");
		admin.setUserPassword(getEncodedPassword("shree12345"));
		admin.setEmail("shree@gmail.com");
		Set<Role> roles = new HashSet<>();
		roles.add(adminRole);
		admin.setRole(roles);
		userRepo.save(admin);

	}

	public String getEncodedPassword(String password) {
		return passwordEncoder.encode(password);
	}

	@Override
	public AppUser findUserNameByEmail(String email) {
		return userRepo.findByEmail(email);
	}

}
