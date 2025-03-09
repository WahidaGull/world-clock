function updateLosAnglesTime() {
  //LosAngles
  let losAnglesElement = document.querySelector("#los-an");
  let losAnglesDateElement = document.querySelector(".date ");
  let losAnglesTimeElement = document.querySelector(".time ");
  let losAnglesTime = moment().tz("America/Los_Angeles");
  losAnglesDateElement.innerHTML = losAnglesTime.format("MMM Do YYYY");
  losAnglesTimeElement.innerHTML = losAnglesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
setInterval(updateLosAnglesTime, 1000);
//PAris
let ParisElement = document.querySelector("#paris");
let ParisDateElement = document.querySelector(".date");
let parisTimeElement = document.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");
ParisDateElement.innerHTML = parisTime.format("MMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
