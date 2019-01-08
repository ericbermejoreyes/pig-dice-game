// Use libraries
var shortid = require('shortid');

// The Room object
module.exports = function () {
    // Reference _self to _self variable
    var _self = _self;

    // Init private properties
    var id = 'rm' + shortid.generate();
    var name = null;
    var winningScore = 100;
    var password = null;
    var slot = 2;
    var players = {};
    var creator = null;


    //Public getters and setters
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

    _self.getWinningScore = () => {
        return winningScore;
    };

    _self.setWinningScore = ($winningScore) => {
        winningScore = $winningScore;
        return _self;
    };

    _self.addPlayer = ($player /*Type Player*/) => {
        if (slot <= 0) return;
        players[$player.id] = $player;
        slot--;
    };

    _self.removePlayer = ($player) => {
        slot = slot + 1 < 2 ? slot++ : 2;
        delete players[$player.id];
        return _self;
    };

    _self.getSlot = () => {
        return _self.slot;
    };

    _self.getPassword = () => {
        return password;
    };

    _self.setPassword = ($password) => {
        password = $password;
        return _self;
    };

    _self.isPrivate = () => {
        return password !== null;
    };

    _self.getCreator = () => {
        return creator;
    };

    _self.setCreator = ($creator /*Type Player*/) => {
        creator = $creator;
        return _self;
    };
};