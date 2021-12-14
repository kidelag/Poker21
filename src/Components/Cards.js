
const Cards = async (cardNumber) => {
	const initDeck = async () => {
	  const deckFetch = await fetch(
		"https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
	  );
	  const deck = await deckFetch.json();
  
	  const cardsFetch = await fetch(
		"https://deckofcardsapi.com/api/deck/" + deck.deck_id + "/draw/?count="+cardNumber
	  );
	  const cards = await cardsFetch.json();
  
	  const content = cards.cards.map((item, key) => (
		`<img src="${item.image}"/>`
	  ));
	  
	  return (content.join(''))
	};
  
	return initDeck();
  };