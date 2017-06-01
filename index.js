const express = require('express');//requiring express node will look for express in node modules
const server = express();//technically function spits ut complex object

const port = 8080;
//d__dirname is node only
server.use(express.static(__dirname + '/public'));     //take this little piece of additional power up //give you path on my computer give to anyone that rewquests it
//set up what to listen for
server.get('/counter', (request, response)=> {
  //response.send('it works');
  response.sendFile('public/html/index.html',{root:__dirname});
});   //where to listern for tell server what listen forse

//server.get('/counter', function(request,response){}.)
//actual listening
server.listen(port,() =>{
  console.log('Now listening on port ', port);
});
