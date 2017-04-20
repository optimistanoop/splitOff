var https = require('https');
var http = require('http');
var fs = require('fs');
// 1. Include Express Package
const spoExpress = require('express');

// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

// Use Express framework in app
const spoApp = spoExpress();

http.createServer(spoApp).listen(80);
https.createServer(options, spoApp).listen(443);

// Create an HTTP service.
//http.createServer(spoApp).listen(80);

// Create an HTTPS service identical to the HTTP service.
// https.createServer(options, spoApp).listen(443 , (req , res)=>{
//   console.log('Port 2500 is active');
// });
// Get Directory Path Package
var path = require('path');




// Get Directory Path from its package
var publicDir = path.join(__dirname, '/');
console.log(publicDir);
// Middleware For app
spoApp.use((request, response, nextMiddleWare) => {
  nextMiddleWare();
});

spoApp.use((request, response, nextMiddleWare) => {
  nextMiddleWare();
});

spoApp.use(spoExpress.static(path.join(__dirname, 'public')));

spoApp.get('/', (request, response) => {
    response.sendFile(path.join(publicDir, 'index.html'));
    //response.render(path.join(publicDir, 'index'));
})
spoApp.get('/name/:name', (request, response) => {
    response.send("name is set to " + request.params.name);
})

// Listen Port
// spoApp.listen(2500, (request, response) => {
//     console.log('Port 2500 is active');
// });