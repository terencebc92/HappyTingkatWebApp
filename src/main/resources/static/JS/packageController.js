// Defining Class Object for Products:

class PackagesController { 
    constructor(currentId = 0) {
        this.allPackageItems = [];
        this.currentId = currentId;
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

    displayPackage() {
        let showPackageChinese = "";
        let showPackageHalal = "";

        this.allPackageItems.forEach ((item) => {
          let infoBtnId = item.id;
          let htmlPackageCard =
          `
          <div class="ms-2 me-2">
            <div class="card">
              <div class="img-container">
                <img src="${item.imageURL}" class="card-img-top">
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
