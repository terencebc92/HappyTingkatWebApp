// Instantiate an OrdersController object
const ordersControl = new OrdersController();


// Add a function to the form that runs when the submit button is pressed
orderFormId.addEventListener('submit', (event) => {
    // Stop form default action
    event.preventDefault();

    // Get the current time in "YYYY-MM-DD hh:mm:ss"
    const currentTime = new Date().getTime();
    const toyear = new Date(currentTime).getFullYear();
    let tomonth = new Date(currentTime).getMonth();
    let todate = new Date(currentTime).getDate();
    let tohour = new Date(currentTime).getHours();
    let tominute = new Date(currentTime).getMinutes();
    let tosecond = new Date(currentTime).getSeconds();

    todate = todate < 10 ? "0" + todate : todate;
    tomonth = tomonth + 1 < 10 ? "0" + (tomonth + 1): tomonth + 1;
    tohour = tohour < 10 ? "0" + tohour : tohour;
    tominute = tominute < 10 ? "0" + tominute : tominute;
    tosecond = tosecond < 10 ? "0" + tosecond : tosecond;

    const order_time = toyear + "-" + tomonth + "-" + todate + " " + tohour + ":" + tominute + ":" + tosecond;

    // Validate lunch or dinner checkboxes
    if (lunchOrDinner.length == 0) {
    document
      .querySelector("#checkboxLunch")
      .setCustomValidity("Please select at least lunch or dinner");
    document.querySelector("#checkboxLunch").reportValidity();
    } else {
        // Collect all the form data
        const mealPackage = document.querySelector("#mealPackage").value;
        const deliveryStart = document.querySelector("#deliveryStart").value;
        const numPax = document.querySelector("#numPax").value;
        const numDishes = document.querySelector("#numDishes").value;
        const whiteRice = document.querySelector("#whiteRice").value;
        const brownRice = document.querySelector("#brownRice").value;
        const customerName = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const mobile = document.querySelector("#mobile").value;
        const price = calculatePrice();

        // Clear form
        clearInput();

        // Add the order data to the controller
        ordersControl.addOrder( mealPackage,
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
                                order_time)

        isLunch = 0;
        isDinner = 0;
        document.querySelector(".form__price").innerHTML = `Price Total: $100.00`
        sliderDisplay.innerHTML = 1;

    } // end if-else block
}) // End of event listener


// This code updates the slider value dynamically
const sliderVar = document.querySelector('input[type="range"]');
const sliderDisplay = document.querySelector(".form__slider__value");

function sliderValue() {
  sliderDisplay.innerHTML = sliderVar.value;
  numPax = sliderVar.value; // assigning to numPax so that price can update dynamically
  calculatePrice();
};
sliderVar.addEventListener("input", sliderValue);

// Initialize variables for the order form
const orderList = [];
let lunchOrDinner = [];

// Function to clear the form
function clearInput() {
  document.querySelector("#orderFormId").reset();
}

// This code handles the checkboxes
const checkboxes = document.querySelectorAll("input[type=checkbox]");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", handleChecked);
});

function handleChecked(event) {

  if (event.target.checked) {
    lunchOrDinner.push(event.target.value);
    if(event.target.value == "lunch") {
      isLunch = 1;
    } else if (event.target.value == "dinner") {
      isDinner = 1;
    }

  } else {
    lunchOrDinner = lunchOrDinner.filter((item) => item != event.target.value);
    if(event.target.value == "lunch") {
      isLunch = 0;
    } else if (event.target.value == "dinner") {
      isDinner = 0;
    }
  }

  //Check if lunch or dinner checkbox has at least one item in the array. 
  //Clear the validation message so that I can do the submission
  if (lunchOrDinner.length > 0) {
    document.querySelector("#checkboxLunch").setCustomValidity("");
    document.querySelector("#checkboxLunch").reportValidity();
  }
  calculatePrice();
} // end of handleChecked function


// This code handles the date limit
function setDate() {

  // Declaring variables for how many days in advance and maximum months in advance
  const daysInAdvance = 7; 
  const monthsInAdvance = 6;

  // Instantiate today's date
  const currDateObject = new Date();
  let currYear = currDateObject.getFullYear();
  let currMonth = currDateObject.getMonth();
  let currDay = currDateObject.getDate();

  // Min date object instantiated as 1 week after today's date.
  // Max date object instantiated as 6 months after today's date.
  const minDateObject = new Date(currYear, currMonth, currDay + daysInAdvance);
  const maxDateObject = new Date(currYear, currMonth + monthsInAdvance, currDay);

  // Store the date integer values in variables from the minDateObject and maxDateObject
  let minYear = minDateObject.getFullYear();
  let minMonth = minDateObject.getMonth();
  let minDay = minDateObject.getDate();

  let maxYear = maxDateObject.getFullYear();
  let maxMonth = maxDateObject.getMonth();
  let maxDay = maxDateObject.getDate();

  // For day and month values that are a single digit, add a "0" in front
  minMonth = minMonth + 1 < 10 ? "0" + (minMonth + 1): maxMonth + 1;
  maxMonth = maxMonth + 1 < 10 ? "0" + (maxMonth + 1): maxMonth + 1;
  minDay = minDay < 10 ? "0" + minDay : minDay;
  maxDay = maxDay < 10 ? "0" + maxDay : maxDay;

  // Construct the date in the format YYYY-MM-DD
  let minDate = `${minYear}-${minMonth}-${minDay}`;
  let maxDate = `${maxYear}-${maxMonth}-${maxDay}`;

  document.querySelector("#deliveryStart").setAttribute("min", minDate);
  document.querySelector("#deliveryStart").setAttribute("max",  maxDate);
}
// Call the setDate function when HTML is loaded
setDate();  


