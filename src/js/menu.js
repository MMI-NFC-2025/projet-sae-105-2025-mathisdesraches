const burger = document.querySelector(".burger");
const overlay = document.querySelector("#menuOverlay");
const closeBtn = document.querySelector("#menuClose");
const panel = overlay?.querySelector(".menu-panel");

function openMenu() {
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeBtn?.focus();
}

function closeMenu() {
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  burger?.focus();
}

burger?.addEventListener("click", openMenu);
closeBtn?.addEventListener("click", closeMenu);

// Fermer si clic sur le fond sombre (pas sur le panneau)
overlay?.addEventListener("click", (e) => {
  if (e.target === overlay) closeMenu();
});

// Fermer avec ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("is-open")) {
    closeMenu();
  }
});

// Fermer en cliquant sur un lien du menu (optionnel mais pratique)
overlay?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => closeMenu());
});
