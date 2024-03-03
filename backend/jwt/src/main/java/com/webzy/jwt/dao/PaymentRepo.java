package com.webzy.jwt.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.webzy.jwt.entity.Payment;

public interface PaymentRepo extends JpaRepository<Payment, Long> {

    @Query(value = "SELECT u FROM Payment u WHERE u.user.userName = ?1")
    public List<Payment> getPaymentByUserName(String username);
}
