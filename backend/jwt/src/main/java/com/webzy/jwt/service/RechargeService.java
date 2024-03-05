package com.webzy.jwt.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.webzy.jwt.entity.Recharge;

public interface RechargeService {

    List<Recharge> getAllRecharges();

    Recharge getRechargeById(Long id);

    ResponseEntity<String> createRecharge(String userName, Recharge recharge);

    Recharge updateRecharge(Long id, Recharge recharge);

    void deleteRecharge(Long id);

    ResponseEntity<String> createRechargeForOthers(String userName, Long mobileNumber,  Recharge recharge);
    
}
