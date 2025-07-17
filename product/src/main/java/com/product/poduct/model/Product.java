package com.product.poduct.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity //create a table in database
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Product {
    @Id
    private int productId;
    private String productName;
    private int productPrice;
}
