// Card Variables
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack', 'two', 'three', ' four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

// DOM Variables
let textArea = document.getElementById('text-area');
let newButton = document.getElementById('new-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

// Game Variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];


hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newButton.addEventListener('click', function () {
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck); // to shuffle the cards and display it in DOM
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];
    newButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    showStatus();

});

function createDeck() {
    let deck = [];

    for (let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++) {
        for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {
            let card = {suit: suits[suitsIdx], value: values[valuesIdx]};
            deck.push(card);
        }
    }
    return deck;
}

function getCardString(card) {
    return card.value + ' of ' + card.suit;
}

function getNextCard() {
    return deck.shift();

}
function shuffleDeck(deck) {
    for (let i=0; i<=deck.length; i++) { // every card in the deck
        let swapIdx = Math.trunc(Math.random() * deck.length); // calc the index of the card that we can swap with
        let tmp = deck[swapIdx];  // in tmp
        deck[swapIdx] = deck[i]; // swapping deck [i] with deck swapIndex
        deck[i]= tmp;

    }
}

function showStatus() {
    // if the game is not started alt ===false
    if (!gameStarted) {
        textArea.innerText = 'Welcome to BlackJack!';
    }
    console.log('show status executed')
    for( var i=0; i<deck.length; i++) {
        textArea.innerText += '\n' + getCardString(deck[i]);
        console.log(555,getCardString(deck[i]));
    }

}



// let deck = createDeck();


/*
let playerCards = [getNextCard(), getNextCard()];
console.log(' You are dealt:');
console.log("" + getCardString(playerCards[0]));
console.log("" + getCardString(playerCards[1]));
*/


function changeCard(card) {
    card.suit = "clubs";

}



