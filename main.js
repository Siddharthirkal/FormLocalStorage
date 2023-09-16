function handleSubmit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Create an object to store user data
    var user = {
        name: name,
        email: email
    };

    // Convert the user object to a JSON string and store it in local storage
    localStorage.setItem("user", JSON.stringify(user));

    alert("Name and email stored in local storage!");

    // Clear the form fields
    document.getElementById("my-form").reset();
document.getElementById("submitBtn").addEventListener("click", handleSubmit);
}