function mobileshow() {
    let mobNav = document.getElementById("mobileNav");

    if (mobNav.style.display === "block") {
        mobNav.style.display = "none";
    } else {
        mobNav.style.display = "block";
    }
}

document.querySelectorAll(".nav-link").forEach(a => a.addEventListener("click", () => {
    mobileNav.style.display = "none";
}))