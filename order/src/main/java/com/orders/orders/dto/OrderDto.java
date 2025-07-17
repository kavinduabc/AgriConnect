package com.orders.orders.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {

    private int orderId;
    private String orderDetails;
    private String customerName;
    private String customerEmail;
    private Date orderDate;
    private double totalPrice;

}
