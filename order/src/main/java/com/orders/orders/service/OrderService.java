package com.orders.orders.service;

import com.orders.orders.dto.OrderDto;
import com.orders.orders.model.Order;
import com.orders.orders.repo.OrderRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class OrderService {

    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<OrderDto> getAllOrders() {
        List<Order> orderList = orderRepo.findAll();
        return modelMapper.map(orderList, new TypeToken<List<OrderDto>>() {}.getType());
    }

    public OrderDto addOrder(OrderDto orderDto) {
        Order savedOrder = orderRepo.save(modelMapper.map(orderDto, Order.class));
        return modelMapper.map(savedOrder, OrderDto.class);
    }

    public OrderDto updateOrder(OrderDto orderDto) {
        Order updatedOrder = orderRepo.save(modelMapper.map(orderDto, Order.class));
        return modelMapper.map(updatedOrder, OrderDto.class);
    }

    public String deleteOrder(int id) {
        orderRepo.deleteById(id);
        return "Order with id " + id + " is deleted";
    }
}