// This code handles the carousel slideshow
let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  // number of slides per carousel-item
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

// This code handles the carousel hover effect
let cardImages = document.querySelectorAll(".card-img img");
cardImages.forEach(card => {
  card.addEventListener("mouseenter", changeMainImage);
})

function changeMainImage(e) {
  let newSrc = e.target.getAttribute("src");
  const mainImageElement = document.querySelector(".main-image");
  mainImageElement.setAttribute("src", newSrc);
}

/*
The following updates the form's displayed price when the user selects/unselects options.
Mechanics of the price calculation are as follows, but can be adjusted as needed:
(Meal package + lunch + dinner + 3/4-dishes + Brown Rice +  White Rice) * number of pax

--Variables Required--
priceMealPackage, priceLunch, priceDinner, priceFourDish, numPax, numBrownRice, numWhiteRice, priceBrownRice, priceWhiteRice

*/ 

// CONSTANT VARIABLES - Change as needed
const priceMealPackage10 = 100;
const priceMealPackage20 = 190;
const priceMealPackage30 = 280;
const priceThreeDish = 0; // 3-dish is the default choice, therefore no extra charge
const priceFourDish = 2; // Extra charge of $2 for 4-dish
const priceBrownRice = 1.5;
const priceWhiteRice = 1;

// MUTABLE VARIABLES
let priceMealPackageSelection = priceMealPackage10; // default value
let isLunch = 0; // toggled using handleChecked function
let isDinner = 0; // toggled using handleChecked function

let numPax = 1; // Default value. Updated with sliderValue function
let priceDishes = priceThreeDish;
let numWhiteRice = 0;
let numBrownRice = 0;

function calculatePrice() {
  const displayPrice = document.querySelector(".form__price"); // Gets DOM element to display the price
  let totalPrice =   // Price calculation (amend as required)
    (priceMealPackageSelection + 
    priceDishes +
    numWhiteRice * priceWhiteRice +
    numBrownRice * priceBrownRice) *
    (isLunch == 0 && isDinner == 0 ? 1 : isLunch + isDinner) * // Prevents the price from going to zero when user unchecks both boxes
    numPax;
  totalPrice = totalPrice.toFixed(2); // Convert total price to 2 decimal places
  displayPrice.innerHTML = `Price Total: $${totalPrice}` // Update the DOM element with the total price
  return totalPrice;
}


// EVENT LISTENERS - Each event listener will update the price using the calculatePrice() function
// 1) Meal package price
const mealPackage = document.querySelector("#mealPackage");
function applyMealPackagePrice() {
  if (mealPackage.value == 10) {
    priceMealPackageSelection = priceMealPackage10;
  } else if (mealPackage.value == 20) {
    priceMealPackageSelection = priceMealPackage20;
  } else {
    priceMealPackageSelection = priceMealPackage30;
  }
  calculatePrice();
}
mealPackage.addEventListener("input", applyMealPackagePrice);

// 2) Lunch and dinner is handled by handleChecked function above
// 3) numPax handled by sliderValue function above

// 4) Meal options: numDishes price (either 3 or 4)
const numDishes = document.querySelector("#numDishes");
function applyNumDishesPrice() {
  if (numDishes.value == 3) {
    priceDishes = priceThreeDish;
  }
  if (numDishes.value == 4) {
    priceDishes = priceFourDish;
  }
  calculatePrice();
}
numDishes.addEventListener("input", applyNumDishesPrice);

// 5) White rice price
const inputWhiteRice = document.querySelector("#whiteRice");
function getWhiteRiceValue() {
  numWhiteRice = inputWhiteRice.value;
  calculatePrice();
};
inputWhiteRice.addEventListener("input", getWhiteRiceValue);

// 6) Brown rice price
const inputBrownRice = document.querySelector("#brownRice");
function getBrownRiceValue() {
  numBrownRice = inputBrownRice.value;
  calculatePrice();
};
inputBrownRice.addEventListener("input", getBrownRiceValue);