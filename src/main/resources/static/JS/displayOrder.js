// Creating an instance of Orders Controller:
const ordersInstance = new OrdersController();

// Use.add.Order method to add orders (hardcoded)
// Will need to update when we use API to get orders from backend

ordersInstance.addOrder("1", "04-01-22", "10", "Lunch", "01-02-22", "1", "3", "1", "3", "Alex", "alex@gmail.com", "91234932", "100");
ordersInstance.addOrder("2", "04-01-22", "10", "Dinner", "30-01-22", "2", "4", "2", "4", "Dennis", "dennis@gmail.com", "91234232", "150");
ordersInstance.addOrder("3", "04-01-22", "20", "Both", "29-01-22", "2", "3", "1", "1", "Ben", "ben@gmail.com", "91534932", "200");
ordersInstance.addOrder("4", "04-01-22", "10", "Lunch", "01-02-22", "1", "4", "1", "0", "Tom", "tom@gmail.com", "91294932", "150");
ordersInstance.addOrder("5", "04-01-22", "10", "Lunch", "01-02-22", "1", "3", "1", "3", "Alex", "alex@gmail.com", "91234932", "100");
ordersInstance.addOrder("6", "04-01-22", "10", "Dinner", "30-01-22", "2", "4", "2", "4", "Dennis", "dennis@gmail.com", "91234232", "150");
ordersInstance.addOrder("7", "04-01-22", "20", "Both", "29-01-22", "2", "3", "1", "1", "Ben", "ben@gmail.com", "91534932", "200");
ordersInstance.addOrder("8", "04-01-22", "10", "Lunch", "01-02-22", "1", "4", "1", "0", "Tom", "tom@gmail.com", "91294932", "150");
// Displaying all added products on HTML:
ordersInstance.displayOrder();