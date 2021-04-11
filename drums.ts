let tinkSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let boomSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;

const channel1: any[] = [];
appStart();

function appStart() {
    document.addEventListener('keypress', onKeyPress);
    const btnPlayChannel1 = document.querySelector('#playChannel1')
    btnPlayChannel1.addEventListener('click', onPlayChannel1);
    getAudioElements();
}
function onPlayChannel1(): void {
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })

}

function getAudioElements(): void {
    tinkSound = document.querySelector('[data-sound="tink"]');
    rideSound = document.querySelector('[data-sound="ride"]');
    boomSound = document.querySelector('[data-sound="boom"]');
    clapSound = document.querySelector('[data-sound="clap"]');
}

function onKeyPress(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;

    channel1.push({ key, time })

    playSound(key);
    console.log(channel1);
}

function playSound(key: string) {
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