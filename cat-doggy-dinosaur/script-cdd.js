function wholeThing() {

//++++++++++++++++++++++++++++++++++++++++++//
//                  VARIABLES               //
//++++++++++++++++++++++++++++++++++++++++++//

// GLOBAL //

var beast;
var score;

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
const dinosaurBox = document.querySelector(".dinosaur");
const feedbackBox = document.querySelector(".feedback");


// EVENT LISTENERS //

earBox.addEventListener("transitionend", removeTransition);
earBox.addEventListener("click", playSound);
catBox.addEventListener("click", userGuess);
dogBox.addEventListener("click", userGuess);
dinosaurBox.addEventListener("click", userGuess);

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

function playSound() { // choose a sound and prompt to guess//
    beast = beastList[pickRandom(beastList.length)-1];
    let clipNumber =  beast.clips;
    let currentSound = new Audio ("sounds/" + beast.sound + "-"+ pickRandom(clipNumber) + ".wav");
    currentSound.play();
    this.classList.add("playing");
    feedbackBox.innerHTML = "Guess!";
    console.log(userGuess);
}

function userGuess() {
  let clickedItem = this.classList; // classList probably needs to be one class only to == beast.name
  if (clickedItem == beast.name){ // the class the querySelector uses to specify the eventListener must EXACTLY MATCH the beastList name
    feedbackBox.innerHTML="RIGHT!"
  }
  else {
    feedbackBox.innerHTML="WRONG!"
  }
  //   return true;
  // }
  // else {
  //   return false;

}





} /* END function wholeThing */
