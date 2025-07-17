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

// Gallery image click counter -Second dynamic element
let imageClickCount = 0;

// Select all gallery images
const galleryImages = document.querySelectorAll('.gallery img');

// Add click event listener to each gallery image
galleryImages.forEach(function(image) {
    image.addEventListener('click', function(){
        //Increment the click counter
        imageClickCount++;

        // Log the click count
        console.log('Image clicked! Total clicks: ' + imageClickCount);

        //Add a visual effect -temporary border
        image.style.border = '2px solid #8B4513';

            // Remove the border after 1 second
            setTimeout(function() {
                image.style.border = 'none';
            }, 10000);
        });
    });

    // Nav link toggle loop
    // Select all nav link anchor tags inside nav-links
    const navLinkItems = document.querySelectorAll('.nav-links li a');

    //For each link, add a click that closes the nav
    navLinkItems.forEach(link => {
        link.addEventListener('click',() => {
            navLinks.classList.remove('active');
            console.log('Menu closed on link click');
        });
    });



    //Univeral add to cart function

    function addToCart(name, price, image) {
        const item= { name, price, image};
        let cart = JSON.parse(localStorage.getItem('cart'));
            alert(`${name}has been added to your cart.`);
            }

      // Show current cart count in nav
      document.addEventListener('DOMContentLoaded', () => {
        const countSpan = document.getelementbyID('cart-count');
        if (countSapn) {
            const cart = JSON.parse(localStorage.getItem('cart')) || {};
            countSpan.textcontent = cart.length;
        }

        //clear cart button logic (only runs on cart page)
        const clearButton = document.getElementById('clear-cart-button');
        if (clearButton) {
        clearButton.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear your cart?')) {
                localStorage.removeItem('cart');
                location.reload();
            }
        });
    }
});
    
    
//clear the cart only after successful checkout
document.addEventListener('DOMContentLoaded', () => {
    const confirmButton = document.getElementById('place-order-button');
    if (confirmButton) {
        confirmButton.addEventListener('click',() => {
            alert('Thank you for your order!');
            localStorage.removeItem('cart');  // Clear the cart
            window.location.href = 'thankyou.html'; // redirect to confirmation page
        });
    }
});

// Add this function to your main.js file
function displayCartitems(){
    const cartItems = JSON.parse(localStroage.getitem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-items');

    if (cartItems.length ===0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty</p>;
        return;
    }

    let cartHtml = '';
    cartItems.forEach(item => {
        cartHTML +=
        <div>
        <h3>${item.name}</h3>
        <p>$${itemprice}</p>
        </div>
    ;
    });
    cartItemsDiv.innerHTML = cartHTML;
}

//call when cart page oads
if (document.getElementById('cart-items')) {
    displayCartItems();
}
