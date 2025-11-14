// Variabelen
let fantalight = 1000000;
// let fantalight2 = 0;
class Autoclicker{
  count = 0;
  cost = 100;
  increase = 1;
  buttontext = "";
  clickpower = 1;

  constructor( newincrease, newcost, newbuttontext, newclickpower ){
    this.increase = newincrease;
    this.cost = newcost;
    this.buttontext = newbuttontext;
    this.clickpower = newclickpower;
  }

  
  bindButton(whichButton){
    whichButton.addEventListener("click", () => {
      if (fantalight >= this.cost) {
        fantalight -= this.cost;
        this.count += 1;
        this.cost = Math.floor(this.cost * this.increase); // kosten stijgen
        whichButton.textContent = this.buttontext +` (kosten: ${this.cost})`;
        updateScore();
        updateAutoClickers();
      }
    });
  }

  increase_clickpower(){
    this.clickpower++;
  }
}

let clicker1 = new Autoclicker(1.2, 400, "buy tea", 1);
// clicker1.increase = 1.2;
// clicker1.cost = 400;
// clicker1.buttontext = "Buy Tea";

let clicker2 = new Autoclicker(1.2, 750, "buy crisps", 7);
// clicker2.increase = 1.2;
// clicker2.cost = 750;
// clicker2.buttontext = "buy Crisps";

let clicker3 = new Autoclicker(1.2, 150, "buy sandwitch", 10);
// clicker3.increase  = 1.2;
// clicker3.cost = 1500;
// clicker3.buttontext = "buy Sandwitch";

let clicker4 = new Autoclicker(1.2, 2000, "buy Token", 20);
// clicker4.increase = 1.2;
// clicker4.cost = 2000;
// clicker4.buttontext = "buy Token";

let clicker5 = new Autoclicker(1.2, 2500, "buy Festabels", 25);
// clicker5.increase = 1.2;
// clicker5.cost = 2500;
// // clicker5.buttontext = "buy Festabels";

let clicker6 = new Autoclicker(1.2, 5000, "buy Meal-upgrade", 30);
// clicker6.increase = 1.2;
// clicker6.cost = 5000;
// clicker6.buttontext = "buy Meal-upgrade";

let clicker7 = new Autoclicker(1.2, 30000, "buy Temptation", 50);
// clicker7.increase = 1.2;
// clicker7.cost = 30000;
// clicker7.buttontext = "buy Tempation";

let clicker8 = new Autoclicker(1.2, 1000000, "buy Fantalight", 100);
// clicker8.increase = 1.2;
// clicker8.cost = 1000000;
// clicker8.buttontext = "buy Fantalight";
// let autoClickers = 0;
// let autoClickers2 = 0;
// let autoClickerCost = 100;
// let autoClickerCosts = 100;

var clickpower = 1;

const scoreEl = document.getElementById("score");
const cookieEl = document.getElementById("fanta");
const buyAutoClickerBtn = document.getElementById("buyAutoClicker");
const autoClickerCountEl = document.getElementById("autoClickerCount");

//2e autoclicker
const scoreEs = document.getElementById("score");
const cookieEs = document.getElementById("fanta");
const buyAutoClickerBtns = document.getElementById("buyAutoClickers");
const autoClickerCountEs = document.getElementById("autoClickerCounts");
//3e autoclicker
const buyAutoClickerBtn3 = document.getElementById("buyClicker3")
const autoClickerCount3 = document.getElementById("Clicker3count")
//4e autoclicker
const buyAutoClickerBtn4 = document.getElementById("buyClicker4")
const autoClickerCount4 = document.getElementById("Clicker4count")
//5e autoclicker
const buyAutoClickerBtn5 = document.getElementById("buyClicker5")
const autoClickerCount5 = document.getElementById("Clicker5count")
//6e autoclicker
const buyAutoClickerBtn6 = document.getElementById("buyClicker6")
const autoClickerCount6 = document.getElementById("Clicker6count")
//7e autoclicker
const buyAutoClickerBtn7 = document.getElementById("buyClicker7")
const autoClickerCount7 = document.getElementById("Clicker7count")
//8e autoclicker
const buyAutoClickerBtn8 = document.getElementById("buyClicker8")
const autoClickerCount8 = document.getElementById("Clicker8count")



