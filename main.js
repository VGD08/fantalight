// Variabelen
let fantalight = 1000;
// let fantalight2 = 0;

let autoClickers = 0;
let autoClickerCost = 100;
let autoClickerCost2 = 100;
var clickpower = 1;

const scoreEl = document.getElementById("score");
const cookieEl = document.getElementById("fanta");
const buyAutoClickerBtn = document.getElementById("buyAutoClicker");
const autoClickerCountEl = document.getElementById("autoClickerCount");

//2e autoclicker
const cookieEs = document.getElementById("fanta");
const buyAutoClickerBtns = document.getElementById("buyAutoClickers");
const autoClickerCountEs = document.getElementById("autoClickerCounts");
// shower

const cookieE2 = document.getElementById("fanta");
const buyAutoClickerBtn2 = document.getElementById("buyAutoClicker2");
const autoClickerCountE2 = document.getElementById("autoClickerCount2");

// Klikken op cookie
cookieEl.addEventListener("click", () => {
  fantalight = fantalight + clickpower;
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
//2e autoclicker
buyAutoClickerBtn.addEventListener("click", () => {

  if (fantalight >= autoClickerCost) {
    fantalight -= autoClickerCost;
    autoClickers = autoClickers + clickpower;
    autoClickerCost = Math.floor(autoClickerCost * 1); // kosten stijgen
    buyAutoClickerBtns.textContent = `Koop autoclicker (kosten: ${autoClickerCost})`;
    updateScore();
    updateAutoClickers();
  }
});

// shower 
buyAutoClickerBtn2.addEventListener("click", () => {
  console.log("Fantalight 2 waarde:" + fantalight);
  console.log("autoclickercostwaarde 2 waarde:" + autoClickerCost);

  if (fantalight >= autoClickerCost2) {
  console.log("test")
  

    fantalight -= autoClickerCost2;
    console.log(fantalight)
    clickpower++;
    console.log(clickpower);
    autoClickerCost2 = Math.floor(autoClickerCost2 * 1.5); // kosten stijgen
    buyAutoClickerBtn2.textContent = `shower minutes (kosten: ${autoClickerCost2})`;
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
