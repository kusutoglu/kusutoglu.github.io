let randomNumber1 = Math.floor(Math.random()*6+1)
let randomDiceImage1 = `images/dice${randomNumber1}.png`

let randomNumber2 = Math.floor(Math.random()*6+1)
let randomDiceImage2 = `images/dice${randomNumber2}.png`

document.querySelector(".img1").setAttribute("src",randomDiceImage1)
document.querySelector(".img2").setAttribute("src",randomDiceImage2)

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Win⭐"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 Win⭐"
} else {
    document.querySelector("h1").innerHTML = "Draw 👀"
}

const btnDOM = document.querySelector(".btn")
btnDOM.addEventListener("click", function() {
    window.location.reload();
});