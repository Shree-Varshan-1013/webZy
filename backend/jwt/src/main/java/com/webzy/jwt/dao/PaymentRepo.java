package com.webzy.jwt.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webzy.jwt.entity.Payment;

public interface PaymentRepo extends JpaRepository<Payment, Long> {

}
