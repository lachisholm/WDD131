// Attach listener when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
   const form = document.getElementById("creditCardForm");

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
    const cvv = documentgetElementById("cvv").value;

    console.log("Form Submitted:");
    console.log("Name:", name);
    console.log("Card Number:", number);
    console.log("Expiry:", expiry);
    console.log("CVV:", CVV);

    alert("Form submitted successfully! (Simulated)");
});
});