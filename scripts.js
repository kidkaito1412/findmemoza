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

  document.querySelector("#menu-toggle").addEventListener("click", () => {
    document.querySelector("#nav-menu").classList.toggle("hidden");
  });

  document.querySelector("#menu-toggle").addEventListener("click", () => {
    document.querySelector("#nav-menu").classList.toggle("hidden");
  });

  