package org.generation.happytingkat.controller;

public class OrdersController {

    final OrdersService ordersService;

    @Autowired
    public OrdersController(OrdersService ordersService) {
        this.ordersService = ordersService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Orders> getOrders() {
        return ordersService.all();
    }

    @CrossOrigin
    @PostMapping("/add")
    public void save ( @RequestParam(name="deliveryStart", required = true) String deliveryStart,
                       @RequestParam(name="order_time", required = false) String order_time,
                       @RequestParam(name="isLunch", required = true) Boolean isLunch,
                       @RequestParam(name="isDinner", required = true) Boolean isDinner,
                       @RequestParam(name="numPax", required = true) Integer numPax,
                       @RequestParam(name="numDishes", required = true) Integer numDishes,
                       @RequestParam(name="whiteRice", required = true) Integer whiteRice,
                       @RequestParam(name="brownRice", required = true) Integer brownRice,
                       @RequestParam(name="mealPackage", required = true) Integer mealPackage,
                       @RequestParam(name="customerName", required = true) String customerName,
                       @RequestParam(name="email", required = true) String email,
                       @RequestParam(name="mobile", required = true) Integer mobile,
                       @RequestParam(name="price", required = true) Double price
                       ) throws IOException {

            OrdersDto orderDto = new OrdersDto(
                    deliveryStart,
                    order_time,
                    isLunch,
                    isDinner,
                    numPax,
                    numDishes,
                    whiteRice,
                    brownRice,
                    mealPackage,
                    customerName,
                    email,
                    mobile,
                    price);

            ordersService.save(new Orders(orderDto));

    }




}
