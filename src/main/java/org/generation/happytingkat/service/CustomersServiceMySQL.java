package org.generation.happytingkat.service;

import org.generation.happytingkat.repository.entity.Customers;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomersServiceMySQL implements CustomersService {

    public CustomersServiceMySQL() {}

    @Override
    public List<Customers> all() {
        return null;
    }

    @Override
    public void delete(int customerId) {

    }

    @Override
    public Customers findById(int itemId) {
        return null;
    }
}
