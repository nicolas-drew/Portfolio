const root = document.documentElement;

// Système de traduction
const translations = {
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_contact: "Contact",

    // Section welcome
    welcome_hello: "Salut,",
    welcome_name: "Je suis Nico!",
    welcome_subtitle: "un développeur web junior",
    welcome_cta: "En savoir plus sur moi",

    // Section À propos
    about_title: "À propos de moi",
    about_text1:
      "Je suis Nicolas Drew, 26 ans, basé à Agen. Curieux et créatif, j'aime apprendre de nouvelles choses et m'exprimer à travers des projets numériques, tout en étant également passionné par les jeux vidéo et le design.",

    about_text2:
      "J'ai découvert le développement web parce que je voulais transformer des idées en <span class='highlight'>expériences réelles</span>. J'aime la satisfaction de donner vie aux idées grâce au code.",

    about_text3:
      "Actuellement, je me concentre sur la maîtrise des technologies web modernes et des bonnes pratiques tout en créant des projets qui mettent en valeur mes compétences grandissantes. Je suis particulièrement intéressé par le <span class='highlight'>développement React</span> et la création de sites web responsifs et accessibles.",

    skills_title: "Mes compétences",
    learning_title: "En cours d'apprentissage",

    // Section certifications
    certifications_title: "Mes Certifications",

    // Section projets
    projects_title: "Quelques-uns de mes projets",
    project1_desc: "En cours - Une application météo, React.",
    project1_title: "Application Météo",
    project2_desc: "Découvrez des êtres mythiques, projet fCC.",
    project2_title: "Application de Recherche de Créatures RPG",
    project3_desc: "Un jeu classique, projet de groupe - React.",
    project3_title: "TIC-TAC-TOE",
    project4_desc: "Projet de groupe fullstack - React, Node.js, MongoDB.",
    project4_title: "Quiz Hackathon",
    project5_desc: "Une page de présentation de produit, projet fCC.",
    project5_title: "Page de présentation de produit",

    // Section contact
    contact_title: "Contactez-moi",
    contact_role: "Développeur Web Junior",
    contact_location: "Agen, France",
    contact_email_label: "Email",
    contact_github_label: "Github",
    contact_send_email: "Envoyer un Email",

    // Formulaire de contact
    form_header_title: "Envoyez-moi un message",
    form_header_desc:
      "Remplissez le formulaire ci-dessous et je vous répondrai dès que possible.",
    form_name: "Nom *",
    form_email: "Email *",
    form_subject: "Sujet *",
    form_message: "Message *",
    form_submit: "Envoyer le Message",
    form_note:
      "Vos informations sont sécurisées et ne seront utilisées que pour vous contacter.",

    // Placeholders
    placeholder_name: "Votre nom",
    placeholder_email: "votre.email@exemple.com",
    placeholder_subject: "De quoi s'agit-il ?",
    placeholder_message: "Écrivez votre message...",

    // Footer
    footer_copyright: "© 2025 Nicolas Drew - Tous droits réservés",
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",

    // Section welcome
    welcome_hello: "Hello,",
    welcome_name: "I'm Nico!",
    welcome_subtitle: "a junior web developer",
    welcome_cta: "Learn more about me",

    // Section À propos
    about_title: "About me",
    about_text1:
      "I'm Nicolas Drew, 26 years old and based in Agen, France. Curious and creative, I enjoy learning new things and expressing myself through digital projects, while also being passionate about video games and design.",

    about_text2:
      "I discovered web development because I wanted to turn ideas into <span class='highlight'>real experiences</span>. I love the satisfaction of bringing ideas to life through code.",

    about_text3:
      "Currently, I'm focused on mastering modern web technologies and best practices while building projects that showcase my growing skills. I'm particularly interested in <span class='highlight'>React development</span> and creating responsive, accessible websites.",

    skills_title: "My Skills",
    learning_title: "Currently Learning",

    // Section certifications
    certifications_title: "My Certifications",

    // Section projets
    projects_title: "Some of my projects",
    project1_desc: "Still in progress - A weather app, React.",
    project1_title: "Meteo App",
    project2_desc: "Discover mythical beings, fCC project.",
    project2_title: "RPG Creature Search App",
    project3_desc: "A classic game, group project - React.",
    project3_title: "TIC-TAC-TOE",
    project4_desc: "Fullstack group project - React, Node.js, MongoDB.",
    project4_title: "Hackathon Quiz",
    project5_desc: "A product landing page, fCC project.",
    project5_title: "Product landing page",

    // Section contact
    contact_title: "Contact me",
    contact_role: "Junior Web Developer",
    contact_location: "Agen, France",
    contact_email_label: "Email",
    contact_github_label: "Github",
    contact_send_email: "Send Email",

    // Formulaire de contact
    form_header_title: "Send me a message",
    form_header_desc:
      "Fill out the form below and I'll get back to you as soon as possible.",
    form_name: "Name *",
    form_email: "Email *",
    form_subject: "Subject *",
    form_message: "Message *",
    form_submit: "Send Message",
    form_note:
      "Your information is secure and will only be used to contact you.",

    // Placeholders
    placeholder_name: "Your name",
    placeholder_email: "your.email@example.com",
    placeholder_subject: "What's this about?",
    placeholder_message: "Write your message...",

    // Footer
    footer_copyright: "© 2025 Nicolas Drew - All rights reserved",
  },
};

