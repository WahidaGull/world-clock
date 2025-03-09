function updateLosAnglesTime() {
  //LosAngles
  let losAnglesElement = document.querySelector("#los-an");
  if (losAnglesElement) {
    let losAnglesDateElement = document.querySelector(".date ");
    let losAnglesTimeElement = document.querySelector(".time ");
    let losAnglesTime = moment().tz("America/Los_Angeles");
    losAnglesDateElement.innerHTML = losAnglesTime.format("MMM Do YYYY");
    losAnglesTimeElement.innerHTML = losAnglesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updatecity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML += `
  <div class="city" id="los-an">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
  
  `;
}

updateLosAnglesTime();
setInterval(updateLosAnglesTime, 1000);
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updatecity);
