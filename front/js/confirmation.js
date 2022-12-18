//------------------------------------------------------------
// fonction affichage autoinvoquée du numéro de commande et vide du storage lorsque l'on est sur la page confirmation
//------------------------------------------------------------
// valeur du numero de commande
let numCom = new URLSearchParams(document.location.search).get("commande");
console.log(numCom);
// merci et mise en page
let order = (document.getElementById(
  "orderId"
).innerHTML = `<br>${numCom}<br>Merci pour votre achat`);

console.log("valeur de l'orderId venant de l'url: " + numCom);
//réinitialisation du numero de commande

// console.log(localStorage.panierStocké);

numCom = undefined;
sessionStorage.clear();
localStorage.clear();
