const intro = document.getElementById("intro");
const introLogo = document.getElementById("logo");

// --- ANIMATION D'ENTRÉE (LOADER) ---
if (intro) {
    const tl = gsap.timeline();
    tl.to(introLogo, { opacity: 1, scale: 1.1, duration: 0.4, ease: "power2.out" })
      .to(introLogo, { opacity: 0, scale: 0.8, duration: 0.6, ease: "power2.in" }, "+=0.5")
      .to(intro, { 
          opacity: 0, 
          duration: 0.4, 
          onComplete: () => {
            intro.style.display = "none";
            launchPageAnimations();
          } 
      });
} else {
    // Si pas de loader (pages secondaires), on lance direct
    window.addEventListener("DOMContentLoaded", launchPageAnimations);
}

// --- ANIMATIONS GLOBALES ---
function launchPageAnimations() {
    // Apparition des textes
    gsap.to(".fade", { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" });
    gsap.to(".progress-line span", {
    scaleX: 1,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.1
});
    
    // Animation des catégories de compétences
    if (document.querySelector(".skill-category")) {
        gsap.from(".skill-category", { duration: 0.8, y: 30, opacity: 0, stagger: 0.2 });
    }

    // Animation de la galerie de photos
    if (document.querySelector(".gallery-grid img")) {
        gsap.from(".gallery-grid img", { duration: 0.8, scale: 0.9, opacity: 0, stagger: 0.1 });
    }
}

// --- MENU BURGER ---
const burger = document.querySelector(".burger");
const navMenu = document.querySelector("nav");
if (burger) {
    burger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        burger.classList.toggle("active"); // Optionnel : pour animer le burger si tu ajoutes du CSS
    });
}

// --- DARK MODE ---
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
    });
}
