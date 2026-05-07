// Animation GSAP d’entrée
gsap.from(".fade", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    stagger: 0.2
});

// Animation des cards (zoom + effet hover)
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.07, duration: 0.3 });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3 });
    });
});

// Animation sur le texte des titres
gsap.from(".title, .subtitle", {
    opacity: 0,
    x: -50,
    duration: 0.7
});
// --- ANIMATION DU LOGO ---
gsap.to("#intro-logo", {
    opacity: 1,
    scale: 1.2,
    duration: 0.7,
    ease: "power2.out"
});

gsap.to("#intro-logo", {
    opacity: 0,
    scale: 0.6,
    delay: 1,
    duration: 0.7,
    ease: "power2.in"
});

// --- FADE DE L'ÉCRAN INTRO ---
gsap.to("#intro", {
    opacity: 0,
    delay: 1,
    duration: 0.7,
    onComplete: () => {
        document.getElementById("intro").style.display = "none";
    }
});

// --- ANIM HERO ---
gsap.to(".fade", {
    opacity: 1,
    delay: 1,
    duration: 0.7,
    stagger: 0.3
});
// ----- MODE SOMBRE -----
const toggleBtn = document.getElementById("theme-toggle");

// Restore le thème depuis localStorage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    toggleBtn.textContent = "🌴";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        toggleBtn.textContent = "🌴";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "🌑";
        localStorage.setItem("theme", "light");
    }
});
// ----- MENU BURGER -----
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
});

// Animation des cartes de compétences
gsap.from(".skill-category", {
    duration: 0.8,
    y: 30,            // Les cartes montent de 30px
    opacity: 0,       // Elles partent de l'invisible
    stagger: 0.2,     // L'effet "domino" : 0.2s d'écart entre chaque carte
    ease: "power2.out",
    delay: 0.2        // Attend un peu que la page charge
});

// Animation des petits items à l'intérieur
gsap.from(".skill-item", {
    duration: 0.5,
    opacity: 0,
    x: -10,
    stagger: 0.05,    // Apparition très rapide les uns après les autres
    ease: "power1.out",
    delay: 0.6        // Commence après l'apparition des catégories
});
