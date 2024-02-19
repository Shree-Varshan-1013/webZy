package com.webzy.jwt.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webzy.jwt.entity.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Long> {

}
