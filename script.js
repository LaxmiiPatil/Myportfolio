// Scroll Reveal
const revealElements = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  revealElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
});

// Project modal
const modal = document.getElementById("modal");
const title = document.getElementById("modalTitle");
const desc = document.getElementById("modalDesc");
const link = document.getElementById("modalGithub");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    title.innerText = card.dataset.title;
    desc.innerText = card.dataset.desc;
    link.href = card.dataset.github;
    modal.style.display = "flex";
  });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none" };
