package com.webzy.jwt.service;

import org.springframework.stereotype.Service;

import com.webzy.jwt.repository.RoleRepo;
import com.webzy.jwt.entity.Role;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService{
	
	private final RoleRepo roleRepo;

	@Override
	public Role registerNewRole(Role role) {
		return roleRepo.save(role);
	}

}
