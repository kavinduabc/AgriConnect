package com.inventory.inventory.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "inventory")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Inventory {
    @Id
    private int inquiryId;
    private String inquiryDetails;
    private String customerName;
    private String customerEmail;
    private LocalDate inquiryDate;
    private String status;
}
