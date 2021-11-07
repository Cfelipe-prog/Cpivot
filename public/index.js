var sensor = require("node-dht-sensor");


sensor.read(11, 4, function(err, temperature, humidity) {
function leer() {
console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);}
setInterval(leer, 1500);
});

