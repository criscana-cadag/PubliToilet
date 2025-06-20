document.getElementById("create-account").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && email && password) {
        alert("Account created successfully for " + name + "!");
    } else {
        alert("Please fill out all fields.");
    }
});