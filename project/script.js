document.addEventListener("DOMContentLoaded", () => {
  const togglerButtons = document.querySelectorAll(".toggler-btn");
  const projectGrids = document.querySelectorAll(".project-grid");

  // Your existing navigation functionality
  togglerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Obtém o alvo do botão clicado (ex: 'frontend', 'backend')
      const targetId = button.dataset.target;

      // Remove a classe 'active' de todos os botões e a adiciona ao botão clicado
      togglerButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Esconde todas as grids de projetos
      projectGrids.forEach((grid) => {
        grid.classList.add("hidden");
      });

      // Mostra a grid de projeto correspondente
      const targetGrid = document.getElementById(targetId);
      if (targetGrid) {
        targetGrid.classList.remove("hidden");
      }

      // Close mobile menu after selection (mobile only)
      if (window.innerWidth <= 767) {
        closeMobileMenu();
      }
    });
  });

  // Hamburger menu functionality (mobile only)
  const hamburgerToggle = document.getElementById("hamburger-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (hamburgerToggle && mobileMenu) {
    hamburgerToggle.addEventListener("click", () => {
      toggleMobileMenu();
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !hamburgerToggle.contains(e.target) &&
        !mobileMenu.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });

    // Close menu on window resize to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        closeMobileMenu();
      }
    });
  }

  function toggleMobileMenu() {
    hamburgerToggle.classList.toggle("active");
    mobileMenu.classList.toggle("show");
  }

  function closeMobileMenu() {
    hamburgerToggle.classList.remove("active");
    mobileMenu.classList.remove("show");
  }
});
