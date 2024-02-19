package com.webzy.jwt.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webzy.jwt.entity.Recharge;

public interface RechargeRepo extends JpaRepository<Recharge, Long> {

}
