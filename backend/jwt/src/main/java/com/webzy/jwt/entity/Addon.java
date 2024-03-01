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
public class Addon {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addonId;

    private String addonName;
	private String data;
    private double addonPrice;
    private String addonDetails;
    private String addonValidity;
	private String OperatorName;

}
