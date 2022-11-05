let menuIcon = document.querySelector(".menu-icon")
let navMobile = document.querySelector(".nav-mobile");
let minhaConta = document.getElementById("nav-btn-mobile2")

menuIcon.onclick = function () {

    if (navMobile.style.right === "-100%" && minhaConta.style.display === "block") {
        navMobile.style.right = "0"
        minhaConta.style.display = "none"
    } else {
        navMobile.style.right = "-100%"
        minhaConta.style.display = "block"
    }
}