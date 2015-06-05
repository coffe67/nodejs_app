//index.js
var servidor = require('./server'); //Importamos el módulo servidor creado
var router = require('./router'); //Importamos el módulo router
var handlers = require('./handler'); //Importamos el módulo manejador
var handler = {} // Add URLS  URL(PATH, VIEW,)
handler["/"] = handlers.funcion_1;
handler["/:var"] = handlers.funcion_1;
handler["/funcion_2"] = handlers.funcion_2;

servidor.init(router.route, handler); //Llama al método inicializar del objeto servidor