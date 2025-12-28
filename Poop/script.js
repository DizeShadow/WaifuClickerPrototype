const moneydiv = document.getElementById("money");
const multiplierdiv = document.getElementById("multiplier")
const clickBtn = document.getElementById("button");
const poopBtn = document.getElementById("poop");
const peeBtn = document.getElementById("pee");
const textBox = document.getElementById("text");
const resetBtn = document.getElementById("reset");

let money = 0;
let multiplier = 1;

const multipliers = {
    poop:{
        value:2,
        price:10,
        name:"Upgrade 1"
    },
    pee:{
        value:3,
        price:20,
        name:"Upgrade 2"
    },
}

function updateMoney(){
    moneydiv.innerText = "Money: " + money;
    multiplierdiv.innerText = "Click Value: " + multiplier;
}

function addMoney(){
    money += multiplier;
    textBox.innerText = "";
    updateMoney();
}

function addMultiplier(name){
    if(money >= multipliers[name].price){
        console.log("this is responding");
        money -= multipliers[name].price;
        multiplier += multipliers[name].value;
        textBox.innerText = "Bought " + multipliers[name].name;
        //setTimeout(() => {textBox.innerText = "";}, 1500);
    }else{
        console.log("this is responding2");
        textBox.innerText = "You Cannot Afford This.";
        //setTimeout(() => {textBox.innerText = "";}, 1500);
    }
    updateMoney();
}

function resetGame(){
    money = 0;
    multiplier = 1
    updateMoney();
}

clickBtn.addEventListener("click",addMoney)
poopBtn.addEventListener("click",function(){addMultiplier("poop")})
peeBtn.addEventListener("click",function(){addMultiplier("pee")})
resetBtn.addEventListener("click",resetGame);
