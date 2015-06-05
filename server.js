//Servidor.js
function init (route, handler) {
	var server = require('http').createServer();
	var url = require('url');
	function control(request, response) {
		var pathName = url.parse(request.url).pathname;
		console.log('Petición recibida'); //Texto que saldrá por consola
		route(handler,pathName,response);
		response.writeHead(200, {'content-type': 'text/plain'});
		//response.write('Peticion recibida en el servidor.');
		//response.end();
	}
	server.on('request', control).listen(8080);
	console.log('Servidor inicializado');
}
exports.init = init; //Exportamos la función