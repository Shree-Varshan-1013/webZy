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
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import io.swagger.v3.oas.annotations.media.Schema;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class AppUser {

	@Id
	@Schema(description = "The unique username of the user")
	private String userName;

	@Schema(description = "The email address of the user")
	private String email;

	@Schema(description = "The password of the user")
	private String userPassword;

	@Schema(description = "The mobile number of the user")
	private Long mobileNumber;

	@Schema(description = "The location of the user")
	private String location;

	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "APP_USER_ROLE", joinColumns = {
			@JoinColumn(name = "APP_USER_ID")
	}, inverseJoinColumns = {
			@JoinColumn(name = "ROLE_NAME")
	})
	@Schema(description = "The roles assigned to the user")
	private Set<Role> role;

	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "APP_USER_PAYMENT", joinColumns = {
			@JoinColumn(name = "APP_USER_ID")
	}, inverseJoinColumns = {
			@JoinColumn(name = "PAYMENT_ID", nullable = true) // Set nullable to true
	})
	@Schema(description = "The payments made by the user (optional)", required = false)
	private List<Payment> payments;
}
