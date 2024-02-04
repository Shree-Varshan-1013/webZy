package com.webzy.jwt.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.webzy.jwt.dao.AppUserRepo;
import com.webzy.jwt.dao.RoleRepo;
import com.webzy.jwt.entity.AppUser;
import com.webzy.jwt.entity.Role;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private AppUserRepo userRepo;

	@Autowired
	private RoleRepo roleRepo;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public AppUser registerNewUser(AppUser user) {
		Role role = roleRepo.findById("USER").get();
		Set<Role> roles = new HashSet<>();
		roles.add(role);
		user.setRole(roles);
		user.setUserPassword(getEncodedPassword(user.getUserPassword()));
		return userRepo.save(user);
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
		admin.setUserFirstName("Shree Varshan");
		admin.setUserLastName("G");
		admin.setUserPassword(getEncodedPassword("shree12345"));
		Set<Role> roles = new HashSet<>();
		roles.add(adminRole);
		admin.setRole(roles);
		userRepo.save(admin);

	}

	public String getEncodedPassword(String password) {
		return passwordEncoder.encode(password);
	}

}
