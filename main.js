// Variabelen
let fantalight = 1000;
// let fantalight2 = 0;

let autoClickers = 0;
let autoClickerCost = 100;
let clickpower = 1;

const scoreEl = document.getElementById("score");
const cookieEl = document.getElementById("fanta");
const buyAutoClickerBtn = document.getElementById("buyAutoClicker");
const autoClickerCountEl = document.getElementById("autoClickerCount");
// shower

const cookieE2 = document.getElementById("fanta");
const buyAutoClickerBtn2 = document.getElementById("buyAutoClicker2");
const autoClickerCountE2 = document.getElementById("autoClickerCount2");

// Klikken op cookie
cookieEl.addEventListener("click", () => {
  fantalight++;
  updateScore();
});

// Koop autoclicker
buyAutoClickerBtn.addEventListener("click", () => {

  if (fantalight >= autoClickerCost) {
    fantalight -= autoClickerCost;
    autoClickers = autoClickers + clickpower;
    autoClickerCost = Math.floor(autoClickerCost * 1); // kosten stijgen
    buyAutoClickerBtn.textContent = `Koop autoclicker (kosten: ${autoClickerCost})`;
    updateScore();
    updateAutoClickers();
  }
});
// shower 
buyAutoClickerBtn2.addEventListener("click", () => {
  console.log("Fantalight 2 waarde:" + fantalight);
  console.log("autoclickercostwaarde 2 waarde:" + autoClickerCost);

  if (fantalight >= autoClickerCost) {
  console.log("test")

    fantalight -= autoClickerCost;
    clickpower++;
    console.log(fantalight)
    
    autoClickerCost = Math.floor(autoClickerCost * 1); // kosten stijgen
    buyAutoClickerBtn2.textContent = `shower minutes (kosten: ${autoClickerCost})`;
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
   autoClickerCountE2.textContent = `test: ${clickpower}`;
}
