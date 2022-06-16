package org.generation.happytingkat.service;

import org.generation.happytingkat.repository.CustomersRepository;
import org.generation.happytingkat.repository.entity.Customers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomersServiceMySQL implements CustomersService {

    private final CustomersRepository customersRepository;

    public CustomersServiceMySQL(@Autowired CustomersRepository customersRepository)
    {
        this.customersRepository = customersRepository;
    }


    @Override
    public List<Customers> all() {
    //create ArrayList to hold whatever is returned back and add it to the results arraylist
    //make use of the itemRepository and call the method findAll(iterate through the records)
        List<Customers> result = new ArrayList<>();
        customersRepository.findAll().forEach(result :: add);
        return result;
    }

    @Override
    public void delete(int customerId) {
        customersRepository.deleteById(customerId);
    }

    @Override
    public Customers findById(int customerId) {
        Optional<Customers> customers = customersRepository.findById(customerId);   //Cannot be a null
        Customers customerResponse = customers.get();
        return customerResponse;
    }
}
