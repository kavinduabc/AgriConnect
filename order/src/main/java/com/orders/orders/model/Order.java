package com.orders.orders.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "`order`")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {

    @Id
    private int orderId;
    private String orderDetails;
    private String customerName;
    private String customerEmail;
    private Date orderDate;
    private double totalPrice;
}
