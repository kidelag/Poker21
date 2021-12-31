const stopTheGame = async (bool) => {

    try {
        document.getElementById("endgame").style.display = "block";

        //si bool = true => on a appuyé sur le bouton "Stop the game"
        //sinon c'est que la funct a été lancé dans la funct "drawCard"
        if(bool){
            await drawCard(deck.deck_id);
            document.getElementById("finalCard").innerHTML = "<div>La dernière carte est le " + arrCard.cards[0].value + " de " + arrCard.cards[0].suit + "</div>";
            if(valueAllCards > 21){
                document.getElementById("state").innerHTML = "C'est gagné";
                document.getElementById("canvas").innerHTML = "<p>C'est gagné</p>"
                console.log("gagné");
            }
            else{
                document.getElementById("state").innerHTML = "C'est perdu";
                document.getElementById("canvas").innerHTML = "<p>C'est perdu</p>"
                console.log("perdu")
            }
        }

        else if (!bool){
            if(valueAllCards === 21){
                document.getElementById("state").innerHTML = "C'est gagné";
                document.getElementById("canvas").innerHTML = "<p>C'est gagné</p>"
                console.log("gagné");
            }
            else if (valueAllCards > 21){
                document.getElementById("state").innerHTML = "C'est perdu";
                document.getElementById("canvas").innerHTML = "<p>C'est perdu</p>"
                console.log("perdu")
            }
        }

        // document.getElementById("canvas").style.display = "block";

    
    }
    catch (error) {
      console.log(error);
    }
  }