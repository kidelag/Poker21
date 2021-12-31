let deck;
let arrCard = [];
let valueCard = 0;
let valueAllCards = 0;
let randomNumber;
let idCard = 0;

//fonction qui initialise le deck
const initDeck = async () => {
  try {
    document.getElementById("setup").innerHTML = "";
    document.getElementById("value").innerHTML = "Value: 0";
    document.getElementById("finalCard").innerHTML = "";
    document.getElementById("histo").innerHTML = `<div id="titleHisto">Last cards drawn</div>`;
    document.getElementById("cardLeft").innerHTML = "Number of cards remaining: 52";
    arrCard = [];
    valueCard = 0;
    valueAllCards = 0;
    idCard = 0;

    const deckFetch = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    ).then(response => response.json())
    deck = deckFetch;

    return await deckFetch.deck_id;

  }
  catch (error) {
    console.log(error);
  }
};

//fonction pour relancer une partie
const replay = async () => {
  try {
    document.getElementById("setup").innerHTML = "";
    document.getElementById("value").innerHTML = "Value: 0";
    document.getElementById("finalCard").innerHTML = "";
    document.getElementById("histo").innerHTML = `<div id="titleHisto">Last cards drawn</div>`;
    arrCard = [];
    valueCard = 0;
    valueAllCards = 0;
  }
  catch (error) {
    console.log(error);
  }
};



const stopTheGame = async () => {

  try {
    await drawCard(deck.deck_id);

    document.getElementById("finalCard").innerHTML = "<div>La dernière carte est le " + arrCard.cards[0].value + " de " + arrCard.cards[0].suit + "</div>";
    
    if(valueAllCards > 21){
      document.getElementById("state").innerHTML = "C'est gagné";
      // document.getElementById("endgame").style.display = "block";
      // document.getElementById("canvas").style.display = "block";
      console.log("gagné");
    }
    else{
      document.getElementById("state").innerHTML = "C'est perdu";
      // document.getElementById("endgame").style.display = "block";
      // document.getElementById("canvas").style.display = "block";
      console.log("perdu")
    }
  }
  catch (error) {
    console.log(error);
  }
}