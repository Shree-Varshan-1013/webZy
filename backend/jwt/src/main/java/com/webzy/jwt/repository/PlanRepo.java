package com.webzy.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.webzy.jwt.entity.Plan;
import java.util.List;


public interface PlanRepo extends JpaRepository<Plan, Long> {

    @Query("SELECT p FROM Plan p WHERE p.OperatorName=?1")
    List<Plan> findByOperatorName(String operatorName);

}
