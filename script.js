//Guessing button
var btn =document.getElementById('btn');
btn.addEventListener("click", function(event) {
    event.preventDefault();
    // Hangman inputs
    let letter1 = document.getElementById('input1').value;

    // If statement to check if letter D is correct
    if (letter1 == 'd') {
        letterD.innerHTML = "D"; 
    } else {
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
    // Switch to alert player when they guess wrong
    switch(letter1) {
        case "d": 
            break;
        case "D": 
            break;
        case "o": 
            break;
        case "O": 
            break;
        case "g": 
            break;
        case "G": 
            break;
        default:
            alert("Oops, try again!");
    }

    });
