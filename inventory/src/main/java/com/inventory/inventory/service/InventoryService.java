package com.inventory.inventory.service;

import com.inventory.inventory.dto.InventoryDto;
import com.inventory.inventory.model.Inventory;
import com.inventory.inventory.repo.InventoryRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.jaxb.SpringDataJaxb;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {
    @Autowired
    private InventoryRepo inventoryRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<InventoryDto> getAllInventory() {
        List<Inventory> inventoryList = inventoryRepo.findAll();
        return modelMapper.map(inventoryList, new TypeToken<List<InventoryDto>>() {}.getType());
    }

    public InventoryDto addInventory(InventoryDto inventoryDto){
        inventoryRepo.save(modelMapper.map(inventoryDto, Inventory.class));
        return inventoryDto;
    }

    public InventoryDto updateInventory(InventoryDto productDto) {

        inventoryRepo.save(modelMapper.map(productDto, Inventory.class));
        return productDto;
    }


    public String deleteInventory(int id) {
        inventoryRepo.deleteById(id);
        return "Product with ID " + id + " is deleted";
    }
}
