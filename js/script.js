/* ============================================================
   1. GESTION DE L'INTRO (LANCEMENT UNIQUE)
   ============================================================ */
const intro = document.getElementById("intro");
const introLogo = document.getElementById("logo"); // Vérifie bien l'ID dans ton HTML

if (intro) {
    const tl = gsap.timeline();

    tl.to(introLogo, {
        opacity: 1,
        scale: 1.1,
        duration: 0.8,
        ease: "power2.out"
    })
    .to(introLogo, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "power2.in"
    }, "+=0.5")
    .to(intro, {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
            intro.style.display = "none";
            // On lance les animations de page une fois l'intro finie
            launchPageAnimations();
        }
    });
} else {
    // Si pas d'intro (autres pages), on lance direct
    window.addEventListener("DOMContentLoaded", launchPageAnimations);
}

/* ============================================================
   2. ANIMATIONS DE PAGE (GSAP)
   ============================================================ */
function launchPageAnimations() {
    // Animation générique pour les éléments avec la classe .fade
    if (document.querySelector(".fade")) {
        gsap.to(".fade", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });
    }

    // Animation spécifique pour les titres
    if (document.querySelector(".title")) {
        gsap.from(".title, .subtitle", {
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: "power2.out"
        });
    }

    // Animation des Compétences (Grille + Items)
    if (document.querySelector(".skill-category")) {
        gsap.from(".skill-category", {
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out"
        });

        gsap.from(".skill-item", {
            duration: 0.5,
            opacity: 0,
            x: -10,
            stagger: 0.05,
            delay: 0.5,
            ease: "power1.out"
        });
    }
}

/* ============================================================
   3. INTERACTIONS (HOVER, BURGER, THEME)
   ============================================================ */

// Hover sur les Cards (Optionnel si tu le fais déjà en CSS, mais GSAP est plus fluide)
document.querySelectorAll(".card, .site-card").forEach(card => {
    card.addEventListener("mouseenter", () => gsap.to(card, { scale: 1.05, duration: 0.3 }));
    card.addEventListener("mouseleave", () => gsap.to(card, { scale: 1, duration: 0.3 }));
});

// Menu Burger
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

if (burger && nav) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
    });
}

// Mode Sombre (Dark Theme)
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (toggleBtn) {
    // Charger le thème sauvegardé
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
        toggleBtn.textContent = "🌴";
    }

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        const isDark = body.classList.contains("dark-theme");
        
        toggleBtn.textContent = isDark ? "🌴" : "🌑";
        localStorage.setItem("theme", isDark ? "dark" : "light");
        
        // Petit effet GSAP sur le bouton lors du clic
        gsap.fromTo(toggleBtn, { rotate: 0 }, { rotate: 360, duration: 0.5 });
    });
}
