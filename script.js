// Global Variables

var btn =document.getElementById('btn');
btn.addEventListener("click", function(event) {
    event.preventDefault();
    // Hangman inputs
    let letter1 = document.getElementById('input1').value;

    //Hangman <p>
    let letterA = document.getElementById('LetterD');

    // If statement to check if letter D is correct
    if (letter1 == 'd') {
        letterD.innerHTML = "D"; 
    } else {
        alert("Oops, try again!")
    }
    if (letter1 == 'D') {
        letterD.innerHTML = "d"; 
    } else {
    }
    // If statement to check if letter O is correct
    if (letter1 == 'o') {
        letterO.innerHTML = "o"; 
    } else {
    }
    if (letter1 == 'O') {
        letterO.innerHTML = "o"; 
    } else {
    }
    // If statement to check if letter is G correct
    if (letter1 == 'g') {
        letterG.innerHTML = "g"; 
    } else {
    }
    if (letter1 == 'G') {
        letterG.innerHTML = "g"; 
    } else {
    }
    
    });

    // If statement to check igf letter is correct