package org.generation.happytingkat.service;

import org.generation.happytingkat.repository.OrdersRepository;
import org.generation.happytingkat.repository.entity.Orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service // Declared Service class
public class OrdersServiceMySQL implements OrdersService{

    private final OrdersRepository ordersRepository;

    @Autowired
    public OrdersServiceMySQL(OrdersRepository ordersRepository){
        this.ordersRepository = ordersRepository;
    }

    // Save a new order
    @Override
    public Orders save(Orders orders){
        return ordersRepository.save(orders);
    }

    // Display all orders
    @Override
    public List<Orders> all() {
        List<Orders> result = new ArrayList<>();
        ordersRepository.findAll().forEach(result::add);
        return result;
    }

    // Delete order by id

    @Override
    public void delete(int idorder){
        ordersRepository.deleteById(idorder);
    }

    @Override
    public Orders findById(int idorder){
        Optional<Orders> orders = ordersRepository.findById(idorder);
        Orders ordersResponse = orders.get();
        return ordersResponse;
    }



}
