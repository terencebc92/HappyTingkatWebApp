package org.generation.happytingkat.repository.entity;

import org.generation.happytingkat.controller.dto.OrdersDto;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // Declared Entity class
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idorder;

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


    public Orders() {}

    public Orders(OrdersDto ordersDto) {
        this.deliveryStart = ordersDto.getDeliveryStart();
        this.order_time = ordersDto.getOrder_time();
        this.isLunch = ordersDto.getLunch();
        this.isDinner = ordersDto.getDinner();
        this.numPax = ordersDto.getNumPax();
        this.numDishes = ordersDto.getNumDishes();
        this.whiteRice = ordersDto.getWhiteRice();
        this.brownRice = ordersDto.getBrownRice();
        this.mealPackage = ordersDto.getMealPackage();
        this.customerName = ordersDto.getCustomerName();
        this.email = ordersDto.getEmail();
        this.mobile = ordersDto.getMobile();
        this.price = ordersDto.getPrice();
      }

    public Integer getIdorder() {
        return idorder;
    }

    public void setIdorder(Integer idorder) {
        this.idorder = idorder;
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

    @Override
    public String toString() {
        return "Orders{" +
                "idorder=" + idorder +
                ", deliveryStart='" + deliveryStart + '\'' +
                ", order_time='" + order_time + '\'' +
                ", isLunch=" + isLunch +
                ", isDinner=" + isDinner +
                ", numPax=" + numPax +
                ", numDishes=" + numDishes +
                ", whiteRice=" + whiteRice +
                ", brownRice=" + brownRice +
                ", mealPackage=" + mealPackage +
                ", customerName='" + customerName + '\'' +
                ", email='" + email + '\'' +
                ", mobile=" + mobile +
                ", price=" + price +
                '}';
    }
}
