const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Open envelope
envelope.addEventListener("click", () => {
  envelope.style.opacity = "0";
  envelope.style.transition = "opacity 0.4s ease";

  setTimeout(() => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
      document.querySelector(".letter-window").classList.add("open");
    }, 50);
  }, 400);
});

// Runaway NO button
noBtn.addEventListener("mouseover", () => {
  const distance = 180;
  const angle = Math.random() * Math.PI * 2;

  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES clicked
yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee! 💖";
  catImg.src = "cat_dance.gif";

  document.querySelector(".letter-window").classList.add("final");
  buttons.style.display = "none";
  finalText.style.display = "block";
});