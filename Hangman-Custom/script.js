// Stickman array
var stickman = [];
var stickmanAlive = ["1"];

// Anwsers + keyword setting arrays
var answer = ["1"];
var keyword = ["1"];

//Setiing button
var btn2 = document.getElementById('btn2');
btn2.addEventListener("click", function(event) {
    event.preventDefault();
    //inputs for seting keyword
    var inputSet1js = document.getElementById('inputSet1').value;
    var inputSet2js = document.getElementById('inputSet2').value;
    var inputSet3js = document.getElementById('inputSet3').value;
    var inputSet4js = document.getElementById('inputSet4').value;
    var inputSet5js = document.getElementById('inputSet5').value;
    var inputSet6js = document.getElementById('inputSet6').value;
    var inputSet7js = document.getElementById('inputSet7').value;
    // Sets the blanks
    if (inputSet1js.length == 1) {
        letterA.innerHTML = '_';
        keyword += '1';
    }
    if (inputSet2js.length == 1) {
        letterB.innerHTML = '_';
        keyword += '1';
    }
    if (inputSet3js.length == 1) {
        letterC.innerHTML = '_';
        keyword += '1';
    }
    if (inputSet4js.length == 1) {
        letterD.innerHTML = '_';
        keyword += '1';
    }
    if (inputSet5js.length == 1) {
        letterE.innerHTML = '_';
        keyword += '1';
    }
    if (inputSet6js.length == 1) {
        letterF.innerHTML = '_';
        keyword += '1';
    }
    if (inputSet7js.length == 1) {
        letterG.innerHTML = '_';
        keyword += '1';
    }
    console.log(keyword.length);
//Guessing button
var btn =document.getElementById('btn');
btn.addEventListener("click", function(event) {
    event.preventDefault();

        // Hangman input
        let letter1 = document.getElementById('input1').value;
        //code to check letters
        if(answer.length < 8) {
            if(stickmanAlive.length == 1) {
                // If statement to check if first key letter is correct
                if (inputSet1js.length == 1) {
                    if (letter1 == inputSet1js) {
                        letterA.innerHTML = inputSet1js; 
                        answer += "1"
                    } else {
                    }
                } else {
                }
                // If statement to check if secound letter is correct
                if (inputSet2js.length == 1) {
                    if (letter1 == inputSet2js) {
                        letterB.innerHTML = inputSet2js; 
                        answer += "1"
                    } else {
                    }
                } else {
                }
                // If statement to check if third letter is correct
                if (inputSet3js.length == 1) {
                    if (letter1 == inputSet3js) {
                        letterC.innerHTML = inputSet3js; 
                        answer += "1"
                    } else {
                    }
                } else {
                }
                // If statement to check if forth key letter is correct
                if (inputSet4js.length == 1) {
                    if (letter1 == inputSet4js) {
                        letterD.innerHTML = inputSet4js; 
                        answer += "1"
                    } else {
                    }
                } else {
                }
                // If statement to check if fith key letter is correct
                if (inputSet5js.length == 1) {
                    if (letter1 == inputSet5js) {
                        letterE.innerHTML = inputSet5js; 
                        answer += "1"
                    } else {
                    }
                } else {
                }
                // If statement to check if sixth key letter is correct
                if (inputSet6js.length == 1) {
                    if (letter1 == inputSet6js) {
                        letterF.innerHTML = inputSet6js; 
                        answer += "1"
                    } else {
                    }
                } else {
                }
                // If statement to check if sevanth key letter is correct
                if (inputSet7js.length == 1) {
                    if (letter1 == inputSet7js) {
                        letterG.innerHTML = inputSet7js; 
                        answer += "1"
                    } else {
                    }
                } else {
                }
            } else {
            }
        } else {
        }
        // Switch to alert player when they guess wrong and adds to var stickman length
        if (answer.length < keyword.length) {
            if (stickmanAlive.length == 1) {
                if (letter1.length != 1) {
                } else {
                    switch(letter1) {
                        case inputSet1js: 
                            break;
                        case inputSet2js: 
                            break;
                        case inputSet3js: 
                            break;
                        case inputSet4js: 
                            break;
                        case inputSet5js: 
                            break;
                        case inputSet6js: 
                            break;
                        case inputSet7js: 
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
        if (answer.length < keyword.length) {
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
    inputSet1.value = '';
    inputSet2.value = '';
    inputSet3.value = '';
    inputSet4.value = '';
    inputSet5.value = '';
    inputSet6.value = '';
    inputSet7.value = '';
});
    
