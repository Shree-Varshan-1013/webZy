package com.webzy.jwt.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webzy.jwt.entity.Role;

public interface RoleRepo extends JpaRepository<Role, String> {

}
