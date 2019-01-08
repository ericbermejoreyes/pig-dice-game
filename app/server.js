// Init vars
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var Player = require('./objects/player');

// Configurables
// Set port to the desired value
var port = 3000;

// Initiate the lobby
require('./lobby');

// Serve public assets
app.use(express.static('public'));

// Register routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../public/index.html');
});

//socket.io connection
io.on('connection', (socket) => {
    // Test: Check if a user has connected
    // console.log(socket.id);

    var player = new Player(socket);

    // Add the player into the lobby
    lobby.addPlayer(player);
});

// begin listening on configured port
server.listen(port, () => {
    // log message when successful
    console.log('server is running on port ' + port);
});