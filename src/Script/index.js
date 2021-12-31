let end = false;
let deck;
let arrCard = [];
let valueCard = 0;
let valueAllCards = 0;
let randomNumber;
let idCard = 0;

//click sur le bouton "initDeck"
document.getElementById("initDeck").addEventListener("click", function() {
  end = false;
  document.getElementById("initDeck").innerHTML = "Restart the game";
  document.getElementById("state").innerHTML = "Partie en cours";
  initDeck();
  document.getElementById("showIdDeck").style.display = "inline-block";
  document.getElementById("stopTheGame").style.display = "inline-block";
  document.getElementById("replay").style.display = "inline-block";
})

//tire une carte
document.getElementById("showIdDeck").addEventListener("click", function() {
  console.log(deck.remaining);
  if(deck.remaining > 0){
    if(!end){
    drawCard(deck.deck_id);
    }  
  }
})

//click sur le bouton "replay"
document.getElementById("replay").addEventListener("click", function() {
  if(end){
  replay();
  end = false;
  }
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
