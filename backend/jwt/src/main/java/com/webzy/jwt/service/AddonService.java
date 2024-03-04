package com.webzy.jwt.service;

import java.util.List;

import com.webzy.jwt.entity.Addon;

public interface AddonService {

    List<Addon> getAllAddons();

    Addon getAddonById(Long id);

    boolean createAddon(Addon addon);

    Addon updateAddon(Long id, Addon addon);

    boolean deleteAddon(Long id);

    List<Addon> getAddOnByOperatorName(String operatorName);

    Addon patchUpdateAddon(Long id, Addon updatedAddon);

}
