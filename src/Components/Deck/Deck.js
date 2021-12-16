
const DeckId = async () => {
	const deckFetch = await fetch(
		"https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
	  );
	  const deck = await deckFetch.json();

	  return deck.deck_id;
}

fetch(
	"https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  ).then(res => {
	res.json().then(res => {  
		const deckId = res.deck_id;
		
		document.querySelector(".deck").addEventListener('click', () => {
			drawCard(deckId);
		})
	})
  });