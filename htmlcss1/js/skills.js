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

const navText = document.querySelectorAll(".card p");

navText.forEach(link => {
    link.addEventListener("mouseenter", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });

    link.addEventListener("mouseleave", () => {
        link.classList.remove("active");
    });
});