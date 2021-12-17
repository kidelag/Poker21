let end = false;


document.getElementById("initDeck").addEventListener("click", function() {
  document.getElementById("state").innerHTML = "Partie en cours"
  initDeck();
  document.getElementById("showIdDeck").style.display = "inline-block";
  document.getElementById("stopTheGame").style.display = "inline-block";
})

document.getElementById("showIdDeck").addEventListener("click", function() {

  
  if(!end){

  drawCard(idDeck.deck_id);
  document.getElementById("setup").innerHTML += "<div id='uniteCard'>" + 
    "<div id='textCard'>" + arrCard.cards[0].value + " and " + arrCard.cards[0].suit + "</div>" + 
    "<img id='imgCard' src=" + arrCard.cards[0].image + ">" +
  "</div>";
  }  
})

document.getElementById("stopTheGame").addEventListener("click", function() {
  if(!end){
      end = true;
    if(valueAllCards === 21){
      document.getElementById("state").innerHTML = "C'est gagné"
    }
    else {

      drawCard(idDeck.deck_id);
      document.getElementById("finalCard").innerHTML = "<div>La dernière carte est le" + arrCard.cards[0].value + " de " + arrCard.cards[0].suit + "</div>";
      
      if(valueAllCards < 21) {
        drawCard(idDeck.deck_id)
        if(valueAllCards > 21){
          document.getElementById("state").innerHTML = "C'est gagné";
        }
        else{
          document.getElementById("state").innerHTML = "C'est perdu"
        }
      }
    } 
  }
})

const test = async () => {
  while(true){
    setTimeout(() => {
      console.log('value =',valueAllCards)
    },1500)
  }
}

// test();