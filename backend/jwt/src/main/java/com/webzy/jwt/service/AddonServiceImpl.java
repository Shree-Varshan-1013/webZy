package com.webzy.jwt.service;

import org.springframework.stereotype.Service;

import com.webzy.jwt.dao.AddonRepo;
import com.webzy.jwt.entity.Addon;

import lombok.RequiredArgsConstructor;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AddonServiceImpl implements AddonService {
    
    private final AddonRepo addonRepository;

    @Override
    public List<Addon> getAllAddons() {
        return addonRepository.findAll();
    }
    
    @Override
    public Addon getAddonById(Long id) {
        return addonRepository.findById(id).orElse(null);
    }
    
    @Override
    public Addon createAddon(Addon addon) {
        return addonRepository.save(addon);
    }
    
    @Override
    public Addon updateAddon(Long id, Addon addon) {
        addon.setAddonId(id);
        return addonRepository.save(addon);
    }
    
    @Override
    public void deleteAddon(Long id) {
        addonRepository.deleteById(id);
    }

}

