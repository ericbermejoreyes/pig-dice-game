// Use libraries
var shortId = require('shortid');
var Room = require('./room');

// The Player object
module.exports = function ($socket) {
    // Reference this to a variable
    var _self = this;

    // Init private properties
    var id = 'pl' + shortId.generate();
    var name = null;
    var score = 0;
    var wins = 0;
    var losses = 0;
    var socket = $socket;
    var currentSession = id;
    var room = null;
    var previousRoom = room;
    var readyState = false;

    //Init private methods
    var updateClientSession = ($session) => {
        socket.emit('newSession', _self.getCurrentSession());
    };

    //Public getter and setters
    _self.getId = () => {
        return id;
    };

    _self.getName = () => {
        return name;
    };

    _self.setName = ($name) => {
        name = $name;
        return _self;
    };

    _self.getScore = () => {
        return score;
    };

    _self.setScore = ($score) => {
        score = $score;
        return _self;
    };

    _self.getWins =() => {
        return wins;
    };

    _self.setWins = ($wins) => {
        wins = $wins;
        return _self;
    };

    _self.getLosses = () => {
        return losses;
    };

    _self.setLosses = ($losses) => {
        losses = $losses;
        return _self;
    };

    _self.getRoom = () => {
        return room;
    };

    _self.setRoom = ($room /*Type Room*/) => {
        previousRoom = room === null ? $room : room;
        room = $room;
        return _self;
    };

    _self.getPreviousRoom = () => {
        return previousRoom;
    };

    _self.setPreviousRoom = ($room /*Type Room*/) => {
        previousRoom = $room;
        return _self;
    };

    _self.setCurrentSession = ($session) => {
        currentSession = $session;
        return _self;
    };

    _self.getCurrentSession = () => {
        return currentSession;
    };

    _self.getReadyState = () => {
        return readyState;
    };

    _self.setReadyState = ($flag /*boolean*/) => {
        readyState = $flag;
        return _self;
    };

    // Events
    _self.listenToHomeScreenInputs = () => {
        // Update the session in client
        updateClientSession(_self.getCurrentSession());

        // Listen when player creates a room
        socket.on(_self.getId() + '/createRoom', ($roomName) => {
            var room = new Room();
            room
                .setCreator(_self)
                .addPlayer(_self);
            _self.setRoom(room);
            lobby.addRoom(room);

            // Listen when player starts the game
            socket.on(_self.getRoom().getId() + '/' + _self.getId() + '/startGame', () => {
                //do something here
            });
        });

        // Listen when player joins a room
        socket.on(_self.getId() + '/joinRoom', ($roomId) => {
            var room = lobby.getRoom($roomId);
            _self.setRoom(room);
        });

        // Listen when player leaves a room
        socket.on(_self.getId() + '/leaveRoom', () => {
            _self.setRoom(null);
        });

        // Remove player from stack upon disconnection
        socket.on('disconnect', () => {
            lobby.removePlayer(_self);
        });

        return _self;
    };

    _self.listenToHomeScreenInputs();
};