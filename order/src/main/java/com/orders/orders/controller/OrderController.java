package com.orders.orders.controller;

import com.orders.orders.dto.OrderDto;
import com.orders.orders.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/getorders")
    public List<OrderDto> getOrders() {
        return orderService.getAllOrders();
    }

    @PostMapping("/addorder")
    public OrderDto addOrder(@RequestBody OrderDto orderDto) {
        return orderService.addOrder(orderDto);
    }

    @PutMapping("/updateorder")
    public OrderDto updateOrder(@RequestBody OrderDto orderDto) {
        return orderService.updateOrder(orderDto);
    }

    @DeleteMapping("/deleteorder/{id}")
    public String deleteOrder(@PathVariable int id) {
        return orderService.deleteOrder(id);
    }
}
