function changeText() {
    let name = window.prompt("Please Enter your Name", "Welcome");
    if (name == null || name === "") {
        document.getElementById("textChange").innerHTML = "to BlackJack Game"
    } else {
        document.getElementById("textChange").innerHTML = name;
    }

}

function myFunction(favNumber) {
    let myNumber = favNumber + 100;
    return myNumber;
}

let result = myFunction(55);
console.log('Result:', result);


let cards = [
    {
        suit: 'Hearts',
        value: 'Queen'
    },
    {
        suit: 'clubs',
        value: 'Jack'
    },
];
// changeCard(cards);
console.log(cards[1].value); // jack

/*let result = Math.random() * 52;
result = Math.trunc(result);*/

// let result = new Date().toDateString(); // in simple format date only
/*

let result= "Hello Ragavan";
result =result.toUpperCase();
console.log(result);
*/


let paragraph = document.getElementById('text-area');

paragraph.innerText = "The text is changed";

let okButton = document.getElementById('ok-button');
// hide initially
paragraph.style.display = 'none';
okButton.addEventListener('click', function () {
    console.log('Button Triggered');
    // paragraph.innerText = 'Button Clicked';
    //Display the text when the button is clicked
    paragraph.style.display = 'block';
});
