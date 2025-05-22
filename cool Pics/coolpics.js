

// Get a reference to the button element by its ID
const menuButton = document.getElementById("menu-button");

// Get a reference to the navigation menu element by its ID
const navMenu = document.getElementById("nav-menu");

// Check if both elements were found before proceeding
if (menuButton && navMenu) {

    //Confirm that the script is running and elements are found
    console.log("JavaScript is running and elements found");

    //Add a click event listener to the menu button
    menuButton.addEventListener("click", () => {

    // Log that the button was clicked (for debugging)
    console.log("Menu button clicked");

    // Toggle the "open" class on the nav menu to show or hide it
    navMenu.querySelector("ul").classList.toggle("hide");
    

});

} else {

    // If one of the elements is not found, Log an error to the console
    console.error("menuButton or navMenu not found");
}


//Function to control menu visibility based on screen width
function handleResize() {
    const navList = document.querySelector("#nav-menu ul");

    
    if (window.innerWidth >1000) {

        //Show the menu on Large Screens
        navList.classList.remove("hide");
    
    } else{

        //Hide the menu on small screens
        navList.classList.add("hide");
    }
}

//Listen for window resize events and adjust menu accordingly
window.addEventListener("resize", handleResize);




// Call the function once immediately when the page Loads
handleResize();



// Select the modal dialog element
const modal = document.querySelector("#imageModal");




//Select the image element inside the modal
const modalImage = document.querySelector("#modalImage");




//Get the container that holds all gallery images
const gallery = document.querySelector(".gallery");




//add a click even listener to the entire gallery
gallery.addEventListener("click", function(event) {
    //Find the image that was clicked 
    const clickedImage =event.target.closest("img");




    //Only continue if an actual <img> was clicked - detects which image was clicked - switches -sm.jpg and -full.jpag - opens the modal with the full size image
    if (clickedImage) {
        
        
        // Get the image filename from the src attribute (e.g., "norris-sm.jpeg")
        const src = clickedImage.getAttribute("src");

        //Build the full-size image filename (e.g., "norris-full.jpeg")
        const fullSrc = src.replace("-sm.jpeg","-full.jpeg");

        // This will print the full image path your modal is trying to load
        console.log("Full image path:", fullSrc);

        //set the modal image's source and alte text
        modalImage.setAttribute("src", fullSrc);
        modalImage.setAttribute("alt", clickedImage.getAttribute("alt"));

        //Open the modal to show the full-size image
        modal.showModal();

    }
})




// select the close button inside the modal
const closeButton = document.querySelector(".close-viewer");



// add a click event to close the modal when the button is pressed
closeButton.addEventListener("click", function(){
    modal.close();  //Close the dialog
})



//close the modal if the user clicks on the dark backdrop - outside the image
modal.addEventListener("click", function(event) {
    // Only close the modal if the exact element clicked was the modal itself (not the image or button)
    if (event.target === modal){
        modal.close();  // Close the dialog
    }
});


