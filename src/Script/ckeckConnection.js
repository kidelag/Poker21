const checkConnection = async () => {
    try{
        document.getElementById("connectNetwork").innerHTML = `Connected to the Network: ${window.navigator.onLine}`
        document.getElementById("connectAPI").innerHTML = `Connected to the API: ${arrCard.success}`
      
    }
    catch (error){
        document.getElementById("errorCanvas").style.display = "block";
        console.log(error);
        document.getElementById("textError").innerHTML += `<div id="errorMessages">${error}</div>`;
    }
}