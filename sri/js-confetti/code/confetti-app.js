const containerSlot= document.querySelector(".slot");
const bntConfetti= document.querySelector(".btn-confetti");
const emojis= ["🍰","🍑","🍙","🍚","🍜","🍻","🍨","🍣","🍤","☕","🍓"];

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
        z: "random(0, 1000)",
        random: "random(-90,90)",
        duration: 1
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