<<<<<<< HEAD
// Stickman array
var stickman = [];
var stickmanAlive = ["1"];
var answer = ["1"];

//Guessing button
var btn =document.getElementById('btn');
btn.addEventListener("click", function(event) {
    event.preventDefault();
    // Hangman inputs
    let letter1 = document.getElementById('input1').value;

    // If statement to check if letter D is correct
    if(answer.length < 4) {
        if(stickmanAlive.length == 1) {
            if (letter1 == 'd') {
                letterD.innerHTML = "D"; 
                answer += "1"
            } else {
            }
            if (letter1 == 'D') {
                letterD.innerHTML = "d"; 
                answer += "1"
            } else {
            }
            // If statement to check if letter O is correct
            if (letter1 == 'o') {
                letterO.innerHTML = "o"; 
                answer += "1"
            } else {
            }
            if (letter1 == 'O') {
                letterO.innerHTML = "o"; 
                answer += "1"
            } else {
            }
            // If statement to check if letter is G correct
            if (letter1 == 'g') {
                letterG.innerHTML = "g"; 
                answer += "1"
            } else {
            }
            if (letter1 == 'G') {
                letterG.innerHTML = "g"; 
                answer += "1"
            } else {
            }
        } else {
        }
    } else {
    }
    console.log(letter1.length);
    // Switch to alert player when they guess wrong and adds to var stickman length
    if (answer.length < 4) {
        if (stickmanAlive.length == 1) {
            if (letter1.length != 1) {
            } else {
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
                        stickman += "1";
                        alert("Oops, try again!");
                        wrongTitle.innerHTML += " ";
                        wrongTitle.innerHTML += letter1;
                    }
            }
        } else {
        }
    } else {
        alert("Congradulations! You saved the stick man!");
    }
    // makes stickman appear when player answers wrong
    if (answer.length < 4) {
        switch(stickman.length) {
            case 1:
                head.innerHTML = "o";
                break;
            case 2:
                torso.innerHTML = "|";
                break;
            case 3:
                arms.innerHTML = "_";
                break;
            case 4:
                legs.innerHTML = "^";
                alert("Oh no! You couldn't save them.");
                stickmanAlive += "1";
                break;
        }
    }   
    input1.value = '';
    });
=======
// Stickman array
var stickman = [];
var stickmanAlive = ["1"];
var answer = ["1"];

//Guessing button
var btn =document.getElementById('btn');
btn.addEventListener("click", function(event) {
    event.preventDefault();
    // Hangman inputs
    let letter1 = document.getElementById('input1').value;

    // If statement to check if letter D is correct
    if(answer.length < 4) {
        if(stickmanAlive.length == 1) {
            if (letter1 == 'd') {
                letterD.innerHTML = "D"; 
                answer += "1"
            } else {
            }
            if (letter1 == 'D') {
                letterD.innerHTML = "d"; 
                answer += "1"
            } else {
            }
            // If statement to check if letter O is correct
            if (letter1 == 'o') {
                letterO.innerHTML = "o"; 
                answer += "1"
            } else {
            }
            if (letter1 == 'O') {
                letterO.innerHTML = "o"; 
                answer += "1"
            } else {
            }
            // If statement to check if letter is G correct
            if (letter1 == 'g') {
                letterG.innerHTML = "g"; 
                answer += "1"
            } else {
            }
            if (letter1 == 'G') {
                letterG.innerHTML = "g"; 
                answer += "1"
            } else {
            }
        } else {
        }
    } else {
    }
    console.log(letter1.length);
    // Switch to alert player when they guess wrong and adds to var stickman length
    if (answer.length < 4) {
        if (stickmanAlive.length == 1) {
            if (letter1.length != 1) {
            } else {
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
                        stickman += "1";
                        alert("Oops, try again!");
                        wrongTitle.innerHTML += " ";
                        wrongTitle.innerHTML += letter1;
                    }
            }
        } else {
        }
    } else {
        alert("Congradulations! You saved the stick man!");
    }
    // makes stickman appear when player answers wrong
    if (answer.length < 4) {
        switch(stickman.length) {
            case 1:
                head.innerHTML = "o";
                break;
            case 2:
                torso.innerHTML = "|";
                break;
            case 3:
                arms.innerHTML = "_";
                break;
            case 4:
                legs.innerHTML = "^";
                alert("Oh no! You couldn't save them.");
                stickmanAlive += "1";
                break;
        }
    }   
    input1.value = '';
    });
>>>>>>> 84b7b43ca9b89c3d283b123046487ef8dad5572b
