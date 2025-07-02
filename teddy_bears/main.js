// Select the hamburger icon by its class name and store it in a variable
const hamburger = document.querySelector('.hamburger')

// Select the nav-links list by its class name and store it in a variable.
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
    
//Toggle the 'active' class on the nav0links element
navLinks.classList.toggle('active');

//If nav links now has the 'active class, log 'Menu open'
if (navLinks.classList.contains('active')) {
    console.log('Menu opened');
} else {
    console.log('Menu closed');
}
});


const teddyBear = {
    name: 'Classic Brown Teddy',
    size: 'Medium',
    price: 19.99,
    inStock: true
};

// Log the teddy bear object to the console
console.log('Teddy Bear Object:', teddyBear);

// teddy bear names
const teddyBearNames = ['Brownie','Snowflake', 'Honey', 'Cuddles'];


//array method to log each teddy bear name
teddyBearNames.forEach(function(name) {
    console.log('Teddy Bear Name:', name);
});

if (teddyBear.inStock) {
    console.log(teddyBear.name + 'is available for purchase.');
}else{
    console.log(teddyBear.name + 'is out of stock.');
}

