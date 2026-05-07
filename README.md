# 🚀 Portfolio Fullstack en Devenir — Anthony Gargoua

<p align="center">
  <img src="img/logo.webp" alt="Logo Anthony Gargoua" width="150">
  <br>
  <em>"De commercial à Développeur Full Stack"</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-En%20D%C3%A9veloppement-green?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel" alt="Vercel">
  <img src="https://img.shields.io/badge/UI/UX-Figma-purple?style=for-the-badge&logo=figma" alt="Figma">
</p>

---

## 📖 Présentation du Projet

Ce dépôt contient le code source de mon portfolio professionnel, conçu comme une application vitrine évolutive. Plus qu'un simple CV, c'est un laboratoire où j'expérimente les dernières technologies **Front-end** et **Back-end**.

📍 **Accès direct :** [https://portfolio-rho-murex-84.vercel.app/](https://portfolio-rho-murex-84.vercel.app/)

### 🎯 Objectifs
- **Exposer** mes réalisations en Design et Développement Web.
- **Démontrer** ma capacité à créer des interfaces fluides (UX) et performantes.
- **Cartographier** ma progression technique, notamment durant mon cursus chez **Diginamic**.

---

## 🛠 Stack Technique & Écosystème

### Core Technologies (Maîtrisées)
- **Langages** : HTML5, CSS3 (Flexbox/Grid), JavaScript ES6+.
- **Interactivité** : [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform) pour des séquences d'animation haute performance.
- **CMS & E-commerce** : WordPress, PrestaShop (Architecture de thèmes).

### Future Stack (Cursus Diginamic — 2026)
Le projet intègre une visualisation de compétences en temps réel pour les technologies suivantes :
- **Back-end Pro** : Java 21, JEE, Spring Boot 3, Hibernate.
- **Front-end Frameworks** : Angular 17+, TypeScript.
- **Base de données** : PostgreSQL, MySQL.
- **DevOps** : Docker, CI/CD (GitHub Actions), Tests Unitaires (JUnit, Jest).

---

## ✨ Fonctionnalités Avancées

| Fonctionnalité | Description |
| :--- | :--- |
| **Theme Engine** | Système de switch dynamique (Dark/Light Mode) avec persistance locale. |
| **GSAP Timeline** | Séquençage d'apparition des éléments (`fade-in`, `stagger`) pour éviter les effets de flash. |
| **Skill Progressors** | Barres de progression dynamiques animées par calcul de ratio GSAP. |
| **Responsive 2.0** | Grilles adaptatives fluides utilisant les `CSS Variables` pour une maintenance simplifiée. |

---

## 📁 Architecture du Projet

```text
├── img/                # Assets visuels et captures d'écran
├── js/
│   └── script.js       # Logique d'animation GSAP et gestion du thème
├── styles/
│   └── style.css       # Système de design global (CSS Variables)
├── index.html          # Page d'accueil (Bio & Hero)
├── competences.html    # Visualisation dynamique de la stack
├── projets.html        # Galerie filtrée des réalisations
└── contact.html        # Formulaire de contact optimisé
