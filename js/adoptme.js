const form = document.getElementById("adoptionForm");
const agreement = document.querySelector('input[name="agreement"]');

form.addEventListener("submit", function(event) {

    let missing = [];

    if(!inputName.value) missing.push("Name");
    if(!phone.value) missing.push("Phone");

    if(!email.value) {
        missing.push("Email");
    } else if (!email.checkValidity()) {
        missing.push("Valid email");
    }

    if(house.value === "") missing.push("House type");

    if(!document.querySelector('input[name="option"]:checked')){
        missing.push("Pet location");
    }

    if (!petamount.value) missing.push("Amount of pets");

    if (missing.length > 0) {
        event.preventDefault();

        alert("Please enter: " + missing.join(", ") + " before submmitting.");
    } else if (petamount.value < 0 || petamount.value > 100) {
        event.preventDefault();

        alert("Please enter a valid pet amount. (0 <= amount >= 100)");
    }
    else if(!agreement.checked){
        event.preventDefault();

        alert("Please accept the adoption agreement before submitting.");
    }

    if(form.checkValidity()){
        alert("Thank you for your interest.");
        event.preventDefault();

        window.location.href = "../index.html";
    }
});