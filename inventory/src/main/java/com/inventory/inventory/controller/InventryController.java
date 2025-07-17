package com.inventory.inventory.controller;

import com.inventory.inventory.dto.InventoryDto;
import com.inventory.inventory.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1")
public class InventryController {

    @Autowired
    private InventoryService inventoryService;

    @GetMapping("/getinvs")
    public List<InventoryDto> getInventorys() {
        return inventoryService.getAllInventory();
    }

    @PostMapping("/addinv")
    public InventoryDto addInventory(@RequestBody InventoryDto inventoryDto) {
        return inventoryService.addInventory(inventoryDto);
    }

    @PutMapping("/updateinv")
    public InventoryDto updateInventory(@RequestBody InventoryDto inventoryDto) {
        return inventoryService.updateInventory(inventoryDto);
    }

    @DeleteMapping("/deleteinv/{id}")
    public String deleteInventory(@PathVariable int id) {
        return inventoryService.deleteInventory(id);
    }

}