// Langue actuelle (récupérée du localStorage ou anglais par défaut)
let currentLanguage = localStorage.getItem("language") || "en";

// Fonction pour changer la langue
function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);

  // Changer l'attribut lang du document
  document.documentElement.lang = lang;

  // Mettre à jour le bouton
  const languageBtn = document.getElementById("language-btn");
  languageBtn.textContent = lang.toUpperCase();

  // Mettre à jour tous les textes
  updateTexts();
}

// Fonction pour mettre à jour tous les textes
function updateTexts() {
  const t = translations[currentLanguage];

  // Navigation
  const navLinks = document.querySelectorAll(
    ".navbar-links a, .footer-links a"
  );
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === "#welcome-section") {
      link.innerHTML = `<i class="fa-solid fa-house"></i> ${t.nav_home}`;
    } else if (href === "#about-section") {
      link.innerHTML = `<i class="fa-solid fa-user"></i> ${t.nav_about}`;
    } else if (href === "#projects") {
      link.innerHTML = `<i class="fa-solid fa-code"></i> ${t.nav_projects}`;
    } else if (href === "#contact-section") {
      link.innerHTML = `<i class="fa-solid fa-envelope"></i> ${t.nav_contact}`;
    }
  });

  // Section welcome
  const helloSpan = document.querySelector(".text-part.up");
  const nameSpan = document.querySelector(".text-part.left");
  const subtitle = document.querySelector("#welcome-section h2");
  const ctaButton = document.querySelector("#welcome-section .cta-button");

  if (helloSpan) helloSpan.textContent = t.welcome_hello;
  if (nameSpan) nameSpan.textContent = t.welcome_name;
  if (subtitle) subtitle.textContent = t.welcome_subtitle;
  if (ctaButton) ctaButton.textContent = t.welcome_cta;

  // Section À propos
  const aboutTitle = document.querySelector("#about-section h2");
  if (aboutTitle) aboutTitle.textContent = t.about_title;

  const aboutTexts = document.querySelectorAll(".about-text p");
  if (aboutTexts[0]) aboutTexts[0].innerHTML = t.about_text1;
  if (aboutTexts[1]) aboutTexts[1].innerHTML = t.about_text2;
  if (aboutTexts[2]) aboutTexts[2].innerHTML = t.about_text3;

  const skillsTitle = document.querySelector(".skills-card h3");
  const learningTitle = document.querySelector(".learning-section h4");
  if (skillsTitle) skillsTitle.textContent = t.skills_title;
  if (learningTitle) learningTitle.textContent = t.learning_title;

  // Section certifications
  const certificationsTitle = document.querySelector(
    "#about-section h2:last-of-type"
  );
  if (certificationsTitle)
    certificationsTitle.textContent = t.certifications_title;

  // Section projets
  const projectsTitle = document.querySelector("#projects h1");
  if (projectsTitle) projectsTitle.textContent = t.projects_title;

  const projectInfos = document.querySelectorAll(".project-info figcaption");
  if (projectInfos[0]) projectInfos[0].textContent = t.project1_desc;
  if (projectInfos[1]) projectInfos[1].textContent = t.project2_desc;
  if (projectInfos[2]) projectInfos[2].textContent = t.project3_desc;
  if (projectInfos[3]) projectInfos[3].textContent = t.project4_desc;
  if (projectInfos[4]) projectInfos[4].textContent = t.project5_desc;

  // Titres des projets
  const projectTitles = document.querySelectorAll("#projects-section p");
  if (projectTitles[0]) projectTitles[0].textContent = t.project1_title;
  if (projectTitles[1]) projectTitles[1].textContent = t.project2_title;
  if (projectTitles[2]) projectTitles[2].textContent = t.project3_title;
  if (projectTitles[3]) projectTitles[3].textContent = t.project4_title;
  if (projectTitles[4]) projectTitles[4].textContent = t.project5_title;

  // Section contact
  const contactTitle = document.querySelector("#contact-section h1");
  if (contactTitle) contactTitle.textContent = t.contact_title;

  const contactRole = document.querySelector(".info-role");
  if (contactRole) contactRole.textContent = t.contact_role;

  const contactLocation = document.querySelector(".info-location");
  if (contactLocation) {
    contactLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.contact_location}`;
  }

  // Labels de contact
  const emailLabel = document.querySelector(".contact-label.email");
  const githubLabel = document.querySelector(".contact-label.github");
  if (emailLabel) emailLabel.textContent = t.contact_email_label;
  if (githubLabel) githubLabel.textContent = t.contact_github_label;

  const sendEmailBtn = document.querySelector(".primary-btn");
  if (sendEmailBtn) {
    sendEmailBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> ${t.contact_send_email}`;
  }

  // Formulaire de contact
  const formHeaderTitle = document.querySelector(".form-header h3");
  const formHeaderDesc = document.querySelector(".form-header p");
  if (formHeaderTitle) formHeaderTitle.textContent = t.form_header_title;
  if (formHeaderDesc) formHeaderDesc.textContent = t.form_header_desc;

  // Labels du formulaire
  const nameLabel = document.querySelector('label[for="name"]');
  const emailLabel2 = document.querySelector('label[for="email"]');
  const subjectLabel = document.querySelector('label[for="subject"]');
  const messageLabel = document.querySelector('label[for="message"]');

  if (nameLabel) nameLabel.textContent = t.form_name;
  if (emailLabel2) emailLabel2.textContent = t.form_email;
  if (subjectLabel) subjectLabel.textContent = t.form_subject;
  if (messageLabel) messageLabel.textContent = t.form_message;

  // Placeholders du formulaire
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  if (nameInput) nameInput.placeholder = t.placeholder_name;
  if (emailInput) emailInput.placeholder = t.placeholder_email;
  if (subjectInput) subjectInput.placeholder = t.placeholder_subject;
  if (messageInput) messageInput.placeholder = t.placeholder_message;

  // Bouton submit
  const submitBtn = document.querySelector(".submit-btn span");
  if (submitBtn) submitBtn.textContent = t.form_submit;

  // Note du formulaire
  const formNote = document.querySelector(".form-note");
  if (formNote) {
    formNote.innerHTML = `<i class="fa-solid fa-shield-halved"></i> ${t.form_note}`;
  }

  // Footer copyright
  const footerCopyright = document.querySelector(".footer-copyright p");
  if (footerCopyright) footerCopyright.textContent = t.footer_copyright;
}

// Initialiser la langue au chargement
document.addEventListener("DOMContentLoaded", function () {
  // Mettre à jour le bouton avec la langue actuelle
  const languageBtn = document.getElementById("language-btn");
  if (languageBtn) {
    languageBtn.textContent = currentLanguage.toUpperCase();

    // Ajouter l'event listener pour le changement de langue
    languageBtn.addEventListener("click", function () {
      const newLang = currentLanguage === "fr" ? "en" : "fr";
      changeLanguage(newLang);
    });
  }

  // Appliquer les traductions
  updateTexts();
});

// Navigation mobile
const navbar = document.getElementById("navbar");
const toggleBtn = document.querySelector(".navbar-toggle");

if (toggleBtn && navbar) {
  toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has("success")) {
    alert("✅ Your message has been sent successfully!");
  }
});
