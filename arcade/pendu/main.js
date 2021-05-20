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

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var history_space = document.getElementById("history");
//history = [];
//var player_list = "";

var guess_list = [];
var guessSubmit = document.querySelector(".guessSubmit");
var guess_count = 10;
var length = 0;

var msg = '';


function choosePic () {
    //document.getElementById("hangman").src = myPix[guess_count];
    console.log(myPix[guess_count]);
}

function chooseWord() {
    var randomNum = Math.floor(Math.random() * word_table.length);
    //document.getElementById("word").innerText = word_table[randomNum];
    var guess_word = word_table[randomNum];
    return guess_word;
}

function wordToButton() {
    for(var i in guess_word) {
        var word_btn = document.createElement("BUTTON");
        word_btn.style.color = "#EFEFEF";
        var guess_letter = guess_word[i];
        word_btn.innerHTML = guess_letter;
        guess_list.push(guess_letter);
        word_btn.setAttribute("class", guess_letter);
        document.getElementById("word_guess").appendChild(word_btn);
    }
    //console.log(guess_list);
    
    return guess_list;
}

function keyboard(list_letter) {
    for(var i in list_letter) {
        var letter = list_letter[i];
        //console.log(alphabet_letter);
        var btn_letter = document.createElement("BUTTON");
        btn_letter.innerHTML = letter;
        btn_letter.setAttribute("id", "btn_"+ letter);
        document.getElementById("keyboard").appendChild(btn);

        //désactiver les boutons au click
        /*
        btn.onclick = function disableButton() {
            var btn_text = btn.innerText;
                //var word_btn = document.getElementById(letter);
                var history = [];
                history += history.push(btn_text);
                
                history_space.innerHTML += btn_text;
                btn.disabled = true;
        return history;*/
        }
    
    return btn_letter;
}

function disableButton() {
    var btn = keyboard();
    var btn_text = btn.innerText;
    //var word_btn = document.getElementById(letter);
    var history = [];
    history += history.push(btn_text);
    
    history_space.innerHTML += btn_text;
    btn.disabled = true;
    return history;
}

/*
function getHistory() {
    btn = keyboard();
    btn.onclick = function disableButton() {
        var btn_text = btn.innerText;
        var history = [];
        history += history.push(btn_text);
        btn.disabled = true;
    }
    return history;
}
*/

function setGameOver(msg) {
    alert(msg + "\n" + " The word was "+ guess_word + "\n"+"Restart the Game ?");
    document.location.reload();
    console.log("Game Over");
}

function countOcurrences(str, value) {
    var regExp = new RegExp(value, "gi");
    var k = (str.match(regExp) || []).length;
    return k;
  }

  /*
  function removeItem(arr, item){
      var new_arr=[];
      for (var i in arr) {
          if (arr[i] != item) {
              new_arr.push(arr[i]);
          }
      }
      var l = new_arr.length;
      return l;
   }
*/
function removeItem(arr, k) {
    if(length != 0) {
        length = length - k;
    }
    else {
        length = arr.length - k;
    }
    return length;
}

function letterInWord () {
    if(k!=0){
        console.log("la lettre " + player_letter + " est dans le mot");
        for (var j = 0; j<k; j++) {
            document.getElementsByClassName(player_letter)[j].style.color='black';
        }
        document.getElementById("btn_"+player_letter).style.color='green';
        document.getElementById("btn_"+player_letter).style.borderColor='green';
    }
    else {
        console.log("la lettre " + player_letter + " n'est pas dans le mot");
        document.getElementById("btn_"+player_letter).style.color='red';
        document.getElementById("btn_"+player_letter).style.borderColor='red';
        choosePic();
    }
}

function checkGuess(k, player_letter, player_list, player_word) {
    if(player_list === guess_list || player_word === guess_word) {
        msg = "Victoire !!!";
        //console.log(guess_word);
        setGameOver(msg);
    }
    else if(guess_count === 0 && player_list != guess_list){
        msg = "Défaite !!!";
        //console.log(guess_word);
        setGameOver(msg);
    }
    else {
        /*if(k!=0) {*/
        if(k!=0){
            console.log("la lettre " + player_letter + " est dans le mot");
            for (var j = 0; j<k; j++) {
                document.getElementsByClassName(player_letter)[j].style.color='black';
            }
            document.getElementById("btn_"+player_letter).style.color='green';
            document.getElementById("btn_"+player_letter).style.borderColor='green';
        }
        else {
            console.log("la lettre " + player_letter + " n'est pas dans le mot");
            document.getElementById("btn_"+player_letter).style.color='red';
            document.getElementById("btn_"+player_letter).style.borderColor='red';
            choosePic();
        }
    }
    console.log("Il reste " + length + " à trouver.");
    guess_count--;
}


    
    guess_word = chooseWord();
    //guess_list = wordToButton(guess_word);
    
    //keyboard();

    //var player_list = ["a","b", "c", "e","g","d","f","j","s","t","u","r","y"];
    //var player_list = getHistory();
    
    
    //console.log(player_list);

    //var player_word = "communication";
    var player_word = guessSubmit.addEventListener('click', checkGuess);

    var word = ["c","a","m","c"];
    var letter = "e";

    

    var begin_button = document.getElementById("start");
    begin_button.onclick = function start() {
        wordToButton();
        keyboard(alphabet);
    }
        /*
        for(var i in alphabet) {
            var alphabet_letter = alphabet[i];
            keyboard(alphabet_letter);
            disableButton(alphabet_letter);
            //var btn = keyboard(alphabet_letter);
            //var player_letter = keyboard(alphabet_letter);
            //var player_list = player_letter.addEventListener('click', disableButton);
            //var player_list = disableButton(btn);
            //console.log("the list is " + player_list);
           
        }
        
        //player_list = history;
        
        //wordToButton();

        /*
        for(i in player_list) {
            var player_letter = player_list[i];
            console.log(player_letter);
            var k = countOcurrences(guess_word, player_letter);
            
            length = removeItem(guess_list, k);
            checkGuess(player_letter);
        }*/
    //}
/*
var string = "bdrb";
var array = ['b','d','r','b'];
var value = 'b';
var k = countOcurrences(string, value);
console.log(k);
console.log(removeItem(array, k));*/
