

let number1 = Math.random()*6+1;
let dice1 = Math.floor(number1);

let number2 = Math.random()*6+1;
let dice2 = Math.floor(number2);

document.querySelector(".img1").setAttribute("src","images/dice"+dice1+".png");

document.querySelector(".img2").setAttribute("src","images/dice"+dice2+".png");
    

    if (dice1 > dice2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    }
    else if (dice1 < dice2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

