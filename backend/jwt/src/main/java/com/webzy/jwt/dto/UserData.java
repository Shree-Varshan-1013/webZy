package com.webzy.jwt.dto;

import java.util.Set;

import com.webzy.jwt.entity.Role;

import lombok.Data;

@Data
public class UserData {

    private String username;

    private String email;

    private Long mobileNumber;

    private String location;

    private String operatorName;

    private Set<Role> role;

}
