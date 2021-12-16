const cards = []

const drawCard = async (deck_id) => {
	fetch(
		"https://deckofcardsapi.com/api/deck/" + deck_id + "/draw/?count=1"
	  ).then(res => {
		  res.json().then(res => {
				cards.push(res.cards[0]);
			
				const content = cards.map((item, key) => (
					`<img src="${item.image}"/>`
				));

				document.querySelector(".cards").innerHTML = content
		  })
	  })
};