var planButton = document.querySelector("nav ul li button");

function showMenu(isOn) {
    if (isOn) {
        document.querySelector("header~div").style.display = "inline-block";
        planButton.style.color = "navy";
        planButton.style.backgroundColor = "white";
    } else {
        document.querySelector("header~div").style.display = "none";
        planButton.style.color = "white";
        planButton.style.backgroundColor = "navy";
    }
}