"use strict"

let currentMovie;
let guessesRemaining;
let playerGuess;


let guessesText;
let wordContainer = document.getElementById("word-container");
let image = document.querySelector("img");
let newBtn = document.getElementById("new");
let letterSelectBtns = document.querySelectorAll(".letter-select");
let guessClueDisplay = document.getElementById("guess-clue");
let hintRevealBtn = document.getElementById("hint-reveal");


const once = {
    once: true
};

window.addEventListener("load", init);
newBtn.addEventListener("click", init);
hintRevealBtn.addEventListener("click", hintReveal);



function init() {

    currentMovie = chooseMovie(movies);

    guessesRemaining = 10;

    guessClueDisplay.innerHTML = 'You have <span id="guesses">10</span> guesses remaining';

    guessesText = document.getElementById("guesses");

    hintRevealBtn.textContent = "HINT";

    resetBtnsStyle();

    hintRevealBtn.classList.remove('disabled');

    removeAnswerDisplay();

    createEmptyAnswerDisplay(currentMovie);

    image.src = `images/${guessesRemaining}.png`;

    playerGuess = resetPlayerGuess(currentMovie.title.toLowerCase());

    attachLetterSelectEventListenerAll();
}

function letterSelect() {

    let letter = this.textContent.toLowerCase();

    let movieTitle = currentMovie.title.toLowerCase();

    if (movieTitle.indexOf(letter) == -1) {
        
        guessesRemaining -= 1;

        image.src = `images/${guessesRemaining}.png`;

        guessesText.textContent = guessesRemaining.toString();

        guessClueDisplay.innerHTML = `You have <span id="guesses">${guessesRemaining}</span> guesses remaining`;
    }
    else {
        
        revealLetters(`div[letter='${letter}']`);

        updatePlayerGuess(letter)
    }

    this.classList.remove('active');

    this.classList.add('disabled');

    if (guessesRemaining === 0) gameLoss();

    if (checkGameWon()) gameWon();
}



function chooseMovie(movies) {

    let randomNumber = Math.floor(Math.random() * movies.length);

    return movies[randomNumber];
}


function resetBtnsStyle() {

    for (let i = 0; i < letterSelectBtns.length; i++) {

        letterSelectBtns[i].classList.remove('disabled', 'active');

        letterSelectBtns[i].classList.add('active');
    }
}

function setBtnStyleDisabledAll() {

    for (let i = 0; i < letterSelectBtns.length; i++) {

        letterSelectBtns[i].classList.remove('disabled', 'active');

        letterSelectBtns[i].classList.add('disabled');
    }
}






function createWordDisplayElement() {

    let span = document.createElement("span");

    span.classList.add("word-display");

    return span;
}


function createLetterDisplayElement(letter) {

    let div = document.createElement("div");

    div.classList.add("letter-display");

    if (letter.toUpperCase() === letter) div.classList.add("capital");


    if (letter === "space") {

        div.classList.add(letter);
    } else {

       div.setAttribute("letter", letter.toLowerCase()); 
    }

    

    return div
}

function createAndAppendLetterDisplayElements(word, wordDisplayElement) {

    for (let i = 0; i < word.length; i++) {

        let letterDisplayElement = createLetterDisplayElement(word[i]);

        wordDisplayElement.append(letterDisplayElement);
    }
}

function createAndAppendEmptyLetterDisplayElement() {

    let wordDisplayElement = createWordDisplayElement();

    wordContainer.append(wordDisplayElement);

    wordDisplayElement.append(createLetterDisplayElement("space"));
}



function createEmptyAnswerDisplay(currentMovie) {

    let titleArray = currentMovie.title.split(" ");

    for (let i = 0; i < titleArray.length; i++) {

        let wordDisplayElement = createWordDisplayElement();

        wordContainer.append(wordDisplayElement);

        let word = titleArray[i];

        createAndAppendLetterDisplayElements(word, wordDisplayElement);

        createAndAppendEmptyLetterDisplayElement();
    }

    wordContainer.removeChild(wordContainer.lastChild);
}

function removeAnswerDisplay() {

    while (wordContainer.lastChild) {

        wordContainer.removeChild(wordContainer.lastChild);
    }
}



function resetPlayerGuess(currentMovie) {

    let currentPlayerGuess = Array.from(currentMovie);

    for (let i = 0; i < currentPlayerGuess.length; i++) {

        if (currentPlayerGuess[i] == ' ') currentPlayerGuess[i] = '*';
    }

    return currentPlayerGuess;
}



function attachLetterSelectEventListenerAll() {

    for (let i = 0; i < letterSelectBtns.length; i++) {

        letterSelectBtns[i].addEventListener('click', letterSelect, once);
    }
}

function removeLetterSelectEventListenerAll() {

    for (let i = 0; i < letterSelectBtns.length; i++) {

        letterSelectBtns[i].removeEventListener('click', letterSelect);
    }
}



function updatePlayerGuess(letter) {

    playerGuess.forEach(function(item,index) {

        playerGuess[index] = (item == letter) ? '*' : playerGuess[index];
    });
}





function gameLoss() {

    setBtnStyleDisabledAll();

    removeLetterSelectEventListenerAll();

    guessClueDisplay.innerHTML = "Game Over"

    hintRevealBtn.textContent = "REVEAL"
}

function checkGameWon() {

    for (let i = 0; i < playerGuess.length; i++) {

        if (playerGuess[i] !== '*') return false;
    }

    return true;
}

function gameWon() {

    setBtnStyleDisabledAll();

    hintRevealBtn.classList.add('disabled');

    removeLetterSelectEventListenerAll();

    guessClueDisplay.innerHTML = "You Win!"
}




function hintReveal() {

    if (hintRevealBtn.textContent === "HINT" && !(checkGameWon())) {

        guessClueDisplay.innerHTML = currentMovie.clue;
    }
    else if (hintRevealBtn.textContent === "REVEAL") {

        revealLetters(".letter-display");

        hintRevealBtn.classList.add('disabled');
    }
}

function revealLetters(selector) {

    let letterDisplays = document.querySelectorAll(selector);

    letterDisplays.forEach(function(element) {

        let letter = element.getAttribute('letter');

        if (letter) element.textContent = letter;
    })
}


document.addEventListener('keydown', function(e) {

    let letter = `${e.key.toLowerCase()}`;

    let target = document.querySelector(`.letter-select.${letter}`);

    if (target) target.click();
});