// When "Today's Menu" link/button is clicked in product modal, link it to the accordion section for today's menu based on today's date:

document.getElementById("todayMenuLink").addEventListener("click", expandAccordion);

function expandAccordion(event) {
  let myIndex = event.target.attributes.id.value;
  console.log(myIndex);

  // get current day of the week where index = 0 (sunday) to 6 (saturday)
  console.log("start expand accordion function")
  let index = new Date().getDay();
  
  // if today is a weekend then show monday menu

  if (index < 1 || index > 5) {
    index = 1;
  }
  
    let selector = "";

    // use the index to select the correct day button
    if (myIndex <= 5)
    {
    selector = "#accordionLeft .accordion-item:nth-child(" + index + ") .accordion-button";
    } else {
    selector = "#accordionRight .accordion-item:nth-child(" + index + ") .accordion-button";
    }

  console.log(selector)
  let button = document.querySelector(selector);
  console.log(button)
  if (button && button.classList.contains("collapsed")) button.click();

  // hide the modal dialog

  let element = document.querySelector("#packageModal");
  
  // this is to use css to hide the modal body:
  element.style.display = 'none';

  var elem = document.querySelector(".modal-backdrop");
  console.log(elem);
  elem.parentNode.removeChild(elem);
  document.body.style.overflow = "visible";
  document.body.style.paddingRight = "0";

  button.scrollIntoView(true);
}

// optional - show current menu on load

// expandAccordion();

// Function to change button text: expand/collapse all (for Chinese accordion menu sections):
$("#collapseAllC").click( function() {
    let buttonAll = document.getElementById("collapseAllC");
    if(!$('.accordion-header').hasClass("active")){
        $('.accordion-header').removeClass("active").addClass("active");
        buttonAll.innerHTML = 'Collapse all'

    } else {
        $('.accordion-header').addClass("active").removeClass("active");

        buttonAll.innerHTML = 'Expand all'
    }
});

// Function to change button text: expand/collapse all (for Halal accordion menu sections):
$("#collapseAllH").click( function() {
    let buttonAll = document.getElementById("collapseAllH");
    if(!$('.accordion-header').hasClass("active")){
        $('.accordion-header').removeClass("active").addClass("active");
        buttonAll.innerHTML = 'Collapse all'

    } else {
        $('.accordion-header').addClass("active").removeClass("active");
        buttonAll.innerHTML = 'Expand all'
    }
});