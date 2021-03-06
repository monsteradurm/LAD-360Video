const express = require("express")
const app = express()
const port = 3000
const path = require('path');
const httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

const cors = require('cors');

proxy.on('error', function(e) {
    console.log(e);
});

app.options('*', cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.static(path.join(__dirname, '/views')));

app.use('/LAD-360Video/assets', express.static(path.join(__dirname, '/assets')));

app.get('/LAD-360Video',function(req,res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

var server = app.listen(() => {
        console.log("LAD-360video --> listening ", server.address().port)
});