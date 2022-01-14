//affiche les valeurs des têtes/Ace
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
    catch (error){
        document.getElementById("errorCanvas").style.display = "block";
        console.log(error);
        document.getElementById("textError").innerHTML += `<div id="errorMessages">${error}</div>`;
    }
  }

//fonction pour tirer un nombre de carte défini
const drawCard = async (deckID, number) => {
    try {

        for (let numb = 0; numb < number; numb++) {

            randomNumber = Math.floor(Math.random() * 50) -25;


            let cardsFetch = await fetch(
                `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${number}`
            ).then(response => response.json())

            let translateStartA = -100;
            let translateStartO = 0;
            let translateEndA = 0;
            let translateEndO = 0;
            let rotateStart = 0;

            // console.log("cardFetch: " + JSON.stringify(cardsFetch));
            deck.remaining = cardsFetch.remaining;
            localStorage.setItem('deckArr', JSON.stringify(deck));


            arrCard = cardsFetch;

            arrayOfCard = arrCard;
            arrayOfCard.randomNumber = randomNumber;
            arrayOfCard.deckRemaining = deck.remaining;
            // arrayOfCard.translateStartA = translateStartA;
            // arrayOfCard.translateStartO = translateStartO;
            arrayOfCard.translateEndA = translateEndA;
            arrayOfCard.translateEndO = translateEndO;
            // arrayOfCard.rotateStart = rotateStart;

            let stored = JSON.parse(localStorage.getItem('arrCards'));
            stored.push(arrCard);
            localStorage.setItem('arrCards', JSON.stringify(stored));


            let textValueCard = "";
        
            convertValue();
            
            valueAllCards += parseInt(valueCard);
            
        
            document.getElementById("inputDraw").max = deck.remaining;
            document.getElementById("value").innerHTML = "Value: " + valueAllCards;
            document.getElementById("cardLeft").innerHTML = "Number of cards remaining: " + arrCard.remaining;
            document.getElementById("setup").innerHTML += "<img id='imgCard" + deck.remaining + "' src=" + arrCard.cards[0].image + ">";
            document.getElementById("imgCard" + deck.remaining).animate([
                {transform: `translate(${translateStartA}%,${translateStartO}%) rotate(${rotateStart}deg)`},
                {transform: `translate(${translateEndA}%,${translateEndO}%) rotate(${randomNumber}deg)`}
            ],
            {duration: 500})
            document.getElementById("imgCard" + deck.remaining).style.position = 'absolute';

            // localStorage.setItem('arrCardDeg', )
            
            document.getElementById("imgCard" + deck.remaining).style.transform = "rotate(" + randomNumber + "deg)";
            document.getElementById("imgCard" + deck.remaining).style.position = "absolute"; 
            document.getElementById("histo").innerHTML += "<div id='textCard'>Card: " + arrCard.cards[0].suit + ", value: " + arrCard.cards[0].value + textValueCard + "</div>"
            if(valueAllCards >= 21){
                end = true;
                stopTheGame(false);
            }
            // else if(valueAllCards === 21){
            //     end = true;
            //     document.getElementById("state").innerHTML = "C'est gagné";
            // }
            // localStorage.setItem('arrLastCardDrawn', arrCard);
            localStorage.setItem('vallueCardAll', valueAllCards);
            localStorage.setItem('ended', end);

            document.getElementById("connectNetwork").innerHTML = `Connected to the Network: ${window.navigator.onLine}`
            document.getElementById("connectAPI").innerHTML = `Connected to the API: ${arrCard.success}`
      
            
            idCard++;
        }
        // return await cardsFetch;
    
    }
    catch (error){
        document.getElementById("errorCanvas").style.display = "block";
        console.log(error);
        document.getElementById("textError").innerHTML += `<div id="errorMessages">${error}</div>`;
    }
  
  }
