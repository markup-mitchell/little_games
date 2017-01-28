// todo
// - [X] array of names
// - [ ]associate name with image
// - [X] display empty letterboxes (style invisible letters)
// - [ ] color border for letter next expected
// - [ ] function to accept/reject

function wholeThing(){

  var wordWrapper = document.querySelector('.wordWrapper');

  const wordArray = ["keir", "daddy", "mummy", "nancy", "johnny", "grandad", "iris", "noah", "rory"]; 

  var letterArray = randomPick().split("");

  function randomPick() {
      let choice = Math.floor(Math.random()* wordArray.length);
      console.log(wordArray[choice]);
   return wordArray[choice];
  } // END randomPick

// generate word to guess 
  for (i=0; i<letterArray.length; i++) {
     let newLetterSpace = document.createElement("div");  
     let displayLetter = document.createTextNode(letterArray[i]); // k
     let pTag = document.createElement("p"); // <p></p>
     pTag.appendChild(displayLetter); // <p>k</p>
     newLetterSpace.append(pTag);
     wordWrapper.append(newLetterSpace);
     newLetterSpace.classList.add("letterBox");
     newLetterSpace.classList.add("hidden");
  } // END word-generating for loop

// get array of <p> elements from DOM - letters in word
  var blankWord = document.querySelectorAll("p");

  var letterIndex = 0;
  var currentLetter = letterArray[letterIndex];

  var boxList = wordWrapper.children;
  console.log(boxList);

window.addEventListener("keydown", function (event){
  console.log(currentLetter);
  console.log(event.key);
  if (event.key !== currentLetter) {
    console.log("WRONG! TRY AGAIN!");
  }
  else {console.log("CORRECT!")
  boxList[letterIndex].classList.add("reveal");
  letterIndex++;
  if (letterIndex == blankWord.length) {
    console.log("YOU WIN!!!");
  }
  currentLetter = letterArray[letterIndex];
  }
});



} // END wholeThing
