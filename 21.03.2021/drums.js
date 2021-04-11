var tinkSound;
var rideSound;
var boomSound;
var clapSound;
var channel1 = [];
appStart();
function appStart() {
    document.addEventListener('keypress', onKeyPress);
    var btnPlayChannel1 = document.querySelector('#playChannel1');
    btnPlayChannel1.addEventListener('click', onPlayChannel1);
    getAudioElements();
}
function onPlayChannel1() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function getAudioElements() {
    tinkSound = document.querySelector('[data-sound="tink"]');
    rideSound = document.querySelector('[data-sound="ride"]');
    boomSound = document.querySelector('[data-sound="boom"]');
    clapSound = document.querySelector('[data-sound="clap"]');
}
function onKeyPress(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    channel1.push({ key: key, time: time });
    playSound(key);
    console.log(channel1);
}
function playSound(key) {
    switch (key) {
        case 'q':
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case 'w':
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case 'e':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case 'r':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
    }
}
