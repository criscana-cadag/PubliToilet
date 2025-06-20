document.getElementById("login").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert("Login successful for " + email + "!");
    } else {
        alert("Please fill out all fields.");
    }
});