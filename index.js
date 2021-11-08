var http = require('http').createServer(handler); //require http server, and create server with function handler()
var fs = require('fs'); //require filesystem module
var sensor = require("node-dht-sensor");
http.listen(8080); //listen to port 8080

function handler (req, res) { //create server
  fs.readFile(__dirname + '/public/index.html', function(err, data) { //read file index.html in public folder
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'}); //display 404 on error
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'}); //write HTML
    res.write(data); //write data from index.html
    return res.end();
  });
  sensor.read(11, 4, function(err, temperature, humidity) {
	if (!err) {
	  const block = document.getElementById('id');
	  console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
	}
  });
}
