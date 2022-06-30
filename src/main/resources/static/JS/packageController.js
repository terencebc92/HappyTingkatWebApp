// Defining Class Object for Products:

class PackagesController {
    constructor() {

        this.domainURL_Dev = "http://localhost:8090/";
        this.domainURL_Prod = "https://happytingkat.herokuapp.com/";

        // Change this to _Prod/_Dev depending on what you're using
//        this.allPackageAPI = this.domainURL_Dev + "package/all"
        this.allPackageAPI = this.domainURL_Prod + "package/all"

        this.allPackageItems = [];
    }

    displayPackage()
        {
            let packageController = this;
            packageController._package = [];

            //fetch data from database using the REST API endpoint from Spring Boot
            fetch(this.allPackageAPI)
                .then((resp) => resp.json())
                .then(function(data) {
                    console.log("2. receive data")
                    console.log(data);
                    data.forEach(function (apackage) {
                        const packageObj = {
                            id: apackage.id,
                            name: apackage.name,
                            price: apackage.price,
                            type: apackage.type,
                            imageUrl: apackage.imageUrl,
                            cuisine: apackage.cuisine,
                            description: apackage.description,
                       };
                        packageController.allPackageItems.push(packageObj);
                  }); //end of forEach

                  packageController.renderPackagePage();

                  $(".owl-carousel").owlCarousel({
                            loop: true,
                            animateIn: 'flipInY',
                            animateOut: 'zoomOutDown',
                            responsiveRefreshRate: 100,
                            responsiveClass: true,
                            responsive: {
                                0: {
                                    items: 1,
                                    dots: false,
                                    nav: true,
                                    animateIn: 'flipInY',
                                    animateOut: 'zoomOutDown'
                                },
                                768: {
                                    items: 1,
                                    dots: true,
                                    nav: true,
                                    animateIn: 'flipInY',
                                    animateOut: 'zoomOutDown',
                                },
                                1025: {
                                    items: 3,
                                    dots: true,
                                    nav: true,
                                    slideBy: 3
                                }
                            }
                        });


                })
                .catch(function(error) {
                    console.log(error);
                });
        }

    renderPackagePage() {
        console.log("This is the start of render package page.")
        let showPackageChinese = "";
        let showPackageHalal = "";
        console.log(this.allPackageItems);
        this.allPackageItems.forEach ((item) => {
          let infoBtnId = item.id;
          let packageValue = parseInt(item.name.substring(0,2));
          let packageType = parseInt(item.type.substring(0,1));
          let htmlPackageCard =
              `
              <div class="ms-2 me-2">
                <div class="card">
                  <div class="img-container">
                    <img src="${item.imageUrl}" class="card-img-top">
                    <button type="button" id="${infoBtnId}" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#packageModal"><span class="material-icons">info_outline</span>
                    </button>
                  </div>
                  <div class="card-body">
                    <div class="info">
                      <div class="info-left">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.type}</p>
                      </div>
                      <div id="orderButton">
                        <a href="https://happytingkat.herokuapp.com/order" value=${packageValue} class="btn btn-lg btn-success" style="font-weight: bold;">$${item.price}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          `
//          href="http://localhost:8090/order"
//          href="https://happytingkat.herokuapp.com/order"

          if (item.cuisine == "Chinese") {
            showPackageChinese += htmlPackageCard
          }
          else if (item.cuisine == "Halal") {
            showPackageHalal += htmlPackageCard
          }



        }); // End of forEach

        // Addition of HTML script to Package Section:
        // - Chinese Packages:
        document.querySelectorAll(".owl-carousel")[0].innerHTML = showPackageChinese;

        // - Halal Packages:
        document.querySelectorAll(".owl-carousel")[1].innerHTML = showPackageHalal;



        // Add eventListener for each modal 'Info' button:
        this.allPackageItems.forEach ((item) => {
          let infoBtnId = item.id
          document.getElementById(infoBtnId).addEventListener("click", function() {
            displayPackageDetail(item)
          });
        });

        // Add eventListener for each price link (<a> element)
        const priceLinkNodeList = document.querySelectorAll("#orderButton>a");
         for (let i = 0; i < priceLinkNodeList.length; i++) {
             priceLinkNodeList[i].addEventListener("click", storeValue);
         }

    } // End of displayProduct method definition
} // End of ProductController Class definition

// This function handles each 'info' button to show the Product Details in a modal popup
function displayPackageDetail(item) {
    document.querySelector("#packageTitle").innerHTML = item.name;
    document.querySelector("#description").innerHTML = item.description;
    document.querySelector("#packageImage").src = item.imageUrl;
    document.querySelector("#packageCuisine").innerHTML = item.cuisine;
    document.querySelector("#packagePrice").innerHTML = item.price;
    document.querySelector(".todaysMenu").setAttribute("id", item.id);
}

function storeValue(event) {
    const retrievedValue = event.target.getAttributeNode("value").value;
    window.localStorage.setItem("selectedPackage", retrievedValue);
}