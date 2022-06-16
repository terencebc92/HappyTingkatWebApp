package org.generation.happytingkat.repository;

import org.generation.happytingkat.repository.entity.Customers;
import org.generation.happytingkat.repository.entity.Package;
import org.springframework.data.repository.CrudRepository;

public interface CustomersRepository extends CrudRepository<Customers, Integer> {


}