let data = { 
  cardImages: [       'http://www.misskatecuttables.com/uploads/shopping_cart/9050/large_monster-with-tail.png','https://www.misskatecuttables.com/uploads/shopping_cart/9045/large_slimey-monster.png', 'http://www.misskatecuttables.com/uploads/shopping_cart/9044/large_nerdy-monster.png', 'https://www.misskatecuttables.com/uploads/shopping_cart/9046/large_big-eyed-monster.png', 'http://www.misskatecuttables.com/uploads/shopping_cart/9047/large_girl-big-eyed-monster.png', 'https://www.misskatecuttables.com/uploads/shopping_cart/9042/large_girl-monster.png', 'https://www.misskatecuttables.com/uploads/shopping_cart/9048/large_3-eyed-monster.png', 'https://www.misskatecuttables.com/uploads/shopping_cart/9052/large_tall-monster.png'],
  cardNumber : 0,
  cardNumIncrement: function(){
    this.cardNumber++;
  }

}

let controller = {
  toss: function() {
   let num = Math.floor(Math.random() * 40);
   return Math.random()<.5 ? -num : num;
  },
  makeCard: function(cardNumber){
    return `<div class="card" id="${cardNumber}" style="transform:rotate(${controller.toss()}deg) translateX(${controller.toss()}px)">${controller.symbol()}</div>`;   
  },
  symbol: function() {
   return `<img src ="${data.cardImages[Math.floor(Math.random()*data.cardImages.length)]}" />`;
  },
  playCard: function() {
   let newCard = controller.makeCard(data.cardNumber);
   view.addCard(newCard);
   data.cardNumIncrement();
  }
}

let view = {
  box: document.querySelector('.flex-container'),
  addCard: function(newCard) {
    view.box.innerHTML += newCard;
  },
  removeCard: function() {
   view.box.removeChild(view.box.lastElementChild); 
  },
  seeThrough: function() {
    view.box.lastChild.style.opacity = '0';
  }
}





// snap button jumps around the page  after each card?
// timer (visible or otherwise) after which the computer calls SNAP or plays its next card
// make nice pictures for each card - CSS? SVG? img?
// pairing logic
// card spatial offsets
// 
