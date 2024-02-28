package com.webzy.jwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.webzy.jwt.entity.Addon;
import com.webzy.jwt.service.AddonServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import java.util.List;

@RestController
@RequestMapping("/addons")
public class AddonController {

    @Autowired
    private AddonServiceImpl addonService;

    @Operation(summary = "Get all addons", description = "Retrieve a list of all addons.")
    @GetMapping("/")
    public List<Addon> getAllAddons() {
        return addonService.getAllAddons();
    }

    @Operation(summary = "Get addon by ID", description = "Retrieve an addon by its ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Addon found"),
            @ApiResponse(responseCode = "404", description = "Addon not found")
    })
    @GetMapping("/{id}")
    public Addon getAddonById(@Parameter(description = "Addon ID") @PathVariable Long id) {
        return addonService.getAddonById(id);
    }

    @Operation(summary = "Get addons by operator", description = "Retrieve addons by operator name.")
    @GetMapping("/getAddOns/{operatorName}")
    public List<Addon> getAddonByOperator(@Parameter(description = "Operator Name") @PathVariable String operatorName) {
        return addonService.getAddOnByOperatorName(operatorName);
    }

    @Operation(summary = "Create a new addon", description = "Create a new addon.")
    @PostMapping("/")
    public Addon createAddon(@RequestBody Addon addon) {
        return addonService.createAddon(addon);
    }

    @Operation(summary = "Update an addon", description = "Update an existing addon by ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Addon updated"),
            @ApiResponse(responseCode = "404", description = "Addon not found")
    })
    @PutMapping("/{id}")
    public Addon updateAddon(@Parameter(description = "Addon ID") @PathVariable Long id, @RequestBody Addon addon) {
        return addonService.updateAddon(id, addon);
    }

    @Operation(summary = "Delete an addon", description = "Delete an addon by ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Addon deleted"),
            @ApiResponse(responseCode = "404", description = "Addon not found")
    })
    @DeleteMapping("/{id}")
    public void deleteAddon(@Parameter(description = "Addon ID") @PathVariable Long id) {
        addonService.deleteAddon(id);
    }
}
