let end = false;


document.getElementById("initDeck").addEventListener("click", function() {
  end = false;
  document.getElementById("initDeck").innerHTML = "Restart the game";
  document.getElementById("state").innerHTML = "Partie en cours";
  initDeck();
  document.getElementById("showIdDeck").style.display = "inline-block";
  document.getElementById("stopTheGame").style.display = "inline-block";
})

document.getElementById("showIdDeck").addEventListener("click", function() {
  if(!end){
  drawCard(idDeck.deck_id);
  }  
})

document.getElementById("endgame").addEventListener('click', function() {
  document.getElementById("endgame").style.display = "none";
  document.getElementById("canvas").style.display = "none";
})

document.getElementById("stopTheGame").addEventListener("click", function() {
  if(!end){
      end = true;
    if(valueAllCards === 21){
      document.getElementById("state").innerHTML = "C'est gagné";
    }
    else {

      if(valueAllCards < 21) {
        stopTheGame();
      }
      else{
        document.getElementById("state").innerHTML = "C'est perdu";
      }
    } 
  }
})

// const test = async () => {
//   while(true){
//     setTimeout(() => {
//       console.log('value =',valueAllCards)
//     },1500)
//   }
// }

// test();