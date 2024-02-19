package com.webzy.jwt.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webzy.jwt.entity.Addon;

public interface AddonRepo extends JpaRepository<Addon, Long> {

}
