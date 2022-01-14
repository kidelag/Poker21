//reset les informations relatives au deck en cours
const resetDeck = async () => {
  try {
      arrCard = [];
      valueCard = 0;
      valueAllCards = 0;
      idCard = 0;
      document.getElementById("setup").innerHTML = "";
      document.getElementById("value").innerHTML = "Value: 0";
      document.getElementById("finalCard").innerHTML = "";
      document.getElementById("histo").innerHTML = `<div id="titleHisto">Last cards drawn</div>`;
      document.getElementById("cardLeft").innerHTML = "Number of cards remaining: 52";
  }
  catch (error){
    document.getElementById("errorCanvas").style.display = "block";
    console.log(error);
    document.getElementById("textError").innerHTML += `<div id="errorMessages">${error}</div>`;
  }
}


//fonction qui initialise le deck
const initDeck = async () => {
    try {
      
      resetDeck();
  
      const deckFetch = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(response => response.json());

      console.log("initDeck status: " + deckFetch.success);
      // document.getElementById("footer").innerHTML = "";

      deck = deckFetch;
      document.getElementById("inputDraw").max = deck.remaining;
      let allCards = [];
      
      localStorage.setItem('arrCards', JSON.stringify(allCards));
      localStorage.setItem('deckArr', JSON.stringify(deck));

      document.getElementById("connectNetwork").innerHTML = `Connected to the Network: ${window.navigator.onLine}`
      document.getElementById("connectAPI").innerHTML = `Connected to the API: ${deck.success}`
      
  
    }
    catch (error){
      document.getElementById("errorCanvas").style.display = "block";
      console.log(error);
      document.getElementById("textError").innerHTML += `<div id="errorMessages">${error}</div>`;
    }
  };
