// Creating an instance of ProductController:
const packagesInstance = new PackagesController(0);

// The following methods can be used on productInstance now:
// addProduct() - (packageName, packageType, description, imageURL, cuisine, price)
// displayProduct()

// Use.addPackage method to add all new packages here:
//packagesInstance.addPackage("10 Days Package", "1 Soup & 3 Dishes", "...", "./Projectimages/chinese3dish1-min.jpg", "Chinese", "$100");
//
//packagesInstance.addPackage("20 Days Package", "1 Soup & 3 Dishes", "...", "./Projectimages/chinese3dish2-min.jpg","Chinese", "$180");
//
//packagesInstance.addPackage("30 Days Package", "1 Soup & 3 Dishes", "...", "./Projectimages/chinese3dish3-min.jpg","Chinese", "$270");
//
//packagesInstance.addPackage("10 Days Package", "1 Soup & 4 Dishes", "...", "./Projectimages/chinese4dish1-min.jpeg","Chinese", "$130");
//
//packagesInstance.addPackage("20 Days Package", "1 Soup & 4 Dishes", "...", "./Projectimages/chinese4dish2-min.jpg","Chinese", "$240");
//
//packagesInstance.addPackage("30 Days Package", "1 Soup & 4 Dishes", "...", "./Projectimages/chinese4dish3-min.jpg","Chinese", "$330");
//
//packagesInstance.addPackage("10 Days Package", "1 Soup & 3 Dishes", "...", "./Projectimages/halal3dish1-min.jpg","Halal", "$100");
//
//packagesInstance.addPackage("20 Days Package", "1 Soup & 3 Dishes", "...", "./Projectimages/halal3dish2-min.jpg", "Halal", "$180");
//
//packagesInstance.addPackage("30 Days Package", "1 Soup & 3 Dishes", "...", "./Projectimages/halal3dish3-min.jpg","Halal", "$270");
//
//packagesInstance.addPackage("10 Days Package", "1 Soup & 4 Dishes", "...", "./Projectimages/halal4dish1-min.jpg","Halal", "$130");
//
//packagesInstance.addPackage("20 Days Package", "1 Soup & 4 Dishes", "...", "./Projectimages/halal4dish2-min.jpg","Halal", "$240");
//
//packagesInstance.addPackage("30 Days Package", "1 Soup & 4 Dishes", "...", "./Projectimages/halal4dish3-min.jpeg","Halal", "$330");

// Displaying all added products on HTML:
packagesInstance.displayPackage();

// From Project 4 Task JS Folder:
// // Select the New Task Form
// const newItemForm = document.querySelector('#newItemForm');

// // Add an 'onsubmit' event listener
// newItemForm.addEventListener('submit', (event) => {
//     // Prevent default action
//     event.preventDefault();

//     // Select the inputs
//     const newItemNameInput = document.querySelector('#newItemNameInput');
//     const newItemDescription = document.querySelector('#newItemDescription');

//     /*
//         Validation code here
//     */

//     // Get the values of the inputs
//     const name = newItemNameInput.value;
//     const description = newItemDescription.value;
//     const createdAt = new Date();

//     // Add the task to the task manager
//     itemsController.addItem(name, description, createdAt);

//     // Clear the form
//     newItemNameInput.value = '';
//     newItemDescription.value = '';
// });