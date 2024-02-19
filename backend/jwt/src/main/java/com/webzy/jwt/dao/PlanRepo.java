package com.webzy.jwt.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webzy.jwt.entity.Plan;

public interface PlanRepo extends JpaRepository<Plan, Long> {

}