// Klikken op cookie
cookieEl.addEventListener("click", () => {
  fantalight = fantalight + clickpower;
  updateScore();
});

// cookieEs.addEventListener("click", () => {
//   fantalight = fantalight + clickpower;
//   updateScore();
// });

// Koop autoclicker
// buyAutoClickerBtn.addEventListener("click", () => {

//   if (fantalight >= clicker1.cost) {
//     fantalight -= clicker1.cost;
//     clicker1.count = clicker1.count + clickpower;
//     clicker1.cost = Math.floor(clicker1.cost * 1); // kosten stijgen
//     buyAutoClickerBtn.textContent = `Koop autoclicker (kosten: ${clicker1.cost})`;
//     updateScore();
//     updateAutoClickers();
//   }
// });
// //2e autoclicker
// buyAutoClickerBtns.addEventListener("click", () => {

//   if (fantalight >= clicker2.cost) {
//     fantalight -= clicker2.cost;
//     clicker2.count = clicker2.count + clickpower;
//     clicker2.cost = Math.floor(clicker2.cost * 1.5); // kosten stijgen
//     buyAutoClickerBtns.textContent = `Koop autoclicker (kosten: ${clicker2.cost})`;
//     updateScore();
//     updateAutoClickers();
//   }
// });


// function bindButton(whichButton, whichClicker, increase){
//   whichButton.addEventListener("click", () => {
//     if (fantalight >= whichClicker.cost) {
//       fantalight -= whichClicker.cost;
//       whichClicker.count = whichClicker.count + clickpower;
//       whichClicker.cost = Math.floor(whichClicker.cost * increase); // kosten stijgen
//       whichButton.textContent = `Koop autoclicker (kosten: ${whichClicker.cost})`;
//       updateScore();
//       updateAutoClickers();
//     }
//   });
// }

clicker1.bindButton(buyAutoClickerBtn);
clicker2.bindButton(buyAutoClickerBtns);
clicker3.bindButton(buyAutoClickerBtn3);
clicker4.bindButton(buyAutoClickerBtn4);
clicker5.bindButton(buyAutoClickerBtn5);
clicker6.bindButton(buyAutoClickerBtn6);
clicker7.bindButton(buyAutoClickerBtn7);
clicker8.bindButton(buyAutoClickerBtn8);
// bindButton(buyAutoClickerBtn, clicker1, 1);
// bindButton(buyAutoClickerBtns, clicker2, 1.5);

// shower 


// Autoclicker produceert cookies
setInterval(() => {
  fantalight += clicker1.count * clicker1.clickpower;
  fantalight += clicker2.count * clicker2.clickpower;
  fantalight += clicker3.count * clicker3.clickpower;
  fantalight += clicker4.count * clicker4.clickpower;
  fantalight += clicker5.count * clicker5.clickpower;
  fantalight += clicker6.count * clicker6.clickpower;
  fantalight += clicker7.count * clicker7.clickpower;
  fantalight += clicker8.count * clicker8.clickpower;
  updateScore();
}, 1000);



// Helpers
function updateScore() {
  scoreEl.textContent = `${fantalight} fantalight`;
  scoreEs.textContent = `${fantalight} fantalight`;
  // localStorage.setItem(updateScore)
  // localStorage.getItem(updateScore)
}

function updateAutoClickers() {
  autoClickerCountEl.textContent = `Tea: ${clicker1.count}`;
  autoClickerCountEs.textContent = `Monster-munch Crisps: ${clicker2.count}`;
  autoClickerCount3.textContent = `Egg & ClispsSandwich: ${clicker3.count}`;
  autoClickerCount4.textContent = `Assit Token: ${clicker4.count}`;
  autoClickerCount5.textContent = `MR. Beast festabels: ${clicker5.count}`;
  autoClickerCount6.textContent = `Meal-upgrade: ${clicker6.count}`;
  autoClickerCount7.textContent = `Temptation room: ${clicker7.count}`;
  autoClickerCount8.textContent = `Fantalight: ${clicker8.count}`;
  
}
