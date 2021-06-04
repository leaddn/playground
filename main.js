
/* ==================== Random Quote Machine ================== */

let quotes = [{
  author: "Jack Kerouac",
  quote: "The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.",
},
{
  author: "John Keats",
  quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else",
},
{
  author: "Ernest Hemingway",
  quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
},
{
  author: "Thomas A. Edison",
  quote: "I have not failed. I've just found 10,000 ways that won't work.",
},
]
console.log(quotes[0].quote);

/* =================================== */

window.onload = chooseQuote;

function chooseQuote() {
  var randomNum = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteid").innerHTML = quotes[randomNum].quote;
  document.getElementById("author").innerHTML = quotes[randomNum].author;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}