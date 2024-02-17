package com.webzy.jwt.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.webzy.jwt.dao.AppUserRepo;
import com.webzy.jwt.dao.RoleRepo;
import com.webzy.jwt.entity.AppUser;
import com.webzy.jwt.entity.Role;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

    private final AppUserRepo appUserRepo;

    private final RoleRepo roleRepo;

    private final PasswordEncoder passwordEncoder;

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }

    @Override
    public List<AppUser> getAllUsers() {
        return appUserRepo.findAll();
    }

    @Override
    public AppUser registerNewAdmin(AppUser user) {
        Role role = roleRepo.findById("ADMIN").get();
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        user.setRole(roles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));
        return appUserRepo.save(user);
    }

    @Override
    public List<AppUser> searchUsers(String searchTerm) {
        System.out.println("inside search=======");
        if (searchTerm != null && !searchTerm.isEmpty()) {
            System.out.println("inside -if search=======");
            AppUser emailUsers = appUserRepo.findByEmail(searchTerm);
            AppUser usernames = appUserRepo.findByUserName(searchTerm);
            System.out.println(usernames + "=======");
            // Set<Role> roles = new HashSet<>();
            // Role myRole = new Role();
            // myRole.setRoleName(searchTerm.toUpperCase());
            // roles.add(myRole);
            List<AppUser> roleUsers = appUserRepo.findByRole(searchTerm);

            if (!Objects.isNull(emailUsers)) {
                List<AppUser> r = new ArrayList<>();
                r.add(emailUsers);
                return r;
            }
            else if(!Objects.isNull(usernames)) {
                List<AppUser> r = new ArrayList<>();
                r.add(usernames);
                return r;
            }
            else if(!roleUsers.isEmpty()){
                return roleUsers;
            }
        }
        return appUserRepo.findAll();
    }
}
