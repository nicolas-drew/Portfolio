const btn = document.getElementById("toggle-theme");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.classList.add(savedTheme);
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
