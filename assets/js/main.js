const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (window.location.hash === "#special-issue") {
  const specialIssue = document.getElementById("special-issue");
  if (specialIssue) {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: specialIssue.getBoundingClientRect().top + window.scrollY - 96,
        behavior: "instant",
      });
    });
  }
}
