package org.generation.happytingkat.service;

import org.generation.happytingkat.repository.entity.Customers;

import java.util.List;

public interface CustomersService {

    List<Customers> all();

    void delete (int customerId);

    Customers findById (int itemId);

}
