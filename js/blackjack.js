let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack', 'two', 'three', ' four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

let textArea = document.getElementById('text-area');
let newButton = document.getElementById('new-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');
hitButton.style.display ='none';
stayButton.style.display='none';
newButton.addEventListener('click', function () {
    textArea.innerText = 'Game Started.........';
    newButton.style.display= 'none';
    hitButton.style.display ='inline';
    stayButton.style.display='inline';

});

function createDeck() {
    let deck = [];

    for (let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++) {
        for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {
            let card = { suit : suits[suitsIdx], value: values[valuesIdx]};
            deck.push(card);
        }
    }
    return deck;

}

let deck = createDeck();

function getNextCard() {
    return deck.shift();

}
/*
for (let i = 0; i < deck.length; i++) {
    console.log(deck[i]);
}*/

function getCardString(card) {
    return card.value + ' of ' + card.suit;
}
let playerCards = [getNextCard(), getNextCard()];
console.log(' You are dealt:');
console.log("" + getCardString(playerCards[0]));
console.log("" + getCardString(playerCards[1]));


function changeCard(card) {
    card.suit = "clubs";

}



