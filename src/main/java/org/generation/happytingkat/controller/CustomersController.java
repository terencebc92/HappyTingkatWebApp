package org.generation.happytingkat.controller;

import org.generation.happytingkat.repository.entity.Customers;
import org.generation.happytingkat.repository.entity.Package;
import org.generation.happytingkat.service.CustomersService;
import org.generation.happytingkat.service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Customers")
public class CustomersController {

    final CustomersService customersService;
    public CustomersController(@Autowired CustomersService customersService)
    {
        this.customersService = customersService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Customers> getCustomers()
    {
        return customersService.all();
    }

    @CrossOrigin
    @GetMapping("{id}")
    public Customers findCustomersById(@PathVariable Integer id)
    {
        return customersService.findById(id);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public void delete (@PathVariable Integer id)
    {
        customersService.delete(id);
    }

}
