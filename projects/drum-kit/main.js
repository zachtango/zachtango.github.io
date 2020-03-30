const keys = document.getElementById('main') // div that all the keys are in
                        .getElementsByClassName('box'); // get all the keys inside the 'main' div

const clap = document.getElementById('clap');
const hihat = document.getElementById('hihat');
const kick = document.getElementById('kick');
const openhat = document.getElementById('openhat');
const ride = document.getElementById('ride');
const snare = document.getElementById('snare');
const tom = document.getElementById('tom');
const crash = document.getElementById('crash');

document.addEventListener('keydown', (e) => {
    // executes when key is pressed
    
    switch(e.code){
        case 'KeyA':
            // adds class pressed to change css
            keys[0].className = 'box pressed';

            // plays audio
            clap.pause();
            clap.currentTime = 0;
            clap.play();
            break;
        case 'KeyS':
            keys[1].className = 'box pressed';

            hihat.pause();
            hihat.currentTime = 0;
            hihat.play();
            break;

        case 'KeyD':
            keys[2].className = 'box pressed';

            kick.pause();
            kick.currentTime = 0;
            kick.play();       
            break;

        case 'KeyF':
            keys[3].className = 'box pressed';

            openhat.pause();
            openhat.currentTime = 0;
            openhat.play();
            break;

        case 'KeyG':
            keys[4].className = 'box pressed';

            crash.pause();
            crash.currentTime = 0;
            crash.play();
            break;
        case 'KeyH':
            keys[5].className = 'box pressed';

            ride.pause();
            ride.currentTime = 0;
            ride.play();
            break;
        case 'KeyJ':
            keys[6].className = 'box pressed';

            snare.pause();
            snare.currentTime = 0;
            snare.play();
            break;
        case 'KeyK':
            keys[7].className = 'box pressed';

            tom.pause();
            tom.currentTime = 0;
            tom.play();
            break;
    }

    // LOGGER
    // console.log(e.code);
});

document.addEventListener('keyup', (e) => {
    // executes when key is pressed
    
    switch(e.code){
        case 'KeyA':
            // removes pressed class to change css
            keys[0].className = 'box';    

            break;
        case 'KeyS':
            keys[1].className = 'box';

            break;

        case 'KeyD':
            keys[2].className = 'box';

            break;

        case 'KeyF':
            keys[3].className = 'box';

            break;

        case 'KeyG':
            keys[4].className = 'box';

            break;
        case 'KeyH':
            keys[5].className = 'box';

            break;
        
        case 'KeyJ':
            keys[6].className = 'box';

            break;
        
        case 'KeyK':
            keys[7].className = 'box';

            break;
    }
    
    // LOGGER
    // console.log(e.code);
});
