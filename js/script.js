/* Ton code de base conservé */
const intro = document.getElementById("intro");
const introLogo = document.getElementById("logo");

if (intro) {
    const tl = gsap.timeline();
    tl.to(introLogo, { opacity: 1, scale: 1.1, duration: 0.8, ease: "power2.out" })
      .to(introLogo, { opacity: 0, scale: 0.8, duration: 0.6, ease: "power2.in" }, "+=0.5")
      .to(intro, { opacity: 0, duration: 0.8, onComplete: () => {
            intro.style.display = "none";
            launchPageAnimations();
        }
    });
} else {
    window.addEventListener("DOMContentLoaded", launchPageAnimations);
}

function launchPageAnimations() {
    if (document.querySelector(".fade")) {
        gsap.to(".fade", { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" });
    }
    if (document.querySelector(".title")) {
        gsap.from(".title, .subtitle", { opacity: 0, x: -50, duration: 0.8, ease: "power2.out" });
    }
    if (document.querySelector(".skill-category")) {
        gsap.from(".skill-category", { duration: 0.8, y: 30, opacity: 0, stagger: 0.2, ease: "power2.out" });
        gsap.from(".skill-item", { duration: 0.5, opacity: 0, x: -10, stagger: 0.05, delay: 0.5, ease: "power1.out" });
    }
}

/* Interaction Hover */
document.querySelectorAll(".card, .site-card").forEach(card => {
    card.addEventListener("mouseenter", () => gsap.to(card, { scale: 1.05, duration: 0.3 }));
    card.addEventListener("mouseleave", () => gsap.to(card, { scale: 1, duration: 0.3 }));
});

/* Menu Burger (Corrigé pour matcher le CSS) */
const burger = document.querySelector(".burger");
const navMenu = document.querySelector("nav");

if (burger && navMenu) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

/* Mode Sombre */
const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        toggleBtn.textContent = "🌴";
    }
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        toggleBtn.textContent = isDark ? "🌴" : "🌑";
        localStorage.setItem("theme", isDark ? "dark" : "light");
        gsap.fromTo(toggleBtn, { rotate: 0 }, { rotate: 360, duration: 0.5 });
    });
}
