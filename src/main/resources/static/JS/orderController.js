// Defining Class Object for Orders:

class OrdersController { 

    constructor() {
        this.allOrders = [];
    }

    // Order Methods
    // 1) Add order - hardcoded now, will use API next
    addOrder(orderNo, orderDate, mealPackage, lunchOrDinner, deliveryStart, numPax, numDishes, whiteRice, brownRice, name, email, mobile, price) {

        const order = {
            orderNo,
            orderDate,
            mealPackage,
            lunchOrDinner,
            deliveryStart,
            numPax,
            numDishes,
            whiteRice,
            brownRice,
            name,
            email,
            mobile,
            price
        }
        this.allOrders.push(order);
    }

    // 2) Display order - to change the HTML elements
    displayOrder() {

        let showOrderRowsDesktop = "";
        let showOrderRowsMobile = "";

        this.allOrders.forEach ((order, index) => {
            // Desktop HTML
            showOrderRowsDesktop += 
          `
          <tr>
            <th scope="row">${order.orderNo}</th>
            <td>${order.orderDate}</td>
            <td>${order.mealPackage}</td>
            <td>${order.lunchOrDinner}</td>
            <td>${order.deliveryStart}</td>
            <td>${order.numPax}</td>
            <td>${order.numDishes}</td>
            <td>${order.whiteRice}</td>
            <td>${order.brownRice}</td>
            <td>${order.name}</td>
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
              <td>${order.orderNo}</td>
              <td>${order.orderDate}</td>
              <td>${order.name}</td>
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


    } // End of displayOrder method

} // End of OrdersController Class

