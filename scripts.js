document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
    // Consider adding a focus state for better accessibility
  });

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
  });

  // Highlight Active Section on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // Adjust based on header height
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-blue-600");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("text-blue-600"); // Highlight current menu
    }
  });
});

// Transparent header on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.style.backgroundColor = window.scrollY > 50 ? "rgba(182, 175, 255, 0.8)" : "#B6AFFF";
  header.style.backdropFilter = window.scrollY > 50 ? "blur(10px)" : "none";
});

// Modal Project Viewer
const projectCards = document.querySelectorAll(".project-card");
const modal = document.createElement("div");
modal.className = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 hidden";
modal.innerHTML = `<img id="modal-img" class="max-h-[90%] max-w-[90%]" src="" alt="Project Image"/>`;
document.body.appendChild(modal);

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const imgSrc = card.getAttribute("src");
    document.getElementById("modal-img").src = imgSrc;
    modal.classList.remove("hidden");
  });
});

modal.addEventListener("click", () => modal.classList.add("hidden"));

window.addEventListener('scroll', function () {
  const parallaxSections = document.querySelectorAll('.parallax');
  parallaxSections.forEach((section) => {
      const scrollPos = window.scrollY;
      section.style.backgroundPositionY = `${scrollPos * 0.5}px`;
  });
});

// Toggle Navigation Menu for Mobile
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});
