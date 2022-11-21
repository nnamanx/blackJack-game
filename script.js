let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Naman",
    chips: 145
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

console.log(cards);

// Random Card Function
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 11) + 1;
    return randomNumber;
}

// Start Game Function
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

// Render Game Function
function renderGame() {

    cardsEl.textContent = "Cards: "
    // Displaying array
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    // Condition for checking cases of 21
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = ("Do you want to draw a new card?");
    } else if (sum === 21) {
        message = ("You've got Blackjack!");
        hasBlackjack = true;
    } else {
        message = ("You are out of the game!");
        isAlive = false;
    }

    messageEl.textContent = message;
}

// New Card Function
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        document.getElementById("render-game").textContent = "New Game";
        renderGame();
    } else {
        document.getElementById("new-card").textContent = "FAIL";
    }

}