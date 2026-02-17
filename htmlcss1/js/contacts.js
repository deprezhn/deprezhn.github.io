const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });

    link.addEventListener("mouseleave", () => {
        link.classList.remove("active");
    });
});

const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    message.style.display = "block"; 
});