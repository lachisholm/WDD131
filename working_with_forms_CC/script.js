// NEW function added:
function formatExpiryDate(value) {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
        return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
}

// Applied as user types:
expiryInput.addEventListener("input", function(e) {
    e.target.value = formatExpiryDate(e.target.value);
});



// Attach listener when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
   const form = document.getElementById("working_with_forms");

   form.addEventListener("submit", function (event) {
    if(!form.checkValidity()) {
        // show validation
        return;
    }
    // Optional: prevent actual submission during testing
    event.preventDefault();

    // Log the input values (for testing/demo)
    const name = document.getElementById("cardholder-name").value;
    const number = document.getElementById("card-number").value;
    const expiry = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;

    console.log("Form Submitted:");
    console.log("Name:", name);
    console.log("Card Number:", number);
    console.log("Expiry:", expiry);
    console.log("CVV:", CVV);

    alert("Form submitted successfully!");
});
});