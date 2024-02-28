package com.webzy.jwt.entity;

import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.Data;

@Data
@Entity
public class AppUser {

	@Id
	private String userName;
	private String email;
	private String userPassword;
	private Long mobileNumber;
	private String location;

	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "APP_USER_ROLE", joinColumns = {
			@JoinColumn(name = "APP_USER_ID")
	}, inverseJoinColumns = {
			@JoinColumn(name = "ROLE_ID")
	})
	private Set<Role> role;

	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "APP_USER_PAYMENT", joinColumns = {
			@JoinColumn(name = "APP_USER_ID")
	}, inverseJoinColumns = {
			@JoinColumn(name = "PAYMENT_ID")
	})
	private List<Payment> payments;
}
