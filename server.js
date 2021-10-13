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
/*
app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/scripts', express.static(path.join(__dirname, '/scripts')));
app.use("/hdri2cube", express.static(path.join(__dirname, '/HDRI-To-Cubemap/index.html')))
app.set('view engine', 'ejs');
*/

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

/*
app.get('/TNBC',function(req,res) {
    res.sendFile(path.join(__dirname, '/nmbc.html'));
  });

app.get('/TNBC-SNOW',function(req,res) {
  res.sendFile(path.join(__dirname, '/nmbc-snow.html'));
});
*/

app.listen(port, () => {
        console.log("LAD-360video --> listening at: " + port)
});