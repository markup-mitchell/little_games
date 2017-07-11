 
const BOX = document.querySelector('.flex-container');

let cardNumber = 0;
function toss() {
   let num = Math.floor(Math.random() * 40);
   return Math.random()<.5 ? -num : num;
}

function makeCard(cardNumber){
   return `<div class="card" id="${cardNumber}" style="transform:rotate(${toss()}deg) translateX(${toss()}px)">${symbol()}</div>`;   
}

function symbol() {
   let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; 
   // return letters[Math.floor(Math.random()*letters.length)];
   let monsters = ['http://www.misskatecuttables.com/uploads/shopping_cart/9050/large_monster-with-tail.png', 'https://www.misskatecuttables.com/uploads/shopping_cart/9045/large_slimey-monster.png',
                   'http://www.misskatecuttables.com/uploads/shopping_cart/9044/large_nerdy-monster.png', 'https://www.misskatecuttables.com/uploads/shopping_cart/9046/large_big-eyed-monster.png', 'http://www.misskatecuttables.com/uploads/shopping_cart/9047/large_girl-big-eyed-monster.png', 'https://www.misskatecuttables.com/uploads/shopping_cart/9042/large_girl-monster.png', 'https://www.misskatecuttables.com/uploads/shopping_cart/9048/large_3-eyed-monster.png', 'https://www.misskatecuttables.com/uploads/shopping_cart/9052/large_tall-monster.png'];
   return `<img src ="${monsters[Math.floor(Math.random()*monsters.length)]}" />`;
}

function playCard() {
//  document.querySelector('#playCard').style.background = ("red");
   BOX.innerHTML += makeCard(cardNumber);
   cardNumber++;
}

let cards = document.querySelectorAll('.card');

// snap button jumps around the page  after each card?
// timer (visible or otherwise) after which the computer calls SNAP or plays its next card
// make nice pictures for each card - CSS? SVG? img?
// pairing logic
// card spatial offsets

// src="http://www.misskatecuttables.com/uploads/shopping_cart/9050/large_monster-with-tail.png" />

//https://www.misskatecuttables.com/uploads/shopping_cart/9045/large_slimey-monster.png