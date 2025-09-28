// Footer logic

const current = document.querySelector("#currentyear");

const lastM = document.querySelector("#lastModified");

const temp = document.querySelector(".temperature");

const wind = document.querySelector(".wind");

const windChilltag = document.querySelector(".windChill");

let lastModif = new Date(document.lastModified);

const today = new Date();

lastM.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US",
{
    dateStyle: "short",
    timeStyle: "short"
}).format(lastModif)}`

current.innerHTML = today.getFullYear();

//Windchill function

function getWindChill(tempC, windMph) {
    if (tempC <= 11 && windMph > 4.8) {
        let windChill = 35.74 + 0.6215 * tempC - 35.75 * Math.pow(windMph, 0.16)
        return windChill.toFixed(1)
    } else 
    return tempC;
}
let temperature = 11;
let windT = 8;

let windChill = getWindChill(temperature,windT);

//Inserting temperature
temp.innerHTML = `<p><strong>Wind Chill:</strong> ${temperature}</p>`;
wind.innerHTML =  `<p><strong>Wind:</strong> ${windT}</p>`;
windChilltag.innerHTML = `<p><strong>Wind Chill:</strong> ${windChill}</p>`;

