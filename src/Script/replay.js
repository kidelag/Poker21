//fonction pour relancer une partie
const replay = async () => {
    try {
      // document.getElementById("setup").innerHTML = "";
      document.getElementById("value").innerHTML = "Value: 0";
      document.getElementById("state").innerHTML = "Partie en cours";
      document.getElementById("finalCard").innerHTML = "";
      document.getElementById("histo").innerHTML = `<div id="titleHisto">Last cards drawn</div>`;
      document.getElementById("errorCanvas").innerHTML = "";
      arrCard = [];
      valueCard = 0;
      valueAllCards = 0;
    }
    catch (error) {
      document.getElementById("errorCanvas").style.display = "block";
      console.log(error);
      document.getElementById("textError").innerHTML += `<div id="errorMessages">${error}</div>`;
    }
  };

  