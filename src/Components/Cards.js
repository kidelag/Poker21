
const Cards = async (cardNumber) => {
	return displayCards(cardNumber);
};

const initDeck = async () => {
	const deckFetch = await fetch(
	  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
	);
	return await deckFetch.json();
};

const drawCard = async (number) => {

    const deckID = await initDeck();

    const cardsFetch = await fetch(
        "https://deckofcardsapi.com/api/deck/" + deckID.deck_id + "/draw/?count=" + number
    );
    return await cardsFetch.json();

}

const displayCards = async (number) => {

    const cardArray = await drawCard(number);

    const content = cardArray.cards.map((item, key) => (
        `<img src="${item.image}"/>`
      ));
      
      return (content.join(''))
}