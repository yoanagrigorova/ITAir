function showMenu(isOn) {
    if (isOn) {
        document.querySelector("header~div").style.display = "inline-block";
    } else {
        document.querySelector("header~div").style.display = "none";
    }
}