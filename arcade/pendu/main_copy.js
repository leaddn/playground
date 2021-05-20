const word_table = ["communication",
                    "embarrassment",
                    "administration",
                    "constellation",
                    "preoccupation",
                    "recommendation",
                    "inappropriate",
                    "discrimination",
                    "consideration",
                    "rehabilitation",
                    "extraterrestrial",
                    "characteristic",
                    "identification",
                    "disappointment",
                    "qualification",
                    "revolutionary",
                    "responsibility",
                    "confrontation",
                    "investigation",
                    "strikebreaker"]

var myPix = new Array("img/img1.png", "img/img2.png", "img/img3.png", "img/img4.png", "img/img5.png", "img/img6.png", "img/img7.png", "img/img8.png", "img/img9.png", "img/img10.png");
const alphabet = "abcdefghijklmnopqrstuvwxyz";

var guess_count = 10;
var guessSubmit = document.getElementById("guessButton");
guessSubmit.style.display = "none";
/* =========================================== */

// Choose random word from list
function chooseWord(word_list) {
    var randomNum = Math.floor(Math.random() * word_list.length);
    var word = word_list[randomNum];
    return word;
}

// Show Hangman
function choosePic () {
    document.getElementById("hangman").src = myPix[guess_count-1];
    //console.log(myPix[guess_count]);
}

// Assign button to word letter
function wordToButton(word) {
    var letter_list = [];
    for(var i in word) {
        var btn_letter = document.createElement("BUTTON");
        btn_letter.style.color = "#EFEFEF";
        var letter = word[i];
        btn_letter.innerHTML = letter;
        letter_list.push(letter);
        btn_letter.setAttribute("class", letter);
        document.getElementById("word_guess").appendChild(btn_letter);
    }
    return letter_list;
}



// Assign button to alphabet letter
function keyboard(letter) {
    var btn_letter = document.createElement("BUTTON");
    btn_letter.innerHTML = letter;
    btn_letter.setAttribute("id", "btn_"+ letter);
    btn_letter.setAttribute("class", "keyboard_btn");
    document.getElementById("keyboard").appendChild(btn_letter);
    
    btn_letter.onclick = function() {checkGuess(btn_letter, guess_word, btn_letter.innerText)};
    return btn_letter;
  
}

function disableButton(btn) {
    
    btn.disabled = true;
    
}

function countOcurrences(str, value) {
    var regExp = new RegExp(value, "gi");
    var k = (str.match(regExp) || []).length;
    return k;
  }

function letterInWord(str) {
    console.log("The letter " + str + " is in the word.");
    for (var j = 0; j<k; j++) {
        document.getElementsByClassName(str)[j].style.color='black';
    }
    document.getElementById("btn_"+str).style.color='green';
    document.getElementById("btn_"+str).style.borderColor='green';
}

function letterNotInWord(str) {
    console.log("The letter " + str + " isn't in the word.");
    document.getElementById("btn_"+str).style.color='red';
    document.getElementById("btn_"+str).style.borderColor='red';
    choosePic();
}


function checkWord() {
    var player_word = window.prompt("Enter your guess: ");
    return player_word;
}


function setGameOver(msg) {
    alert(msg + "\n" + " The word was "+ guess_word + "\n"+"Restart the Game ?");
    document.location.reload();
}

function checkGuess(btn, word, str) {
    
    
    
    player_word = checkWord();

    if(guess_count>0) {
        disableButton(btn);
        k=countOcurrences(word, str);
        if(k!=0) {
            letterInWord(str);
            
            if(player_word === word) {
                setGameOver("Congratulations");
            }
            else {
                alert("Try again !");
            }
            
        }
        else {
            letterNotInWord(str);
            
            if(player_word === word) {
                setGameOver("Congratulations");
            }
            else {
                alert("Try again !");
            }
            
            guess_count--;
        }
        
        console.log("You have " + guess_count + " life/lives.")
    }
    else {
        if(player_word === word) {
            setGameOver("Congratulations");
        }
        else {
            setGameOver("Game Over");
        }
    }
    /*
    else {
        if(player_word === word) {
            console.log("Congratulations");
        }
        else {
            console.log("Game Over !");
        }
    }*/
    
}
/* ================================== */

var guess_word = chooseWord(word_table); // word to be guessed, chosen by the game

var begin_button = document.getElementById("start");
    begin_button.onclick = function start() {
        begin_button.style.display = "none";
        guessSubmit.style.display = "block";
        console.log(guess_word);
        var guess_list = wordToButton(guess_word); // buttons corresponding to the letters of the word to be guessed.


        for(var i in alphabet) {
            var alpha_btn = keyboard(alphabet[i]);
            //console.log(alpha_btn);
            //var k = countOcurrences(guess_word, alpha_btn.innerText);
            //console.log(alpha_btn.innerText + k);
        }
        
    }







