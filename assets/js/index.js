var planButton = document.querySelector("nav ul li button");

function showMenu(isOn) {
    if (isOn) {
        document.getElementById("planMenu").style.display = "inline-block";
        planButton.style.color = "navy";
        planButton.style.backgroundColor = "white";
    } else {
        document.getElementById("planMenu").style.display = "none";
        planButton.style.color = "white";
        planButton.style.backgroundColor = "navy";
    }
}

planButton.addEventListener("click", function(event) {
    if (document.getElementById("planMenu").style.display == "inline-block") {
        showMenu(false);
    } else {
        showMenu(true);
    }
}, false)