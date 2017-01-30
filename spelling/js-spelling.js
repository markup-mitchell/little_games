// todo
// - [X] array of names
// - [ ]associate name with image
// - [X] display empty letterboxes (style invisible letters)
// - [ ] color border for letter next expected
// - [ ] function to accept/reject

function wholeThing(){
  const imgBox = document.querySelector('.imageWrapper');
  var wordWrapper = document.querySelector('.wordWrapper');

  const wordArray = ["keir", "daddy", "mummy", "nancy", "johnny", "grandad", "mark", "nanny"]; 
  
  var randomName = randomPick();
  var letterArray = randomName.split("");

    function flashLetter() {
    boxList[letterIndex].classList.add("hint");
    }

  function randomPick() {
      let choice = Math.floor(Math.random()* wordArray.length);
      console.log(wordArray[choice]);
   return wordArray[choice];
  } // END randomPick

// Add photo
  let imgName = "images/" + randomName + ".jpg";
  let DOM_img = document.createElement("img");
  DOM_img.src = imgName;
  imgBox.appendChild(DOM_img);

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
