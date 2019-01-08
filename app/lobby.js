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

    _self.getRoom = ($roomId) => {
        return rooms[$roomId] | null;
    };

    _self.removeRoom = ($room /*either type Object Room or String roomId*/) => {
        var roomId = typeof $room === 'object' ? $room.getId() : $room;
        delete rooms[roomId];
        return _self;
    }
}