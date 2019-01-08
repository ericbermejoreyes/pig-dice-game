global.lobby = new Lobby();

function Lobby () {
    // Reference this to a variable
    var _self = this;

    //Init private properties
    var rooms = {};
    var players = {};


    // Public getter and setters
    _self.addRoom = ($room /*Type Room*/) => {
        rooms[$room.getId()] = $room;
        return _self;
    };

    _self.getRoom = ($room /*either type Object Room or String room id*/) => {
        var roomId = typeof $room === 'object' ? $room.getId() : $room;
        return rooms[roomId] | null;
    };

    _self.removeRoom = ($room /*either type Object Room or String room id*/) => {
        var roomId = typeof $room === 'object' ? $room.getId() : $room;
        delete rooms[roomId];
        return _self;
    }

    _self.addPlayer = ($player /*Type Player*/) => {
        var playerId = typeof $player === 'object' ? $player.getId() : $player;
        players[playerId] = $player;
        return _self;
    };

    _self.getPlayer = ($player /*either type Object Player or String player id*/) => {
        return players[$playerId] | null;
    };

    _self.removePlayer = ($player /*either type Object Player or String player id*/) => {
        var playerId = typeof $player === 'object' ? $player.getId() : $player;
        delete players[playerId];
        return _self;
    };

    //Test: Check if there are players;
    _self.logPlayers = () => {
        console.log(players);
    };
}