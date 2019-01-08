// Use libraries
var shortId = require('shortid');

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

    // Init events
    _self.listenToHomeScreenInputs = () => {
        console.log(lobby);

        // Update the session in client
        updateClientSession(_self.getCurrentSession());

        // Listen when player creates a room
        socket.on(_self.getId() + '/createRoom', ($roomName) => {

        });

        // Listen when player joins a room
        socket.on(_self.getId() + '/joinRoom', ($roomId) => {

        });

        // Listen when player leaves a room
        socket.on(_self.getId() + '/leaveRoom', () => {
            _self.setRoom(null);
        });

        return _self;
    }
};