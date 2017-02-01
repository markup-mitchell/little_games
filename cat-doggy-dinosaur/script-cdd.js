function wholeThing() {

//++++++++++++++++++++++++++++++++++++++++++//
//                  VARIABLES               //
//++++++++++++++++++++++++++++++++++++++++++//

const cat =  {
name: "cat", //this may be unnecessary?!?//
sound: "meow",
clips: 5 // number of sound samples available
};

const dog = {
  name: "dog",
  sound: "woof",
  clips: 6
};

const dinosaur = {
    name: "dinosaur",
    sound: "roar",
    clips: 7
};

const beastList = [cat, dog, dinosaur];

//++++++++++++++++++++++++++++++++++++++++++//
//                  FUNCTIONS               //
//++++++++++++++++++++++++++++++++++++++++++//

function pickRandom(max){
  return Math.floor(Math.random() * max) + 1;
}

function removeTransition(e) {
    console.log(e.propertyName);
    earBox.classList.remove("playing");
}

function listenAndGuess() { // choose a sound and require input to continue //
   
    let beast = beastList[pickRandom(beastList.length)-1];
console.log(beast.name);
    let clipNumber =  beast.clips;
    let currentSound = new Audio ("sounds/" + beast.sound + "-"+ pickRandom(clipNumber) + ".wav");
console.log(currentSound);
    currentSound.play();
    this.classList.add("playing");
// let userChoice = catBox.addEventListener("click", function(){return "cat"}); 
//  console.log(userChoice);
}


const earBox = document.querySelector(".ear");
const catBox = document.querySelector(".cat");
const dogBox = document.querySelector(".dog");
const dinosaurBox = document.querySelector(".dinosaur");
const messageBox = document.getElementById("message-box");
earBox.addEventListener("transitionend", removeTransition);

console.log(earBox);

earBox.addEventListener("click", listenAndGuess);


} /* END function wholeThing */
