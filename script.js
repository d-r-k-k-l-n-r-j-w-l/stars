const sky = document.getElementById("sky");
const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");
const closeBtn = document.getElementById("closeBtn");
const popup = document.getElementById("popup");

const messages = [
  "Each star burns bright across its lonely arc,",
  "Yet constellations map our intertwined fate,",
  "Distance dissolves when light transcends the dark,",
  "Two orbits drawn by more than time or weight,",
  "Gravity of souls that leave their mark,",
  "Ancient photons crossing space to meet,",
  "We are both the journey and the destination,",
  "Infinite, illuminated, eternally complete.",
];

const totalStars = 8;
let clickedStars = 0;

// background stars
for (let i = 0; i < 80; i++) {
  const bgStar = document.createElement("div");
  bgStar.classList.add("bg-star");
  bgStar.style.left = Math.random() * 100 + "%";
  bgStar.style.top = Math.random() * 100 + "%";
  bgStar.style.animationDelay = `${Math.random() * 3}s`;
  sky.appendChild(bgStar);
}

// clickable stars - below moon
for (let i = 0; i < totalStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  const left = 20 + Math.random() * 60; // 20–80%
  const top = 45 + Math.random() * 40; // 45–85%
  star.style.left = left + "%";
  star.style.top = top + "%";
  star.dataset.index = i;
  sky.appendChild(star);
}

// shooting stars
function spawnShootingStar() {
  const s = document.createElement("div");
  s.classList.add("shooting-star");
  s.style.top = Math.random() * 30 + "%";
  s.style.left = Math.random() * 60 + "%";
  sky.appendChild(s);
  setTimeout(() => s.remove(), 1500);
}
setInterval(
  () => {
    if (Math.random() < 0.6) spawnShootingStar();
  },
  4000 + Math.random() * 4000,
);

// clicking stars
sky.addEventListener("click", (e) => {
  if (e.target.classList.contains("star")) {
    const star = e.target;
    const index = parseInt(star.dataset.index);
    if (!star.classList.contains("clicked")) {
      star.classList.add("clicked");
      showMessage(messages[index % messages.length]);
      clickedStars++;

      // show popup once all stars are clicked
      if (clickedStars === totalStars) {
        setTimeout(() => popup.classList.add("show"), 1200);
      }
    }
  }
});

function showMessage(msg) {
  messageText.textContent = msg;
  messageBox.classList.remove("hidden");
}
closeBtn.addEventListener("click", () => {
  messageBox.classList.add("hidden");
});
