// ===== Rotating role in the sidebar =====
const words = ["Java Full Stack Developer", "Backend Java Developer", "Software Developer"];
const typed = document.getElementById("typed");
let w = 0, c = 0, deleting = false;

function type() {
  const word = words[w];
  typed.textContent = word.slice(0, c);
  if (!deleting && c === word.length) { deleting = true; return setTimeout(type, 1600); }
  if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; }
  c += deleting ? -1 : 1;
  setTimeout(type, deleting ? 35 : 75);
}
type();

// ===== Highlight current section in the top menu =====
const links = [...document.querySelectorAll("#menu a")];
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section").forEach(s => obs.observe(s));

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();