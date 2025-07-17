package com.inventory.inventory.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InventoryDto {

    private int inquiryId;
    private String inquiryDetails;
    private String customerName;
    private String customerEmail;
    private LocalDate inquiryDate;
    private String status;
}
