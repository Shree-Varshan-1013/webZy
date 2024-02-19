package com.webzy.jwt.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long planId;

    private String planType;
    private String planName;
    private String planValidity;
    private String planData;
    private String planDetails;
    private double planPrice;
    private String OperatorName;

    @OneToMany(mappedBy = "plan", cascade = CascadeType.ALL)
    private List<Recharge> recharges;

}
