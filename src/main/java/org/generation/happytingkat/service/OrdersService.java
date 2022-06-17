package org.generation.happytingkat.service;

import org.generation.happytingkat.repository.entity.Orders;

import java.util.List;

public interface OrdersService {

    List<Orders> all();

    Orders save(Orders orders);

    void delete(int idorder);

    Orders findById(int idorder);

}
