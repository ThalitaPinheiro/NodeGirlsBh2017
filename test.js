var http = require('http');
var https = require('https')
var fs = require('fs')


var server = http.createServer(function(request, response){
    http.get('http://stormy-bayou-15090.herokuapp.com/country', function(result){
        console.log(request.url);
        //var pais = request.url;
        var body = '';
        result.on("data", function(chunk){
          body += chunk;
        
        });

        result.on("end", function(){
            var paises = JSON.parse(body);
        
            response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
            
            paises.forEach(function(element) {
                response.write('<p><label>Nome: '+element.name+'</label></p>' +
                '<p><label>Latitude: '+element.latitude+'</label></p>' +
                '<p><label>Longitude: '+element.longitude+'</label></p>')   
            });

            response.end();  
        });
    })
  
})

server.listen(8080, function() {
    console.log("Servidor rodando ");
});


