//router.js
function route (handler, pathName, resp) {
	console.log("Nueva petición recibida: " + pathName);
	if (typeof handler[pathName] === 'function') {
		handler[pathName](resp);
	} else {
		console.log("404, " + pathName + " Not Found");
		resp.writeHead(404, {"Content-Type": "text/html"});
		resp.write("404, " + pathName + " Not Found");
		resp.end();
	}
}
/*
function route (pathName) {
	console.log("Nueva petición recibida: " + pathName);
}
*/
exports.route = route;