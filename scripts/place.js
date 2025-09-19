const temperature = 10;
const windSpeed = 5; 

function calculateWindChill(temp, wind) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
}

let windChillText = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
    windChillText = calculateWindChill(temperature, windSpeed) + " °C";
}

document.getElementById("windchill").textContent = windChillText;
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
