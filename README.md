# nodejs_app
## Run Node Files
>$ node FILE.js

## References

require: Load Modules For Apps

## Basic Server Configuration

var NAME = require ('Module');

```
var http = require('http');
```

** Define Control Function ( Control Request I/O Server)

function control(petic, resp) { }

** Setup Request Handler
server.on('request', control);

** Setup Server Port Listen
server.listen(8080);

** SetUp Init Method

function init () {
	# Server Config
	# Request Handler
}
exports.init = init; //Exportamos la función

## SetUp Index.js 

