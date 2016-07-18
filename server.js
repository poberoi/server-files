//require/import the HTTP module
var http = require('http');

//define the ports to listen to
var PORT1 = 7000;
var PORT2 = 7500;

//function which handles the request and sends response
function handleRequest1(request, response){
  response.end('You are the man!');
}

function handleRequest2(request, response){
  response.end('You suck at this Dude!');
}

//create server
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);


//start our server and let us know if it is listening
server1.listen(PORT1, function(){
  console.log('Server listening on: http://localhost:%s', PORT1)
});

server2.listen(PORT2, function(){
  console.log('Server listening on: http://localhost:%s', PORT2)
})