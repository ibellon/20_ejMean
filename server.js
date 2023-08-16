var mongoose = require('mongoose');
var dbUri = 'mongodb://127.0.0.1:27017/local';
mongoose.connect(dbUri);

mongoose.connection.on('connected', function(){
    console.log('Mongoose default connection open to '+dbUri);
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose default connection open to '+err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api', (req, res) => {
    res.send('La API funciona');
});

require('./server/routes/tarea') (app);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/ej-mean/index.html'));
});

const port = process.env.port || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('API running on localhost:'+port));


