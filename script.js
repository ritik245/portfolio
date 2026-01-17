// FORCE page to start at top
window.history.scrollRestoration = "manual";
window.scrollTo(0, 0);

// SCROLL REVEAL
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
const viewBtn = document.getElementById("viewResume");
const modal = document.getElementById("resumeModal");
const closeBtn = document.querySelector(".close");

viewBtn.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}
