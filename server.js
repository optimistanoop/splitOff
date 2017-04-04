// Include Express Package
const spoExpress = require('express');

// Use Express framework in app
const spoApp = spoExpress();

// Get Directory Path Package
var path = require('path');

spoApp.use(spoExpress.static(path.join(__dirname, 'public')));


// Get Directory Path from its package
var publicDir = path.join(__dirname, '/');
console.log(publicDir);
// Middleware For app
spoApp.use((request, response, nextMiddleWare) => {
  console.log('First MiddleWare');
  nextMiddleWare();
});

spoApp.use((request, response, nextMiddleWare) => {
  console.log('Second MiddleWare');
  nextMiddleWare();
});
//
// spoApp.engine('.html');
// spoApp.set('view engine', '.html');

spoApp.get('/', (request, response) => {
    response.sendFile(path.join(publicDir, 'index.html'));
    //response.render(path.join(publicDir, 'index'));
})

// Listen Port
spoApp.listen(2500, (request, response) => {
    console.log('Port 2500 is active');
});
