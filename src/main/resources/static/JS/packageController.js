// Defining Class Object for Products:

class PackagesController {
    constructor(currentId = 0) {
        this.allPackageItems = [];
        this.currentId = currentId;
        this.allPackageAPI = "http://localhost:8080/package/all";
    }

    // Package Methods:
    addPackage(packageName, packageType, description, imageURL, cuisine, price) {

        const packageItem = {
            id: this.currentId++,
            packageName: packageName,
            packageType: packageType,
            description: description,
            imageURL: imageURL,
            cuisine: cuisine,
            price: price
        }
        this.allPackageItems.push(packageItem);
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
                    data.forEach(function (apackage, index) {

                        const packageObj = {
                            id: index,
                            name: apackage.name,
                            price: apackage.price,
                            type: apackage.type,
                            imageUrl: apackage.imageUrl,
                            cuisine: apackage.cuisine,
                            description: apackage.description,
                       };
                        packageController.allPackageItems.push(packageObj);
                  });

                  packageController.renderPackagePage();

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
                    <h5 class="card-title">${item.packageName}</h5>
                    <p class="card-text">${item.packageType}</p>
                  </div>
                  <div id="orderButton">
                    <a href="#" class="btn btn-lg btn-success"><h5>${item.price}</h5></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          `

          if (item.cuisine == "Chinese") {
            showPackageChinese += htmlPackageCard
          }
          else if (item.cuisine == "Halal") {
            showPackageHalal += htmlPackageCard
          }
        });

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

    } // End of displayProduct method definition
} // End of ProductController Class definition

// This function handles each 'info' button to show the Product Details in a modal popup
function displayPackageDetail(item) {
    document.querySelector("#packageTitle").innerHTML = item.packageName;
    document.querySelector("#description").innerHTML = item.description;
    document.querySelector("#packageImage").src = item.imageURL;
    document.querySelector("#packageCuisine").innerHTML = item.cuisine;
    document.querySelector("#packagePrice").innerHTML = item.price;
}

