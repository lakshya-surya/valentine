const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "My Love";

document.getElementById("name").innerText = name;
document.getElementById("loveName").innerText = name;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  document.getElementById("questionBox").classList.add("hidden");
  document.getElementById("loveBox").classList.remove("hidden");
  createHearts();
});

function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "24px";
    heart.style.animation = "float 4s linear infinite";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
