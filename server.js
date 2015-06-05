//Servidor.js
function init () {
	var server = require('http').createServer();
	function control(petic, resp) {
		var pathName = url.parse(petic.url).pathname;
		route(pathName);
		console.log('Petición recibida'); //Texto que saldrá por consola
		resp.writeHead(200, {'content-type': 'text/plain'});
		resp.write('Peticion recibida en el servidor.');
		resp.end();
	}
	server.on('request', control).listen(8080);
	console.log('Servidor inicializado');
}
exports.init = init; //Exportamos la función