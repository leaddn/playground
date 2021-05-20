//let palette_circle1 = document.querySelector("#palette1");
let guess_circle = document.querySelector("#guess1_circle1");

let next_circle = guess_circle.nextElementSibling;
let palette = document.querySelector("#palette1");
let line_elem = document.querySelectorAll("#line1 div.guess > div.guess_circle");

function getFocus() {
    document.getElementById("guess1_circle1").focus();
    let guess_circle = document.querySelector("#guess1_circle1");
    guess_circle.style.border = "thick solid #0000FF";
    return guess_circle
  }

function checkFocus() {
    let circle = getFocus(guess_circle);
    if (circle.hasFocus) {
        //x.innerHTML = "The document has focus.";
        //circle.clickButton();
        circle.style.backgroundColor = "blue";
      }
} 


/*
class Circle {
    constructor(target, button) {
        this.target = target;
        this.button = button;
        
    }
    changeColor() {
        let guess_circle = document.querySelector(this.target);
        var elem = document.querySelector(this.button);
        var clr = elem.textContent;
        
        guess_circle.style.background = clr;
        
    }
    clickButton() {
        var elem = document.querySelector(this.button);
        elem.addEventListener('click', this.changeColor())
    }

    checkFocus(circle) {
        if (circle.hasFocus()) {
            //x.innerHTML = "The document has focus.";
            circle.clickButton();
          }
    }
    /*
    clickButton() {
        elem.addEventListener('click', changeColor(target, button);
    }
    
}*/

var circle1 = new Circle("#guess1_circle1", "#palette1");
var circle2 = new Circle("#guess1_circle2", "#palette1");
//circle1.clickButton();
//circle1.clickButton();
//circle1.checkFocus();

/*
function changeColor(palette_id) {
    //let palette_circle = document.querySelector(palette_id);
    //let clr = getColor(palette_id);
    let guess_circle = document.querySelector("#guess1_circle1");
    var elem = document.querySelector(palette_id);
    var clr = elem.textContent;
    //let color = palette_circle.textContent;
    //guess_circle.style.backgroundColor = color;
    guess_circle.style.background = clr;
    
    next_circle.style.background = clr;
}



//line_elem.forEach(changeColor());


function changeColors(palette_id) {
    //var clr = getColor(palette_id);
    let line_elem = document.querySelectorAll("#line1 div.guess > div.guess_circle");
    //for (let i = 0; i < line_elem.length ; i++) {
    for (var i in line_elem) {
        let elem = document.querySelector(palette_id);
        let clr = elem.textContent;
        
        line_elem[i].style.background = clr;
        //var clr = getColor(palette_id);
    }
}
palette.addEventListener('click', changeColor(guess_circle, '#palette1'));
//onclick="changeColor(guess_circle,'#palette1')"




console.log(line_elem)


//guess_circle.addEventListener('click', changeColor());

//console.log(palette_circle.textContent)
*/