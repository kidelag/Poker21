let end = false;
let deck;
let arrCard = [];
let valueCard = 0;
let valueAllCards = 0;
let randomNumber;
let idCard = 0;
let numberCards;
let cardsFetch;

let firstOpen;

console.log("firstOpen: " + localStorage.getItem("firstOpen"));

document.getElementById("connectNetwork").innerHTML = `Connected to the Network: ${window.navigator.onLine}`


//Réouverture d'un onglet
if(localStorage.getItem("firstOpen") === "false"){
  console.log("pas premier lancement")

  //deck en cours
  deck = JSON.parse(localStorage.getItem('deckArr'));

  //toutes les cartes tirées
  arrCard = JSON.parse(localStorage.getItem('arrCards'));
  if(arrCard != null){
    document.getElementById("connectAPI").innerHTML = `Connected to the API: ${deck.success}`
  }
  
  for(let card of arrCard){
    // console.log(card);
    // console.log(card.cards.image);
    document.getElementById("setup").innerHTML += "<img id='imgCard" + card.deckRemaining + "' src=" + card.cards[0].image + ">";
    document.getElementById("imgCard" + card.deckRemaining).style.transform =  
      `translate(${card.translateEndA}%,${card.translateEndO}%) rotate(${card.randomNumber}deg)`;
    document.getElementById("imgCard" + card.deckRemaining).style.position = 'absolute';
    };

  //valeur de toutes les cartes tirées dans la partie
  valueAllCards = parseInt(localStorage.getItem('vallueCardAll'));

  //true = partie finie
  end = localStorage.getItem('ended') === 'false' ? false : true;

  document.getElementById("initDeck").innerHTML = "Restart the game";
  document.getElementById("state").innerHTML = "Partie en cours";
  document.getElementById("showIdDeck").style.display = "inline-block";
  document.getElementById("stopTheGame").style.display = "inline-block";
  document.getElementById("replay").style.display = "inline-block";
  document.getElementById("value").innerHTML = "Value: " + valueAllCards;
  document.getElementById("cardLeft").innerHTML = "Number of cards remaining: " + deck.remaining;
  
  //for
  // document.getElementById("setup").innerHTML += "<img id='imgCard" + deck.remaining + "' src=" + arrCard.cards[0].image + ">";

}
//Première ouveture du jeu 
else if(localStorage.getItem("firstOpen") === null){
  console.log("premier lancement");
  // localStorage.setItem("firstOpen",false);
}

//click sur le bouton "initDeck"
document.getElementById("initDeck").addEventListener("click", function() {
  console.log("there");
  localStorage.setItem("firstOpen", false);
  end = false;
  document.getElementById("initDeck").innerHTML = "Restart the game";
  document.getElementById("state").innerHTML = "Partie en cours";
  initDeck();
  document.getElementById("showIdDeck").style.display = "inline-block";
  document.getElementById("stopTheGame").style.display = "inline-block";
  document.getElementById("replay").style.display = "inline-block";
  numberCards = 51;
})

//tire une carte
document.getElementById("showIdDeck").addEventListener("click", function() {
  if(deck.remaining > 0){
    // console.log("deck remaining > 0");
    if(!end){
      // console.log("end != true")
      drawCard(deck.deck_id,1);
      // console.log(deck);
    }  
  }
})


document.getElementById("buttonDrawNumber").addEventListener('click', function() {
  let value = parseInt(document.getElementById("inputDraw").value);

  if((value > 0 || value != '') && !end){
    drawCard(deck.deck_id,value);
  }
})


document.body.onkeyup = (e) => {
  // console.log(e.keyCode);
  if(e.keyCode == 68){
    if(deck.remaining > 0){
      if(!end){
      drawCard(deck.deck_id,1);
      }  
    }
  }
}

//click sur le bouton "replay"
document.getElementById("replay").addEventListener("click", function() {
  if(end){
  replay();
  end = false;
  }
  numberCards = deck.remaining-1;
})

//fermer la pop-up
document.getElementById("backgroundCanvas").addEventListener('click', function() {
  document.getElementById("endgame").style.display = "none";
  // document.getElementById("canvas").style.display = "none";
})

//finir la partie
document.getElementById("stopTheGame").addEventListener("click", function() {
  if(!end){
      end = true;
    if(valueAllCards === 21){
      document.getElementById("state").innerHTML = "C'est gagné";
    }
    else {

      if(valueAllCards < 21) {
        stopTheGame(true);
      }
      else{
        document.getElementById("state").innerHTML = "C'est perdu";
      }
    } 
  }
})


//clear error message
document.getElementById("buttonError").addEventListener("click", function() {
  document.getElementById("errorCanvas").style.display = "none";
  document.getElementById("textError").innerHTML = "";
})

//clear localSession
document.getElementById("buttonReset").addEventListener("click", function() {
  localStorage.clear();
  location.reload();
  console.log("localStorage cleared")
})