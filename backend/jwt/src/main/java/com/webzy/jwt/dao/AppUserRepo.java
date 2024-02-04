package com.webzy.jwt.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webzy.jwt.entity.AppUser;

public interface AppUserRepo extends JpaRepository<AppUser, String>{

}
