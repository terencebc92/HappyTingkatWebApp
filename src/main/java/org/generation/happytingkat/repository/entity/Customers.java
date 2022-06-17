package org.generation.happytingkat.repository.entity;

import org.generation.happytingkat.controller.dto.CustomersDto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Customers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String phone_number;

    private String email_address;

    private String delivery_address;

    public Customers() {

    }

    public Customers(CustomersDto customersDto)
    {
        this.name = customersDto.getName();
        this.phone_number = customersDto.getPhone_number();
        this.email_address = customersDto.getEmail_address();
        this.delivery_address = customersDto.getDelivery_address();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getEmail_address() {
        return email_address;
    }

    public void setEmail_address(String email_address) {
        this.email_address = email_address;
    }

    public String getDelivery_address() {
        return delivery_address;
    }

    public void setDelivery_address(String delivery_address) {
        this.delivery_address = delivery_address;
    }

    @Override
    public String toString() {
        return "Customers{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", phone_number='" + phone_number + '\'' +
                ", email_address='" + email_address + '\'' +
                ", delivery_address='" + delivery_address + '\'' +
                '}';
    }
}
