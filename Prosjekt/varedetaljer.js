let bildecontainer = document.querySelector("#bildecontainer")
let pris = document.querySelector("#pris")


var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");

let db = firebase.database();
let sykdomHund = db.ref("nyheter/" + id);
let sykdomKatt = db.ref("sko/" + id);
let sykdomHund = db.ref("klaer/" + id);
let sykdomKatt = db.ref("trening/" + id);
let sykdomKatt = db.ref("merker/" + id);

function genererHTML(snapshot){
  let varer = snapshot.val();

  bildecontainer.innerHTML = `
  <img src=${varer.bilde}>
  `;

  pris.innerHTML = `
  <p>Navn: ${varer.navn}</p>
  <p>Pris: ${varer.pris}</p>
  `;



  if (id.charAt(0) === "S"){
    prissko.on("value", genererHTML);
  }

  else if(id.charAt(0) === "K"){
    prisklaer.on("value", genererHTML);
  }
