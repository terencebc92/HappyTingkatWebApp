package org.generation.happytingkat.repository.entity;

import org.generation.happytingkat.controller.dto.PackageDto;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Package {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private double price;
    private String type;
    private String imageUrl;
    private String cuisine;
    private String description;

    //default constructor only exists for the sake of JPA; we do not use it directly
    public Package() {}

    //This constructor is the one you use to create instances of Item to be saved to the database
    public Package(PackageDto packageDto) {
        this.name = packageDto.getName();
        this.price = packageDto.getPrice();
        this.type = packageDto.getType();
        this.imageUrl = packageDto.getImageUrl();
        this.cuisine = packageDto.getCuisine();
        this.description = packageDto.getDescription();
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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Package{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", type='" + type + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", cuisine='" + cuisine + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
