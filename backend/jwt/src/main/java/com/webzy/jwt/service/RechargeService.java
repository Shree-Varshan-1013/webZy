package com.webzy.jwt.service;

import java.util.List;

import com.webzy.jwt.entity.Recharge;

public interface RechargeService {

    List<Recharge> getAllRecharges();

    Recharge getRechargeById(Long id);

    Recharge createRecharge(Recharge recharge);

    Recharge updateRecharge(Long id, Recharge recharge);

    void deleteRecharge(Long id);
    
}
