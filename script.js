const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(13,17,23,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        header.style.background = "rgba(0,0,0,.5)";
        header.style.boxShadow = "none";
    }
});

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const roles = [
    "Frontend Developer",
    "Web Developer",
    "JavaScript Developer",
    "Responsive Web Designer"
];

const roleElement = document.querySelector(".hero-text h2");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleElement.textContent = currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    } else {

        roleElement.textContent = currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, deleting ? 50 : 120);

}

typingEffect();