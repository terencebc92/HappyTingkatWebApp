class OrdersController {

    constructor() {
        // API route for POST request
        this.addOrderAPI = "http://localhost:8080/orders/add";
        this.allOrderAPI = "http://localhost:8080/orders/all";
        this._orders = [];
    }

    // 1) Add order method
    addOrder(
        mealPackage,
        isLunch,
        isDinner,
        deliveryStart,
        numPax,
        numDishes,
        whiteRice,
        brownRice,
        customerName,
        email,
        mobile,
        price,
        order_time
    ) {
        // Pass in the arguments into a formData object
        const formData = new FormData();
        formData.append('mealPackage', mealPackage);
        formData.append('isLunch', isLunch);
        formData.append('isDinner', isDinner);
        formData.append('deliveryStart', deliveryStart);
        formData.append('numPax', numPax);
        formData.append('numDishes', numDishes);
        formData.append('whiteRice', whiteRice);
        formData.append('brownRice', brownRice);
        formData.append('customerName', customerName);
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('price', price);
        formData.append('order_time', order_time);


        // Post formData to the database
        fetch(this.addOrderAPI, {
            method: 'POST',
            body: formData
        })
        .then(function(response) {
             console.log(response.status); // Will show you the status
             if (response.ok) {
                 alert("Thank you for your order " + customerName + ".\n" +
                 "Your order will arrive on " + deliveryStart + ".\n" +
                 "\nWe hope you enjoy your HappyTingkat!")
             }
             else {
                throw Error(response.statusText);
             }
         })
         .catch((error) => {
             console.error('Error:', error);
             alert("Unable to add order. Please try again!")
         });

    } // End of addOrder method


    displayOrder(){
        // assign  controller
        let ordersController = this;
        let lunchOrDinnerText = "";
        // clear this orders array
        ordersController._orders = [];

        // Fetch orders via the API
        fetch(this.allOrderAPI)
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data")
                console.log(data);
                    //data.forEach(function (item, index) { // Create itemObject for each, and push each item to the list
                data.forEach(function (order) { // Create orderObj for each, and push each order to the list
                        if (order.lunch == true && order.dinner == true) {
                            lunchOrDinnerText = "Both";
                        } else if (order.lunch == true) {
                            lunchOrDinnerText = "Lunch";
                        } else {
                            lunchOrDinnerText = "Dinner";
                        }

                        const orderObj = {
                            idorder: order.idorder, // then we are not using this
                            deliveryStart: order.deliveryStart,
                            order_time: order.order_time,
                            numPax: order.numPax,
                            numDishes: order.numDishes,
                            whiteRice: order.whiteRice,
                            brownRice: order.brownRice,
                            mealPackage: order.mealPackage,
                            customerName: order.customerName,
                            email: order.email,
                            mobile: order.mobile,
                            price: order.price.toFixed(2),
                            lunchOrDinner: lunchOrDinnerText,
                       }; // end of object
                        ordersController._orders.push(orderObj);
                  }); // end of forEach
                  ordersController.renderAdminPage();
            }) // end of then
            .catch(function(error) {
                console.log(error);
            });

    } // end of displayOrder()

    renderAdminPage(){

        // Create HTML text which will be populated
        let showOrderRowsDesktop = "";
        let showOrderRowsMobile = "";

        // loop through orders, get order object and index, take each attribute and place inside
        // populate the showOrderRowsDesktop and showOrderRowsMobile HTL
        this._orders.forEach ((order, index) => {
            // Desktop HTML
            showOrderRowsDesktop +=
          `
          <tr>
            <th scope="row">${order.idorder}</th>
            <td>${order.order_time}</td>
            <td>${order.mealPackage}</td>
            <td>${order.lunchOrDinner}</td>
            <td>${order.deliveryStart}</td>
            <td>${order.numPax}</td>
            <td>${order.numDishes}</td>
            <td>${order.whiteRice}</td>
            <td>${order.brownRice}</td>
            <td>${order.customerName}</td>
            <td>${order.email}</td>
            <td>${order.mobile}</td>
            <td>${order.price}</td>
            <td><i class="bi bi-trash-fill"></i></td>
          </tr>
          `;

          // Mobile HTML
            showOrderRowsMobile +=
            `
            <tr
              data-bs-toggle="collapse"
              data-bs-target="#collapse-row-${index}"
              class="table__row__mobile"
            >
              <td>${order.idorder}</td>
              <td>${order.order_time}</td>
              <td>${order.customerName}</td>
              <td>${order.price}</td>
              <td class="text-center"><i class="bi bi-trash-fill"></i></td>
            </tr>
            <tr>
                <!-- This is the collapsible content -->
                <td colspan="12" class="hiddenRow">
                <div
                    class="collapse"
                    id="collapse-row-${index}"
                    data-bs-parent="#collapseRowsAll"
                >
                    <h4 class="p-3">Order information</h4>
                    <table class="table w-100 collapsed__table__mobile">
                    <tbody>
                        <tr>
                        <th class="px-4">Meal Package (days):</th>
                        <td class="px-4">${order.mealPackage}</td>
                        </tr>
                        <tr>
                        <th class="px-4">Lunch/Dinner:</th>
                        <td class="px-4">${order.lunchOrDinner}</td>
                        </tr>
                        <tr>
                        <th class="px-4">Pax:</th>
                        <td class="px-4">${order.numPax}</td>
                        </tr>
                        <tr>
                        <th class="px-4">Meal options (dishes):</th>
                        <td class="px-4">${order.numDishes}</td>
                        </tr>
                        <tr>
                        <th class="px-4">Add-on White rice:</th>
                        <td class="px-4">${order.whiteRice}</td>
                        </tr>
                        <tr>
                        <th class="px-4">Add-on Brown rice:</th>
                        <td class="px-4">${order.brownRice}</td>
                        </tr>
                    </tbody>
                    </table>
                    <h4 class="p-3">Contact information</h4>
                    <table class="table table-sm w-100">
                    <tbody>
                        <tr>
                        <th class="px-4">Email:</th>
                        <td class="px-4">${order.email}</td>
                        </tr>
                        <tr>
                        <th class="px-4">Mobile:</th>
                        <td class="px-4">${order.mobile}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </td>
            </tr>

            `
        });

        document.querySelector("div.desktop tbody").innerHTML = showOrderRowsDesktop;
        document.querySelector("div.mobile tbody").innerHTML = showOrderRowsMobile;

    }

} // End of OrdersController Class

