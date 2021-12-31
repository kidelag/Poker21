//fonction pour relancer une partie
const replay = async () => {
    try {
      document.getElementById("setup").innerHTML = "";
      document.getElementById("value").innerHTML = "Value: 0";
      document.getElementById("finalCard").innerHTML = "";
      document.getElementById("histo").innerHTML = `<div id="titleHisto">Last cards drawn</div>`;
      arrCard = [];
      valueCard = 0;
      valueAllCards = 0;
    }
    catch (error) {
      console.log(error);
    }
  };