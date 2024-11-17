let body = document.querySelector("body");
body.style.transition = "1s";

function changeBg(){
    if(body.style.backgroundColor != "black"){
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting initially

    // Clear any previous error message
    document.getElementById("error-message").style.display = "none";

    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("msgBox").value;

    // Check if all fields are filled
    if (!name || !email || !message) {
        document.getElementById("error-message").innerText = "All fields are required!";
        document.getElementById("error-message").style.display = "block";
        return; // Stop the form submission
    }

    // Validate email format using a simple regex
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("error-message").innerText = "Please enter a valid email address.";
        document.getElementById("error-message").style.display = "block";
        return; // Stop the form submission
    }

    // If all validations pass, submit the form
    this.submit();
});
