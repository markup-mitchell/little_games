// todo
// * array of names
// * associate name with image
// * display empty letterboxes (style invisible letters)
// * color border for letter next expected
// * function to accept/reject



var wordWrapper = document.querySelector('.wordWrapper');

const wordArray = ["keir", "daddy", "mummy", "nancy", "johnny", "grandad", "iris", "noah", "rory"]; 

function randomPick() {
      let choice = Math.floor(Math.random()* wordArray.length);
   return wordArray[choice];
}

var letterArray = randomPick().split("");

for (i=0; i<letterArray.length; i++) {
   let newLetterSpace = document.createElement("div");  
   
   let displayLetter = document.createTextNode(letterArray[i]); // k
   let pTag = document.createElement("p"); // <p></p>
   pTag.appendChild(displayLetter); // <p>k</p>
   newLetterSpace.append(pTag);
   wordWrapper.append(newLetterSpace);
   newLetterSpace.classList.add("letterBox");
}
window.addEventListener("keydown", function (event) {  
   console.log(event.key);
   if (event.key == blankWord[i].innerHTML) {
         console.log("CORRECT!")
   }
})


var blankWord = document.querySelectorAll("p");

var currentLetter = blankWord[0].innerHTML;

console.log(currentLetter);
