function wholeThing() {



//++++++++++++++++++++++++++++++++++++++++++++++//
//            SOUND VARIABLE ARRAYS             //
//++++++++++++++++++++++++++++++++++++++++++++++//

const cat = [ // a good/legit way to lay these out? //
  "meow-1",
  "meow-3",
  "meow-4",
  "meow-5",
//  "meow-6",
//  "meow-7",
//  "meow-8",
//  "meow-9",
//  "meow-10",
//  "meow-11"
  ];

const dog = [ // a good/legit way to lay these out? //
  "woof-1",
  "woof-3",
  "woof-4",
//  "woof-5",
//  "woof-6",
//  "woof-7",
//  "woof-8",
//  "woof-9",
//  "woof-10",
// "woof-11"
];

const dinosaur = [
  "roar-1",
  "roar-3",
  "roar-4",
  "roar-5",
  "roar-6",
  "roar-7",
//  "roar-8",
//  "roar-9",
//  "roar-10",
//  "roar-11"
];

var species = [ // one for each sound array, obvs
  cat,
  dog,
  dinosaur
  ];


//++++++++++++++++++++++++++++++++++++++++++//
//                  FUNCTIONS               //
//++++++++++++++++++++++++++++++++++++++++++//

function pickRandom(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function removeTransition(e) {
    console.log(e.propertyName);
    earBox.classList.remove("playing");
}

function listenAndGuess() { // choose a sound and require input to continue //
    let currentSound = pickRandom(pickRandom(species));
    let audioClip = new Audio("sounds/" + currentSound + ".wav");
    this.classList.add("playing");
    console.log(audioClip);
    audioClip.play();

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


}
