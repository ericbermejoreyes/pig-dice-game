// Use libraries
var shortid = require('shortid');

// The Room object
module.exports = function () {
    // Init private properties
    var id = 'rm' + shortid.generate();
    var name = null;
    var winningScore = 100;
    var password = null;
    var slot = 2;
    var players = {};
    var creator = null;


    //Public getters and setters
    this.getId = () => {
        return id;
    };

    this.getName = () => {
        return name;
    };

    this.setName = ($name) => {
        name = $name;
    };

    this.getWinningScore = () => {
        return winningScore;
    };

    this.setWinningScore = ($winningScore) => {
        winningScore = $winningScore;
    };

    this.addPlayer = ($player) => {
        if (slot <= 0) return;
        players[$player.id] = $player;
        slot--;
    };

    this.removePlayer = ($player) => {
        delete players[$player.id];
    };

    this.getPassword = () => {
        return password;
    };

    this.setPassword = ($password) => {
        password = $password;
    };

    this.isPrivate = () => {
        return password !== null;
    };

    this.getCreator = () => {
        return creator;
    };

    this.setCreator = ($creator /*Type Player*/) => {
        creator = $creator;
    };
};