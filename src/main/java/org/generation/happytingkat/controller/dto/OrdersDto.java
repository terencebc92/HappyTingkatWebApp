package org.generation.happytingkat.controller.dto;

public class OrdersDto {

    private String deliveryStart;
    private String order_time;
    private Boolean isLunch;
    private Boolean isDinner;
    private Integer numPax;
    private Integer numDishes;
    private Integer whiteRice;
    private Integer brownRice;
    private Integer mealPackage;
    private String customerName;
    private String email;
    private Integer mobile;
    private Double price;

    public OrdersDto(String deliveryStart, String order_time, Boolean isLunch,
                     Boolean isDinner, Integer numPax, Integer numDishes,
                     Integer whiteRice, Integer brownRice, Integer mealPackage,
                     String customerName, String email, Integer mobile, Double price) {
        this.deliveryStart = deliveryStart;
        this.order_time = order_time;
        this.isLunch = isLunch;
        this.isDinner = isDinner;
        this.numPax = numPax;
        this.numDishes = numDishes;
        this.whiteRice = whiteRice;
        this.brownRice = brownRice;
        this.mealPackage = mealPackage;
        this.customerName = customerName;
        this.email = email;
        this.mobile = mobile;
        this.price = price;
    }

    public String getDeliveryStart() {
        return deliveryStart;
    }

    public void setDeliveryStart(String deliveryStart) {
        this.deliveryStart = deliveryStart;
    }

    public String getOrder_time() {
        return order_time;
    }

    public void setOrder_time(String order_time) {
        this.order_time = order_time;
    }

    public Boolean getLunch() {
        return isLunch;
    }

    public void setLunch(Boolean lunch) {
        isLunch = lunch;
    }

    public Boolean getDinner() {
        return isDinner;
    }

    public void setDinner(Boolean dinner) {
        isDinner = dinner;
    }

    public Integer getNumPax() {
        return numPax;
    }

    public void setNumPax(Integer numPax) {
        this.numPax = numPax;
    }

    public Integer getNumDishes() {
        return numDishes;
    }

    public void setNumDishes(Integer numDishes) {
        this.numDishes = numDishes;
    }

    public Integer getWhiteRice() {
        return whiteRice;
    }

    public void setWhiteRice(Integer whiteRice) {
        this.whiteRice = whiteRice;
    }

    public Integer getBrownRice() {
        return brownRice;
    }

    public void setBrownRice(Integer brownRice) {
        this.brownRice = brownRice;
    }

    public Integer getMealPackage() {
        return mealPackage;
    }

    public void setMealPackage(Integer mealPackage) {
        this.mealPackage = mealPackage;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getMobile() {
        return mobile;
    }

    public void setMobile(Integer mobile) {
        this.mobile = mobile;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
