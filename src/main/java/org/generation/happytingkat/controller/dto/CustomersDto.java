package org.generation.happytingkat.controller.dto;

public class CustomersDto {

    private Integer id;

    private String name;

    private String phone_number;

    private String email_address;

    private String delivery_address;

    public CustomersDto(Integer id, String name, String phone_number, String email_address, String delivery_address) {
        this.id = id;
        this.name = name;
        this.phone_number = phone_number;
        this.email_address = email_address;
        this.delivery_address = delivery_address;
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
}
