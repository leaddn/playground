var board = document.getElementById("board");
var palette = document.getElementById("palette");
const color_list = ["#0278ee", "#dd0174", "#ff913f", "#01ee78", "#7952b3"];
var length = 10;
/* ======================================= */

/*Create a number of lines corresponding to the number of guess the player can play */
function lineToSpace(k) {
    var line_space = document.createElement("div");
    line_space.setAttribute("class", "line");
    line_space.setAttribute("id", "line_"+k);
    board.appendChild(line_space);
}

/* Create a space per line where player can display color codes */
function guessToSpace(j) {
    var guess_space = document.createElement("div");
    guess_space.setAttribute("class", "guess_space");
    console.log(j);
    document.getElementsByClassName("line")[j].appendChild(guess_space);
    for (var i in color_list) {
        circleToGuess(guess_space,j,i);
    }
}

/* Create a space per line where points will be displayed to the player */
function pointToSpace(j) {
    var point_space = document.createElement("div");
    point_space.setAttribute("class", "point_space");
    document.getElementsByClassName("line")[j].appendChild(point_space);
    for (var i in color_list) {
        circleToPoint(point_space);
    }
    
}

/* Display color circles in palette. */
function circleToPalette(color) {
    var circle_palette = document.createElement("div");
    circle_palette.setAttribute("id", color);
    circle_palette.setAttribute("class", "circle");
    circle_palette.style.backgroundColor = color;
    palette.appendChild(circle_palette);
}

/* Display circles in guess space. The number of circles corresponds to the number of colors in color_list.*/
function circleToGuess(element,j,l) {
    var circle_guess = document.createElement("div");
    circle_guess.setAttribute("id", "line_"+j+"_cc_"+l);
    circle_guess.setAttribute("class", "circle guess_circle");
    //document.getElementsByClassName("guess_space").appendChild(circle_guess);
    element.appendChild(circle_guess);
}

function circleToPoint(element) {
    var circle_point = document.createElement("div");
    //circle_point.setAttribute("id", "line_"+j+"_pt_"+l);
    circle_point.setAttribute("class", "circle point_circle");
    element.appendChild(circle_point);
}

function focusFunction(element) {
    //element.style.backgroundColor = "pink";
    element.className += " " + "blinking";
    element.style.border = "thick solid pink";
    element.focus();
}

function blurFunction(element, color) {
    // No focus = Changes the background color of input to red
    element.style.background = color;
    element.blur();
  }

/* ====================================== */

for (var x = length; x >= 0; x--) {
    lineToSpace(x);
    guessToSpace(j=length-x);
    pointToSpace(j=length-x);
}

for (var i in color_list) {
    circleToPalette(color_list[i]);
}

//window.onload = focusFunction(document.getElementById("line_0_cc_0"));
document.getElementById("line_0_cc_0").onclick = function() {focusFunction(document.getElementById("line_0_cc_0"))};

/*
for (var i in color_list) {
    var color = color_list[i];
    var color_btn = document.getElementById(color);
    
}
*/
var color = color_list[0];
var color_btn = document.getElementById(color);
color_btn.onclick = function() {blurFunction(document.getElementById("line_0_cc_0"), color)};

