package com.webzy.jwt.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.webzy.jwt.entity.AppUser;
import com.webzy.jwt.entity.Recharge;
import java.util.List;


public interface RechargeRepo extends JpaRepository<Recharge, Long> {

    @Query(value = "SELECT u FROM Recharge u WHERE u.app_user.userName = ?1")
    List<Recharge> findByApp_user(String username);

}
