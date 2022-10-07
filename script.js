// Input for user answer
let inputAnswer = document.getElementById('inputAnswer');
// Arrays for counting user progress and holding the answer
let letters = [];
let wrongLetterCount = [];
let correctLetterCount = [];
let stickmanAlive = [];

// Stickman array
var stickman = [];
var stickmanAlive = ["1"];
var answer = ["1"];

// function to get and breakdown answer
async function getWord() {
    let wordData = await fetch('https://random-word-api.herokuapp.com/word')
    .then(response => response.json())
    // Disables button to prevent spam
    document.getElementById("getWord").disabled = true;

    // Removes previous word from page
    for (var i = 0; i < letters.length; i++) {
        $(`#blankSpace${[i]}`).remove();
    }
    for (var i =0; i < wrongLetterCount.length; i++) {
        $(`#wrongLetter${[i]}`).remove();
    }
    // Reset counting arrays
    letters = [];
    wrongLetterCount = [];
    correctLetterCount = [];
    stickmanAlive = [];

    // Split word into individual letter in an array
    let word = "";
    word = wordData[0];
    letters = word.split("");

    // Filters out words of a certain length (eventually have multiple options for user)
    if (letters.length <= 5) {

        document.getElementById("getWord").disabled = false;

        for (var i = 0; i < letters.length; i++) {
            console.log(letters[i]);
            let blankSpace = $(`<p>_</p>`);
            $(blankSpace).attr('id', `blankSpace${[i]}`);
            $('.wordDiv').append(blankSpace);
        }
    } else {
        // Runs function again until it finds the correct word length
        getWord();
    }
}


// Button that submits users guess
var guessbtn = document.getElementById('guessBtn');
guessbtn.addEventListener("click", function(event) {
    event.preventDefault(); 

    if (inputAnswer.value == '') {
        alert("Try clicking on the blue box above GUESS and typing something.")
    } else {
        if (stickmanAlive.length != 1) {
            if (correctLetterCount.length != letters.length) {
                // Checks if users guess is wrong
                let checkForWrong = letters.find(function(checkingAnswer) {
                    return checkingAnswer.startsWith(inputAnswer.value);
                });
                // If the answer is wrong, adds hangman part and puts wrong letter on page
                if (checkForWrong == null) {
                    // Adds wrong letter to page
                    let wrongLetter = inputAnswer.value
                    let wrongLetterUpper = $(`<p>${wrongLetter.toUpperCase()}</p>`);
                    $(wrongLetterUpper).attr('id', `wrongLetter${wrongLetterCount.length}`);
                    $('.wrongLetters').append(wrongLetterUpper);

                    // Adds hangman
                    wrongLetterCount += '1';
                    switch(wrongLetterCount.length) {
                        case 1:
                            head.innerHTML = "o";
                            console.log('head')
                            break;
                        case 2:
                            torso.innerHTML = "|";
                            console.log('body')
                            break;
                        case 3:
                            arms.innerHTML = "_";
                            console.log('knees')
                            alert("Last guess!")
                            break;
                        case 4:
                            legs.innerHTML = "^";
                            console.log('and toes!')
                            alert("Oh no! You couldn't save them. Better luck next time");
                            // Reveals answer for user
                            letters.forEach(correctAnswer);
                            function correctAnswer (letter, i) {
                                let letterUpper = letter.toUpperCase();
                                $(`#blankSpace${i}`).html(letterUpper);
                                }
                            stickmanAlive += "1";
                            break;
                    }
                }
                // Checks if the users answer is correct, if so, places the correct letter on page
                letters.forEach(correctAnswer);

                function correctAnswer (letter, i) {
                    if (inputAnswer.value == letter) {
                    correctLetterCount += '1';
                    let letterUpper = letter.toUpperCase();
                    $(`#blankSpace${i}`).html(letterUpper);
                    }
                }
            }
        } else {
            alert("Want to try again? click on 'Get a new word!'");
        }
                // Alerts the user if they have one
        if (correctLetterCount.length == letters.length) {
                alert("Congradulations! You saved the stick man!");
                stickmanAlive += "1";
        }

    }
    // Clears input for next guess
    inputAnswer.value = '';
});