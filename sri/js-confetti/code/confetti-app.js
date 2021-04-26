const containerSlot= document.querySelector(".slot");
const bntConfetti= document.querySelector(".btn-confetti");
const emojis= ["🍰","🍑","🍙","🍚","🍜","🍻","🍨","🍣","🍤","☕","🍓"];
const words= ["adorable", "amazing", "angel", "enchanting", "friend", "sweatheart"];
const quotes= ["adorable", "amazing", "angel", "enchanting", "friend", "sweatheart"];



bntConfetti.addEventListener("click", party);

function party(){

    if(isTweening()){
        return;
    }

    for(let i = 0; i < 50; i++){

        const confetti = document.createElement("div");

        confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        containerSlot.appendChild(confetti);

    }

    animateConfetti();
}

function animateConfetti(){
    const TLConf = gsap.timeline();

    TLConf
    .to(".slot div",{
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        z: "random(0, 900)",
        random: "random(-90,90)",
        duration: 3 //this duration is for emojis
    })

        .to(".slot div",{autoAlpha: 0, duration: 0.3}, 
        "-=0.2")

        .add(() => {
            containerSlot.innerHTML = "";
        });
}

function isTweening(){
    return gsap.isTweening(".slot div");
}