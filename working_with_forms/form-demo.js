// form-demo.js
function validateForm(event) {
    const theForm = event.target;
    const errors = [];
    let isValid = true;

    if (theForm.paymentMethod.value === "creditCard") {
        if (theForm.creditCardNumber.value !== "1234123412341234") {
            isValid = false;
            errors.push("Invalid Credit Card Number");
        }
    }

    if (theForm.fullName.value.trim()  !=="Bob") {
        isValid = false;
        errors.push("Your name is not Bob");
}

if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
    }   


    //validations to be added later

    if (!isValid) {
        event.preventDefault();
        showErrors(errors);
        return false;
    }
}


function togglePaymentDetails(e) {
    const theForm = document.querySelector("#checkoutForm");
        const creditCardContainer = document.getElementById("creditCardNumberContainer");
        const paypalContainer = document.getElementById("paypalUsernameContainer");

        // Hide containers initially
        creditCardContainer.classList.add("hide");
        paypalContainer.classList.add("hide");

        // Remove required attributes initially
        theForm.creditCardNumber.required = false;
        theForm.paypalUsername.required = false;

        // Show correct container based on selection
        if (theForm.paymentMethod.value === "creditCard") {
            creditCardContainer.classList.remove("hide");
            theForm.creditCardNumber.required = true;
        } else if (theForm.paymentMethod.value ==="paypal") {
            paypalContainer.classList.remove("hide");
            theForm.paypalUsername.required = true;
        }
}

function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>)${error}</p>`).join("");
    errorE1.innerHTML = html;
}

document.querySelector("#paymentMethod").addEventListener("change", togglePaymentDetails);
documnet.queryselector("#checkoutForm").addEventListener("submit", validateForm);