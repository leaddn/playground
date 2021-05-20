var myPix = new Array("img/img_1.png", "img/img_2.png", "img/img_3.png", "img/img_4.png", "img/img_5.png", "img/img_6.png", "img/img_7.png", "img/img_8.png", "img/img_9.png", "img/img_10.png");
var word_table = ["communication",
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

var word = document.getElementById("word").innerText;
var word_guess = document.getElementById("word_guess");

var history_space = document.getElementById("history");
var guessField = document.querySelector(".guessField");
var guessSubmit = document.querySelector(".guessSubmit");

const alpha = "abcdefghijklmnopqrstuvwxyz";

const alphabet = alpha.split("");
const letterInWord = word.split("");

var msg;

var j = 0; // compteur pour vérifier combien de lettres dans le mot (ex: 3 fois "o")
trial = 0;
var word_submit = 3;

document.getElementById("player_answer").style.display ="none";
document.getElementById("word").style.display ="none";

function choosePic () {
    document.getElementById("hangman").src = myPix[trial];
}

function countOcurrences(str, value) {
    var regExp = new RegExp(value, "gi");
    return (str.match(regExp) || []).length;
  }


function wordToButton(letter) {
    var word_btn = document.createElement("BUTTON");
    word_btn.innerHTML = letter;
    //word_btn.style.display="none";
    word_btn.style.color = "#EFEFEF";
    //document.body.appendChild(word_btn);
    word_btn.setAttribute("class", letter);
    console.log(word_btn);
    document.getElementById("word_guess").appendChild(word_btn);
    //return word_btn
}

function myFunction(letter) {
    var btn = document.createElement("BUTTON");
    //var word_btn = document.getElementById(letter);
    btn.innerHTML = letter; //create a button for each letter
    btn.setAttribute("id", "btn_"+letter); //create a unique id for each button
    
    document.getElementById("keyboard").appendChild(btn);
    
    
        btn.onclick = function disableButton() { // Disable button letter after click on it + place letter in history
            
                var btn_text = btn.innerText;
                //var word_btn = document.getElementById(letter);
                var history = [];
                history += history.push(btn_text);
                
                history_space.innerHTML += btn_text;
                btn.disabled = true;
        
                k = countOcurrences(word, letter); // Afficher les boutons si la lettre est présente dans le mot
                
                    if (k!=0) {
                        for (var j = 0; j<k; j++) {
                            document.getElementsByClassName(letter)[j].style.color='black';
                        }
                        document.getElementById("btn_"+letter).style.color='green';
                        document.getElementById("btn_"+letter).style.borderColor='green';
                    } else {
                        for (trial = 0; trial < 10; trial++) {
                            document.getElementById("btn_"+letter).style.color='red';
                            document.getElementById("btn_"+letter).style.borderColor='red';
                            
                            //choosePic();
                            //trial++;  
                            document.getElementById("trial").innerText = trial + " trial";
                            
                            //checkGuess();
                        }
                    checkGuess();    
                    }
                
                
            
                /*
                trial++;  
                document.getElementById("trial").innerText = trial + " trial";
                */
            /*
            if(trial == 10) {
                checkGuess();
            }
            */
        }
}

function checkGuess() {
    userGuess = guessField.value;
    if (userGuess === word) {
        msg = "Congratulations !!!"
        setGameOver(msg);
    } 
    /*else if (userGuess != word && word_submit > 0) {
    
        word_submit--;
        guessField.value = '';
        document.getElementById("life").innerText = "You have " + word_submit +" life/lives left."
    }*/
    else {
        msg = "Game over...";
        setGameOver(msg)
    }
}

function setGameOver(msg) {
    alert(msg + "\n" + " The word was "+ word + "\n"+"Restart the Game ?");
    document.location.reload();
}

var begin_button = document.getElementById("start");

begin_button.onclick = function disableButton() {
    //begin_button.disabled = true;
    begin_button.style.display = "none";
    for (var i in alphabet) {
        myFunction(alphabet[i]);
    }
    for (var i in letterInWord) {
        wordToButton(letterInWord[i]);
    }
    document.getElementById("player_answer").style.display = "block";
    
}

guessSubmit.addEventListener('click', checkGuess);

/*
  function disableButton(btn) {
    btn.disabled = true;
}

function disableButton(btn) {
    for (var i in alphabet) {
        elem = document.getElementById("btn_"+alphabet[i]);
        //elem.addEventListener("click", disableButton(elem));
        console.log(elem);
    }
}
*/
