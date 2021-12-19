let idDeck;
let arrCard = [];
let valueCard = 0;
let valueAllCards = 0;


// const Cards = async (cardNumber) => {
// 	return displayCards(cardNumber);
// };

const initDeck = async () => {
  
  document.getElementById("setup").innerHTML = "<div></div>";
  document.getElementById("value").innerHTML = "<div>Value = 0</div>";
  document.getElementById("finalCard").innerHTML = "<div></div>";
  arrCard = [];
  valueCard = 0;
  valueAllCards = 0;

	const deckFetch = await fetch(
	  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
	).then(response => response.json())
  idDeck = deckFetch;
	return await deckFetch.deck_id;
};


const drawCard = async (deckID) => {

    // const deckID = await initDeck();

    const cardsFetch = await fetch(
        "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=1"
    ).then(response => response.json())

    arrCard = cardsFetch;

    if(arrCard.cards[0].value == "JACK" || arrCard.cards[0].value == "QUEEN" || arrCard.cards[0].value == "KING"){
      valueCard = 10;
    }
    else if(arrCard.cards[0].value == "ACE"){
      valueCard = 0;
    }
    else{
      valueCard = arrCard.cards[0].value;
    };
    

    valueAllCards += parseInt(valueCard);

    document.getElementById("value").innerHTML = "<div>Value = " + valueAllCards + "</div>";

    document.getElementById("setup").innerHTML += "<div id='uniteCard'>" + 
      "<div id='textCard'>" + arrCard.cards[0].value + " and " + arrCard.cards[0].suit + "</div>" + 
      "<img id='imgCard' src=" + arrCard.cards[0].image + ">" +
    "</div>";

    if(valueAllCards > 21){
      end = true;
      document.getElementById("state").innerHTML = "C'est perdu"
    }


    return await cardsFetch;

}



// const displayCards = async () => {

//     const cardArray = await drawCard();

//     const content = cardArray.cards.map((item, key) => (
//         `<img src="${item.image}"/>`
//       ));
      
//       return (content.join(''))
// }