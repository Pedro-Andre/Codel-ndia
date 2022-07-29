function showMenu() {
    let menuIcon = document.querySelector('.nav-links-wrapper')

    if (menuIcon.style.display === "none") {
        menuIcon.style.display = "flex"
    } else {
        menuIcon.style.display = "none"
    }
}

document.querySelectorAll(".nav-links-mobile").forEach(a => a.addEventListener("click", () => {
    mobileNav.style.display = "none";
}))