// 1. Include Express Package
const spoExpress = require('express');

// Use Express framework in app
const spoApp = spoExpress();

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

// Listen Port
spoApp.listen(2500, (request, response) => {
    console.log('Port 2500 is active');
});
