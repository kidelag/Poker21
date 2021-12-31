
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
  
      // return await deckFetch.deck_id;
  
    }
    catch (error) {
      console.log(error);
    }
  };