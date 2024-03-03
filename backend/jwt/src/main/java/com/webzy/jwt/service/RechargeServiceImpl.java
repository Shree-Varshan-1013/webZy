package com.webzy.jwt.service;

import org.springframework.stereotype.Service;

import com.webzy.jwt.dao.AppUserRepo;
import com.webzy.jwt.dao.RechargeRepo;
import com.webzy.jwt.entity.AppUser;
import com.webzy.jwt.entity.Recharge;

import lombok.RequiredArgsConstructor;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RechargeServiceImpl implements RechargeService {

    private final RechargeRepo rechargeRepository;

    private final AppUserRepo appUserRepository;

    @Override
    public List<Recharge> getAllRecharges() {
        return rechargeRepository.findAll();
    }

    @Override
    public Recharge getRechargeById(Long id) {
        return rechargeRepository.findById(id).orElse(null);
    }

    @Override
    public Recharge createRecharge(Recharge recharge) {
        return rechargeRepository.save(recharge);
    }

    @Override
    public Recharge updateRecharge(Long id, Recharge recharge) {
        recharge.setRechargeId(id);
        return rechargeRepository.save(recharge);
    }

    @Override
    public void deleteRecharge(Long id) {
        rechargeRepository.deleteById(id);
    }

    public List<Recharge> getRechargesByUserName(String username){
        try{
            AppUser user = appUserRepository.findByUserName(username);
            return rechargeRepository.findByApp_user(username);
        }
        catch(Exception e){
            return null;
        }
    }
}
