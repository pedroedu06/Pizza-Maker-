
//contador de pizza

let pizzasCount = 400;
let doubleBought = 0;
let tripleBought = 0;
let maxDoubleBought = 5;
let maxTripleBought = 3;

const pizzamake = document.querySelector('#pizzamake');
const count = document.querySelector('#count');

//btns 

const double = document.querySelector('#double');
const triple = document.querySelector('#triple');
const reset = document.querySelector('#resetAll');

//minscore

const minDouble = 150;
const minTriple = 400;
const resetAll = 2000000;

function pizzaGame(){
    pizzasCount ++;
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

pizzamake.addEventListener('click', pizzaGame);
double.addEventListener('click', doublePower);
triple.addEventListener('click', triplePower);
reset.addEventListener('click', resetGame);

//click x2 

const clicksx2 = document.querySelector('#clickx2');
const clickx2 = 2000;