const stopTheGame = async (bool) => {

    try {

        document.getElementById("endgame").style.display = "block";

        if(bool){
            await drawCard(deck.deck_id,1);
            document.getElementById("finalCard").innerHTML = "<div>The last card drawn is the " + arrCard.cards[0].value + " of " + arrCard.cards[0].suit + "</div>";
            if(valueAllCards > 21){

                // animation(150,100,0,0);

                document.getElementById("state").innerHTML = "We have a winner";
                document.getElementById("canvas").innerHTML = `
                    <h1>We have a winner</h1> 
                    <p>The total of points have been over 21 with ${valueAllCards} points after you've stop the game</p>
                    <p><div>The last card drawn is the ${arrCard.cards[0].value} of ${arrCard.cards[0].suit}</p>
                    <img id="imgCard + ${deck.remaining}" src="${arrCard.cards[0].image}">
                `
                console.log("gagné");
            }
            else{

                // animation(0,0,150,100);

                document.getElementById("state").innerHTML = "It's lost";
                document.getElementById("canvas").innerHTML = `
                <h1>It's lost</h1> 
                <p>The total of points have not been over 21 with ${valueAllCards} points after you've stop the game</p>
                <p><div>The last card drawn is the ${arrCard.cards[0].value} of ${arrCard.cards[0].suit}</p>
                <img id="imgCard + ${deck.remaining}" src="${arrCard.cards[0].image}">
            `
                console.log("perdu")
            }
        }

        else if (!bool){
            if(valueAllCards === 21){

                // animation(150,100,0,0);

                document.getElementById("state").innerHTML = "We have a winner";
                document.getElementById("canvas").innerHTML = `
                <h1>We have a winner</h1> 
                <p>The total of points have not been over 21 with ${valueAllCards} points</p>
                <p><div>The last card drawn is the ${arrCard.cards[0].value} of ${arrCard.cards[0].suit}</p>
                <img id="imgCard + ${deck.remaining}" src="${arrCard.cards[0].image}">
            `
                console.log("gagné");
            }
            else if (valueAllCards > 21){

                // animation(0,0,150,100);
                
                document.getElementById("state").innerHTML = "It's lost";
                document.getElementById("canvas").innerHTML = `
                <h1>It's lost</h1> 
                <p>The total of points have been over 21 with ${valueAllCards} points</p>
                <p><div>The last card drawn is the ${arrCard.cards[0].value} of ${arrCard.cards[0].suit}</p>
                <img id="imgCard + ${deck.remaining}" src="${arrCard.cards[0].image}">
            `
                console.log("perdu")
            }
        }
    
    }
    catch (error){
        document.getElementById("errorCanvas").style.display = "block";
        console.log(error);
        document.getElementById("textError").innerHTML += `<div id="errorMessages">${error}</div>`;
    }
}

const animation = async (widthAn,widthEnd,heightAn,heightEnd) => {
    for (let cards = numberCards; cards >= deck.remaining; cards--) {
        // console.log('stopTheGame: card ' + cards + " deck remaining " + deck.remaining)

        let image = document.getElementById("imgCard" + cards);

        image.animate([
            {transform: `translate(${widthAn}vw,${heightAn}vh)`}
        ],
        {duration: 2000})
        
        image.style.transform = `translate(${widthEnd}vw,${heightEnd}vh)`;
    
    }
}