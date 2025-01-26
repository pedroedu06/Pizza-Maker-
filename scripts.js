
//contador de pizza

let pizzasCount = 0;
let pizzasperClick = 1;
let doubleBought = 0;
let tripleBought = 0;
let clickx2Bought = 0;
let maxDoubleBought = 5;
let maxTripleBought = 3;
let maxClickx2Bought = 1;

const pizzamake = document.querySelector('#pizzamake');
const count = document.querySelector('#count');

//btns 

const double = document.querySelector('#double');
const triple = document.querySelector('#triple');
const click2x = document.querySelector('#clickx2');
const reset = document.querySelector('#resetAll');

//minscore

const minDouble = 150;
const minTriple = 400;
const minClickX2 = 2000;
const resetAll = 200000;

function pizzaGame(){
    pizzasCount += pizzasperClick;
    updatePizzas();
}

function doublePower() {
    if (pizzasCount >= minDouble && doubleBought < maxDoubleBought) {
        pizzasCount -= minDouble;
        pizzasCount *= 2;
        doubleBought++;
        updatePizzas();      
    }

    if (doubleBought === maxDoubleBought) {
        double.disabled = true;
        window.alert("Atingiu o Limite de compra!");
    }
}


function triplePower(){

    if (pizzasCount >= minTriple && tripleBought < maxTripleBought){
        pizzasCount -= minTriple;
        pizzasCount *= 3;
        tripleBought++;
        updatePizzas();
    }

    if (tripleBought === maxTripleBought) {
        triple.disabled = true;
        window.alert("Atingiu o Limite de compra!")
    }
}

function doubleclickPower() {
    if (pizzasCount >= minClickX2){
        pizzasCount -= minClickX2;
        pizzasperClick *= 2;
        clickx2Bought ++;
        updatePizzas();
    }

    if (clickx2Bought === maxClickx2Bought){
        clicks2x.disabled = true;
        window.alert("Atingiu o Limite de compra!")
    }
}

function resetGame() {
    if (pizzasCount >= resetAll){
        pizzasCount = 0;
        updatePizzas();
    } else {
        window.alert("Pizza insuficientes!")
    }
}

function updatePizzas(){
    count.textContent = pizzasCount;
}

//eventos de click

pizzamake.addEventListener('click', (e) =>{
    pizzaGame();
    createParticula(e.clientX, e.clientY)
});
double.addEventListener('click', doublePower);
triple.addEventListener('click', triplePower);
click2x.addEventListener('click', doubleclickPower)
reset.addEventListener('click', resetGame);

//cookies up 

const createParticula = (x,y) =>{
    const pizzaClicks = document.querySelector('.pizza-clicks');
    
    const particulas = document.createElement("img");
    particulas.setAttribute("src", "assets/icons8-pizza-100 (1).png");
    particulas.setAttribute("class", "pizza-particle");
    particulas.style.position = "absolute";
    particulas.style.left = x + 'px';
    particulas.style.right = y + 'px';

    pizzaClicks.appendChild(particulas);

    setTimeout(() =>{
        pizzaClicks.removeChild(particulas);
    }, 3000)
}




