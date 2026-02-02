// Get name from URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "My Love";
function capitalizeFirstLetter(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

const formattedName = capitalizeFirstLetter(name);

document.getElementById("name").innerText = formattedName;
document.getElementById("loveName").innerText = formattedName;


const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.getElementById("questionBox");

// --------------------
// NO button escape logic (Desktop + Mobile)
// --------------------
function moveNoButton() {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width - 10;
  const maxY = containerRect.height - btnRect.height - 10;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile touch
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // prevent click
  moveNoButton();
});

// --------------------
// YES button logic
// --------------------
yesBtn.addEventListener("click", () => {
  document.getElementById("questionBox").classList.add("hidden");
  document.getElementById("loveBox").classList.remove("hidden");
  createHearts();
});

// --------------------
// Heart animation
// --------------------
function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "24px";
    heart.style.animation = "float 4s linear infinite";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}

// Inject heart animation CSS
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
