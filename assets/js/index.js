document.addEventListener("DOMContentLoaded", function() {
    var planButton = document.querySelector("nav ul li button");

    function showMenu(button, containerID, isOn) {
        if (isOn) {
            document.getElementById(containerID).style.display = "inline-block";
            button.style.color = "navy";
            button.style.backgroundColor = "white";
        } else {
            document.getElementById(containerID).style.display = "none";
            button.style.color = "white";
            button.style.backgroundColor = "navy";
        }
    }

    planButton.addEventListener("click", function(event) {
        if (document.getElementById("planMenu").style.display == "inline-block") {
            showMenu(planButton, "planMenu", false);
        } else {
            showMenu(planButton, "planMenu", true);
            showMenu(user, "signIn", false);
        }
    }, false)

    var user = document.querySelector("#user");
    user.addEventListener("click", function(event) {
        if (document.getElementById("signIn").style.display == "inline-block") {
            showMenu(user, "signIn", false);
        } else {
            showMenu(user, "signIn", true);
            showMenu(planButton, "planMenu", false);
        }
    }, false);

    document.getElementById("cancelButton").addEventListener("click", function(event) {
        event.preventDefault();
        showMenu(user, "signIn", false);
    }, false);

    var mail = document.getElementById("mail");
    var pass = document.getElementById("pass");
    var signIn = document.getElementById("signInButton");
    signIn.addEventListener("click", function(event) {
        event.preventDefault();
        var userConfirmation = users.findUser(mail.value, pass.value);
        if (userConfirmation) {
            var li = document.querySelector("nav li:last-child");
            var userName = document.createElement("button");
            userName.textContent = userConfirmation.firstName + " " + userConfirmation.lastName;
            userName.setAttribute("class", "nav");
            li.appendChild(userName);
            user.parentNode.removeChild(user);
            showMenu(user, "signIn", false);
        }
    }, false);

    var register = document.getElementById("registerButton");
    var registrationForm = document.getElementById("registration");
    register.addEventListener("click", function(event) {
        event.preventDefault();
        registrationForm.style.display = "block";
        showMenu(user, "signIn", false);
    }, false)

    var firstName = document.querySelector("form#registration input[placeholder='First name']").value;
    var lastName = document.querySelector("form#registration input[placeholder='Last name']").value;
    var phone = document.querySelector("form#registration input[placeholder='Mobile phone']").value;
    var email = document.querySelector("form#registration input[placeholder='E-mail']").value;
    var password = document.querySelector("form#registration input[placeholder='Password']").value;

    document.getElementById("createUser").addEventListener("click", function(event) {
        event.preventDefault();
        if (firstName && lastName && phone && email && password) {
            users.addUser(firstName, lastName, phone, email, password)
            registrationForm.style.display = "none";
            showMenu(user, "signIn", true);
        } else {
            alert("Invalid data!");
        }
    }, false);

    document.getElementById("cancelRegistration").addEventListener("click", function(event) {
        event.preventDefault();
        registrationForm.style.display = "none";
    }, false);

    document.querySelector("form#registration div i.closeTab").addEventListener("click", function(event) {
        registrationForm.style.display = "none";
    }, false);

    document.querySelector("form#signIn div i.closeTab").addEventListener("click", function(event) {
        showMenu(user, "signIn", false);
    }, false);
})