/*===============================================================================
                                Variables
================================================================================*/

const cards = document.querySelectorAll('.card');

let returnedCard = false;
let firstCard, secondCard;
let lock= false;

cards.forEach(card => {
  card.addEventListener('click', cardReturned); /* écoute de l'évènement*/
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
  removeEventListener() : supprime l'évènement précédemment écouté
  ainsi l'évènement à supprimer est identifié puisque cet évènement
  a été déclenché dans la function carReturned 
  dans notre cas 
  firstCard.removeEventListener('click',cardReturned)
  firstCard est l'évènement cible
'click' est le type de l'évènement pour lequel on souhaite supprimer l'écouteur d'évenement
cardReturned est la fonction du gestionnaire d'évènement à supprimer
================================================================================*/
function correspondance() {
  if(firstCard.getAttribute('data-attr') === secondCard.getAttribute('data-attr')){
    firstCard.removeEventListener('click',cardReturned);
    secondCard.removeEventListener('click',cardReturned);
    // alert(`Great!, you find the right combination`);
  }
  else{
    /*
    Si les deux cartes retournées ne sont pas identiques
    alors leur face avec l'image est retourné 
    après un lapse de temps de 1s
    */
    lock = true;
    setTimeout(() => {
      firstCard.childNodes[1].classList.remove('active');
      secondCard.childNodes[1].classList.remove('active');

      lock = false;
    }, 1000)
  }
  
}

// /*===============================================================================
//                           function randomSelectedCard()
//   This function shuffle the cards.
//   Each time we refresh the page, each card position change
// ================================================================================*/
function randomSelectedCard(){
  cards.forEach(card =>{
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  })
}

randomSelectedCard();




