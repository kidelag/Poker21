//fonction pour tirer une carte
const drawCard = async (deckID) => {
    try {
        randomNumber = Math.floor(Math.random() * 50) -25;
        const cardsFetch = await fetch(
            "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=1"
        ).then(response => response.json())
        
        deck.remaining = cardsFetch.remaining;
        arrCard = cardsFetch;
        let textValueCard = "";            
    
        convertValue();
        
        valueAllCards += parseInt(valueCard);
    
        document.getElementById("value").innerHTML = "Value: " + valueAllCards;
    
        document.getElementById("cardLeft").innerHTML = "Number of cards remaining: " + arrCard.remaining;
    
        document.getElementById("setup").innerHTML += "<img id='imgCard" + deck.remaining + "' src=" + arrCard.cards[0].image + ">";
        
        document.getElementById("imgCard" + deck.remaining).animate([
            { transform: 'translate(-100%,0%) rotate(0deg)'},
            {transform: 'translate(0%,0%) rotate(' + randomNumber + 'deg)'}
        ],
        {duration: 500})
    
        document.getElementById("imgCard" + deck.remaining).style.transform = "rotate(" + randomNumber + "deg)";
        document.getElementById("imgCard" + deck.remaining).style.position = "absolute";
    
        document.getElementById("histo").innerHTML += "<div id='textCard'>Card: " + arrCard.cards[0].suit + ", value: " + arrCard.cards[0].value + textValueCard + "</div>"
    
        if(valueAllCards > 21){
            end = true;
            document.getElementById("state").innerHTML = "C'est perdu";
        }
    
        idCard++;
        return await cardsFetch;
    
    }
    catch (error) {
      console.log(error);
    }
  
  }

  const convertValue = async () => {
    try{
        if(arrCard.cards[0].value == "JACK" || arrCard.cards[0].value == "QUEEN" || arrCard.cards[0].value == "KING"){
            valueCard = 10;
            textValueCard = " (" + valueCard + ")";
        }
        else if(arrCard.cards[0].value == "ACE"){
            valueCard = 0;
            textValueCard = " (" + valueCard + ")";
        }
        else{
            valueCard = arrCard.cards[0].value;
        };
    }
    catch (err){
        console.log(err);
    }
  }