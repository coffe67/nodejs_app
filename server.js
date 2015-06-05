//Servidor.js
function init (route, handler) {
	var server = require('http').createServer();
	function control(request, response) {
		var pathName = url.parse(request.url).pathname;
		route(handler,pathName,response);
		console.log('Petición recibida'); //Texto que saldrá por consola
		response.writeHead(200, {'content-type': 'text/plain'});
		respose.write('Peticion recibida en el servidor.');
		response.end();
	}
	server.on('request', control).listen(8080);
	console.log('Servidor inicializado');
}
exports.init = init; //Exportamos la función