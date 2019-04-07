const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const https = require('https');

const sslOptions = {
	key: fs.readFileSync('./cert/server.key'),
	cert: fs.readFileSync('./cert/server.pem')
};

https.createServer(sslOptions, app).listen(9000);
app.use(express.static(path.join(__dirname, '../build')));

console.log(this);
app.get('/', function(req, res) {
	console.log(req);
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
