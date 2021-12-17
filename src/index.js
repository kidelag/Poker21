// const render = (elem) => {
//   const prevHtml = document.getElementById("app").innerHTML;
//   document.getElementById("app").innerHTML = prevHtml + elem;
// };

// const App = async () => {
//   render(
//     `
//       ${await Cards(3)}
//     `
//   );
// };

// // App();

let end = false;


document.getElementById("initDeck").addEventListener("click", function() {
  document.getElementById("state").innerHTML = "Partie en cours"
  console.log(initDeck());
  document.getElementById("showIdDeck").style.display = "inline-block";
  document.getElementById("stopTheGame").style.display = "inline-block";
})

document.getElementById("showIdDeck").addEventListener("click", function() {

  if(valueAllCards > 21){
    end = true;
    document.getElementById("state").innerHTML = "C'est perdu"
  }

  if(!end){
  console.log(idDeck.deck_id);
  console.log(drawCard(idDeck.deck_id));
  console.log(arrCard.cards[0].suit);
  document.getElementById("value").innerHTML = "<div>" + valueAllCards + "</div>";
  document.getElementById("setup").innerHTML += "<div id='uniteCard'>" + 
    "<div id='textCard'>" + arrCard.cards[0].suit + " and " + arrCard.cards[0].value + "</div>" + 
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
    else if(valueAllCards < 21) {
      drawCard(idDeck.deck_id)
      if(valueAllCards > 21){
        document.getElementById("state").innerHTML = "C'est gagné";
      }
      else{
        document.getElementById("state").innerHTML = "C'est perdu"
      }
    }
  }
})