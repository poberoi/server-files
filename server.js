var http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response){
  response.end('It Works!! Path Hit: ' + request.url);
}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

server1.listen(PORT1, function(){
  console.log('Server listening on: http://localhost:%s', PORT1)
  console.log('You are the man!!!');
});

server2.listen(PORT2, function(){
  console.log('Server listening on: http://localhost:%s', PORT2)
  console.log('You suck at this Dude!!!');
})