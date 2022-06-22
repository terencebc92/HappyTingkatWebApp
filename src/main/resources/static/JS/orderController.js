class OrdersController {

    constructor() {
        // API route for POST request

        this._orders = [];

        this.domainURL_Dev = "http://localhost:8090/";
        this.domainURL_Prod = "https://happytingkat.herokuapp.com/";

        // Change this to _Prod/_Dev depending on what you're using
//        this.addOrderAPI = this.domainURL_Dev + "orders/add"
//        this.allOrderAPI = this.domainURL_Dev + "orders/all"
//        this.deleteOrderAPI = this.domainURL_Dev + "orders/"
        this.addOrderAPI = this.domainURL_Prod + "orders/add"
        this.allOrderAPI = this.domainURL_Prod + "orders/all"
        this.deleteOrderAPI = this.domainURL_Prod + "orders/"

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
        console.log("Running displayOrder method")
        console.log(this.allOrderAPI);
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

                  // Render page
                  ordersController.renderAdminPage();

                  // Add event listener to each of the delete icons
                  const deleteIcons = document.querySelectorAll("i");
                  deleteIcons.forEach(icon => {
                    icon.addEventListener("click", deleteRow);
                  });

            }) // End of then
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

            order.order_time = order.order_time.substring(0,16).replace(" ", "<br>")
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
            <td><i class="bi bi-trash-fill" id=${order.idorder}></i></td>
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
              <td class="text-center"><i class="bi bi-trash-fill" id=${order.idorder}></i></td>
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
                        <th class="px-4">Delivery Start Date:</th>
                        <td class="px-4">${order.deliveryStart}</td>
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

    } // end of renderAdminPage()

    deleteOrder(id){
        fetch(this.deleteOrderAPI + id, {
        method: 'DELETE'
        })
        .then(function(response) {
            console.log(response.status); // Will show you the status
            if (response.ok) {
                alert("Successfully deleted order id " + id + "!")
                window.location.reload();
            }
            else {
                throw Error(response.statusText);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Error deleting order from order list")
        });
    } // end of deleteOrder(id)
} // End of OrdersController Class


function deleteRow(event){
    let id = event.target.getAttribute("id");
    ordersController.deleteOrder(id);
};


function filterFunction() {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue, mobileTable, trMobile;
    input = document.getElementById("searchFilter");
    filter = input.value.toUpperCase();

    // for desktop
    table = document.querySelector(".table");
    tr = table.getElementsByTagName("tr");

    // for mobile
    mobileTable = document.querySelector(".mobile>.table-responsive>.table");
    trMobile = mobileTable.querySelectorAll("tr.table__row__mobile");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        //[8] refers to the "name" column
      td = tr[i].getElementsByTagName("td")[8];
      if (td) {
        txtValue = td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    } // end for loop

    // Loop for mobile rows
    for (i = 0; i < trMobile.length; i++) {
        //[2] refers to the "name" column in mobile table
      td = trMobile[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            trMobile[i].style.display = "";
        } else {
            trMobile[i].style.display = "none";
        }
      }
    } // end for loop

  } // end filterFunction()


  function dateFilter() {
    // Declare variables
    let input, filter, table, tr, td, i, dateValue, mobileTable, trMobile;
    input = document.getElementById("dateFilter");
    filter = input.value;

    // for desktop:
    table = document.querySelector(".table");
    tr = table.getElementsByTagName("tr");

    // for mobile:
    mobileTable = document.querySelector(".mobile>.table-responsive>.table");
    trMobile = mobileTable.querySelectorAll("tr.table__row__mobile");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        //[1] refers to the "DATE" column
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        dateValue = td.innerText;
        if (dateValue.indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    } // end for loop

    // Loop for mobile rows:
    for (i = 0; i < trMobile.length; i++) {
        //[1] refers to the "DATE" column
        td = trMobile[i].getElementsByTagName("td")[1];
        if (td) {
            dateValue = td.innerText;
            if (dateValue.indexOf(filter) > -1) {
                trMobile[i].style.display = "";
            } else {
                trMobile[i].style.display = "none";
            }
        }
    } // end for loop
    
  } // end dateFilter()