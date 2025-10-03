// Variabelen
let fantalight = 0;
let autoClickers = 0;
let autoClickerCost = 100;

const scoreEl = document.getElementById("score");
const cookieEl = document.getElementById("fanta");
const buyAutoClickerBtn = document.getElementById("buyAutoClicker");
const autoClickerCountEl = document.getElementById("autoClickerCount");

// Klikken op cookie
cookieEl.addEventListener("click", () => {
  fantalight++;
  updateScore();
});

// Koop autoclicker
buyAutoClickerBtn.addEventListener("click", () => {
  if (fantalight >= autoClickerCost) {
    fantalight -= autoClickerCost;
    autoClickers++;
    autoClickerCost = Math.floor(autoClickerCost * 1); // kosten stijgen
    buyAutoClickerBtn.textContent = `Koop autoclicker (kosten: ${autoClickerCost})`;
    updateScore();
    updateAutoClickers();
  }
});

// Autoclicker produceert cookies
setInterval(() => {
  fantalight += autoClickers;
  updateScore();
}, 1000);

// Helpers
function updateScore() {
  scoreEl.textContent = `${fantalight} fantalight`;
}

function updateAutoClickers() {
  autoClickerCountEl.textContent = `Autoclickers: ${autoClickers}`;
}
