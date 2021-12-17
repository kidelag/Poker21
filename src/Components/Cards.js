let idDeck;
let arrCard = [];
let valueCard = 0;
let valueAllCards = 0;


// const Cards = async (cardNumber) => {
// 	return displayCards(cardNumber);
// };

const initDeck = async () => {
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

    return await cardsFetch;

}



const displayCards = async () => {

    const cardArray = await drawCard();

    const content = cardArray.cards.map((item, key) => (
        `<img src="${item.image}"/>`
      ));
      
      return (content.join(''))
}