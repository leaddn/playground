/*===============================================================================
                                Variables
================================================================================*/

const cards = document.querySelectorAll('.card');

let returnedCard = false;
let firstCard, secondCard;
let lock= false;

cards.forEach(card => {
  card.addEventListener('click', cardReturned);
})

/*===============================================================================
                          function cardReturned()
================================================================================*/
function cardReturned(){
  if(lock) {
    return;
  }
  this.childNodes[1].classList.toggle('active');
  if(!returnedCard){
    returnedCard = true;
    firstCard = this;

    return;
  }
  returnedCard = false;
  secondCard = this;
  // console.log(firstCard, secondCard)
  correspondance();

}

/*===============================================================================
                          function correspondance()
  This function, correspondance(), let the card returned.
  That means each time we found the right combination, 
  the cards do not flip back
================================================================================*/
function correspondance() {
  if(firstCard.getAttribute('data-attr') === secondCard.getAttribute('data-attr')){
    firstCard.removeEventListener('click',cardReturned);
    secondCard.removeEventListener('click',cardReturned);
    // alert(`Great!, you find the right combination`);
  }
  else{
    lock = true;
    setTimeout(() => {
      firstCard.childNodes[1].classList.remove('active');
      secondCard.childNodes[1].classList.remove('active');

      lock = false;
    }, 1000)
  }
  
}

/*===============================================================================
                          function randomSelectedCard()
  This function shuffle the cards.
  Each time we refresh the page, each card position change
================================================================================*/
function randomSelectedCard(){
  cards.forEach(card =>{
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  })
}

randomSelectedCard();

