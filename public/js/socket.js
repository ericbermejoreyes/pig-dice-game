// Init vars
var socket = io();
var getSession = () => {
    return sessionStorage.getItem('socketSession');
};
var updateSession = ($session) => {
    sessionStorage.setItem('socketSession', $session)
};

socket.on('newSession', ($session) => {
   updateSession($session);
});