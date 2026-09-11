function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

document.addEventListener("click", function(event) {

    const menu = document.getElementById("menu");
    const button = document.querySelector(".hamburger");

    if (
        !menu.contains(event.target) &&
        !button.contains(event.target)
    ) {
        menu.classList.remove("show");
    }
});