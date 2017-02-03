function wholeThing() {

//++++++++++++++++++++++++++++++++++++++++++//
//                  VARIABLES               //
//++++++++++++++++++++++++++++++++++++++++++//

// ANIMAL OBJECTS //

const cat =  {
  name: "cat", // this may be unnecessary?!? //
  sound: "meow",
  clips: 5 // number of sound samples available //
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

// DOM STUFF //

const earBox = document.querySelector(".ear");
const catBox = document.querySelector(".cat");
const dogBox = document.querySelector(".dog");
const dinosaurBox = document.querySelector(".dino");
const feedbackBox = document.querySelector(".feedback");


// EVENT LISTENERS //

earBox.addEventListener("transitionend", removeTransition);
earBox.addEventListener("click", listenAndGuess);
catBox.addEventListener("click", getGuess);
dogBox.addEventListener("click", getGuess);
dinosaurBox.addEventListener("click", getGuess);

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

function listenAndGuess() { // choose a sound and prompt to guess//

    var beast = beastList[pickRandom(beastList.length)-1];
console.log(beast.name);
    let clipNumber =  beast.clips;
    let currentSound = new Audio ("sounds/" + beast.sound + "-"+ pickRandom(clipNumber) + ".wav");
console.log(currentSound);
    currentSound.play();
    this.classList.add("playing");
    // return beast;
}

function getGuess() {
  const guess = this.classList;
  // console.log(beast);
  // if (guess = beast){};
  feedbackBox.innerHTML = guess;
  console.log(guess);
}




} /* END function wholeThing */
