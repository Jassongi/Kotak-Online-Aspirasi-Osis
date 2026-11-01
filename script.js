// =====================================
// 1. MENU NAVIGASI UNTUK HP
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

menuToggle.addEventListener("click", function () {

    const isExpanded =
        menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
        "aria-expanded",
        String(!isExpanded)
    );

    navLinks.classList.toggle("open", !isExpanded);

    menuToggle.setAttribute(
        "aria-label",
        isExpanded ? "Buka menu" : "Tutup menu"
    );

});


// Tutup menu setelah tautan navigasi ditekan
navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Buka menu"
        );

    });

});

}

// =====================================
// 2. TAHUN OTOMATIS DI FOOTER
// =====================================

const yearElement = document.getElementById("year");

if (yearElement) {
yearElement.textContent = new Date().getFullYear();
}