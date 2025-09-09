const btn = document.getElementById("toggle-theme");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.classList.add(savedTheme);
}

if (savedTheme === "dark") {
  btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
} else {
  btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

btn.addEventListener("click", () => {
  if (root.classList.contains("light")) {
    root.classList.remove("light");
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
    btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    root.classList.remove("dark");
    root.classList.add("light");
    localStorage.setItem("theme", "light");
    btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
});

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
      "Je suis <span class='highlight'>Nicolas Drew</span>, 26 ans, basé à Agen. Curieux et créatif, j'aime apprendre de nouvelles choses et m'exprimer à travers des projets numériques, tout en étant également passionné par les jeux vidéo et le design.",

    about_text2:
      "J'ai découvert le développement web parce que je voulais transformer des idées en <span class='highlight'>expériences réelles</span>. J'apprécie l'équilibre entre la résolution de problèmes et la créativité, et la manière dont le code peut donner forme à quelque chose d'utile et d'agréable.",

    about_text3:
      "Aujourd'hui, je me concentre sur la maîtrise des technologies web modernes et des bonnes pratiques, tout en réalisant des projets qui mettent en valeur mes compétences. Je suis particulièrement intéressé par le <span class='highlight'>développement React</span> et la création de sites web responsifs et accessibles.",
    skills_title: "Mes compétences",
    learning_title: "En cours d'apprentissage",

    // Section projets
    projects_title: "Certains de mes projets",
    project1_desc: "En cours - Une application météo, construite avec React.",
    project2_desc: "Découvrez des êtres mythiques, fait pour fCC.",
    project3_desc: "Un jeu classique, projet de groupe - fait avec React.",
    project4_desc:
      "Exploration du calme - Chambres anéchoïques, fait pour fCC.",
    project4_title: "Page de documentation technique",
    project5_desc: "Une page de destination produit, faite pour fCC.",
    project5_title: "Page de destination produit",

    // Section contact
    contact_title: "Contactez-moi",
    form_name: "Nom",
    form_email: "Email",
    form_subject: "Sujet",
    form_message: "Message",
    form_submit: "Envoyer",
    placeholder_name: "Votre nom",
    placeholder_email: "email@example.com",
    placeholder_subject: "Votre sujet ici",
    placeholder_message: "Écrivez votre message...",
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
      "I'm <span class='highlight'>Nicolas Drew</span>, 26 years old and based in Agen, France. Curious and creative, I enjoy learning new things and expressing myself through digital projects, while also being passionate about video games and design.",

    about_text2:
      "I discovered web development because I wanted to turn ideas into <span class='highlight'>real experiences</span>. I like the balance between problem-solving and creativity, and how code can shape something both useful and enjoyable.",

    about_text3:
      "Currently, I'm focused on mastering modern web technologies and best practices while building projects that showcase my growing skills. I'm particularly interested in <span class='highlight'>React development</span> and creating responsive, accessible websites.",
    skills_title: "My Skills",
    learning_title: "Currently Learning",

    // Section projets
    projects_title: "Some of my projects",
    project1_desc: "Still in progress - A weather app, built with React.",
    project2_desc: "Discover mythical beings, built for fCC.",
    project3_desc: "A classic game, group project - built with React.",
    project4_desc: "Exploring the quiet - Anechoic chambers, built for fCC.",
    project4_title: "Technical documentation page",
    project5_desc: "A product landing page, built for fCC.",
    project5_title: "Product landing page",

    // Section contact
    contact_title: "Contact me",
    form_name: "Name",
    form_email: "Email",
    form_subject: "Subject",
    form_message: "Message",
    form_submit: "Send",
    placeholder_name: "Your name",
    placeholder_email: "email@example.com",
    placeholder_subject: "Your subject here",
    placeholder_message: "Write your message...",
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

  // Navigation (ajouter le lien About)
  document.querySelector('a[href="#welcome-section"]').textContent = t.nav_home;
  document.querySelector('a[href="#about-section"]').textContent = t.nav_about;
  document.querySelector('a[href="#projects"]').textContent = t.nav_projects;
  document.querySelector('a[href="#contact-section"]').textContent =
    t.nav_contact;

  // Section welcome
  document.querySelector(".text-part.up").textContent = t.welcome_hello;
  document.querySelector(".text-part.left").textContent = t.welcome_name;
  document.querySelector("#welcome-section h2").textContent =
    t.welcome_subtitle;
  document.querySelector(".cta-button").textContent = t.welcome_cta;

  // Section À propos
  document.querySelector("#about-section h2").textContent = t.about_title;

  const aboutTexts = document.querySelectorAll(".about-text p");
  if (aboutTexts[0]) aboutTexts[0].innerHTML = t.about_text1;
  if (aboutTexts[1]) aboutTexts[1].innerHTML = t.about_text2;
  if (aboutTexts[2]) aboutTexts[2].innerHTML = t.about_text3;

  document.querySelector(".skills-card h3").textContent = t.skills_title;
  document.querySelector(".learning-section h4").textContent = t.learning_title;

  // Section projets
  document.querySelector("#projects h1").textContent = t.projects_title;

  // Descriptions des projets (par ordre dans le HTML)
  const projectInfos = document.querySelectorAll(".project-info figcaption");
  if (projectInfos[0]) projectInfos[0].textContent = t.project1_desc;
  if (projectInfos[1]) projectInfos[1].textContent = t.project2_desc;
  if (projectInfos[2]) projectInfos[2].textContent = t.project3_desc;
  if (projectInfos[3]) projectInfos[3].textContent = t.project4_desc;
  if (projectInfos[4]) projectInfos[4].textContent = t.project5_desc;

  // Titres des projets
  const projectTitles = document.querySelectorAll("#projects-section p");
  if (projectTitles[3]) projectTitles[3].textContent = t.project4_title;
  if (projectTitles[4]) projectTitles[4].textContent = t.project5_title;

  // Section contact
  document.querySelector("#contact-section h1").textContent = t.contact_title;

  // Labels du formulaire
  document.querySelector('label[for="name"]').textContent = t.form_name;
  document.querySelector('label[for="email"]').textContent = t.form_email;
  document.querySelector('label[for="subject"]').textContent = t.form_subject;
  document.querySelector('label[for="message"]').textContent = t.form_message;

  // Placeholders du formulaire
  document.getElementById("name").placeholder = t.placeholder_name;
  document.getElementById("email").placeholder = t.placeholder_email;
  document.getElementById("subject").placeholder = t.placeholder_subject;
  document.getElementById("message").placeholder = t.placeholder_message;

  document.querySelector('input[type="submit"]').value = t.form_submit;
}

// Initialiser la langue au chargement
document.addEventListener("DOMContentLoaded", function () {
  // Mettre à jour le bouton avec la langue actuelle
  const languageBtn = document.getElementById("language-btn");
  languageBtn.textContent = currentLanguage.toUpperCase();

  // Appliquer les traductions
  updateTexts();

  // Ajouter l'event listener pour le changement de langue
  languageBtn.addEventListener("click", function () {
    const newLang = currentLanguage === "fr" ? "en" : "fr";
    changeLanguage(newLang);
  });
});

const navbar = document.getElementById("navbar");
const toggleBtn = document.querySelector(".navbar-toggle");

toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
});
