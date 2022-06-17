package org.generation.happytingkat.repository;

import org.generation.happytingkat.repository.entity.Orders;
import org.springframework.data.repository.CrudRepository;

public interface OrdersRepository extends CrudRepository<Orders, Integer> {

}
