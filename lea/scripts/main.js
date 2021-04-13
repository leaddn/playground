let myButton = document.querySelector('button');
let myHeading = document.querySelector('h4');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = `What are you doing here ${myName} ?`;
  }


   if (!localStorage.getItem('nom')) {
     setUserName();
   } else {
     let storedName = localStorage.getItem('nom');
     myHeading.textContent = `What are you doing here ${storedName} ?`;
   }

  myButton.addEventListener('click', function() {
    setUserName();
  });