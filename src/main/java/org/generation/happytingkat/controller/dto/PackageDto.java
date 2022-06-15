package org.generation.happytingkat.controller.dto;

public class PackageDto {

    private Integer id;
    private String name;
    private double price;
    private String type;
    private String imageUrl;
    private String cuisine;
    private String description;

    public PackageDto(Integer id, String name, double price, String type, String imageUrl, String cuisine, String description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = type;
        this.imageUrl = imageUrl;
        this.cuisine = cuisine;
        this.description = description;
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
}
