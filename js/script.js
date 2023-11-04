setInterval (updateClock, 1000);

// let aniDelay = document.querySelector('.inner-1').style.animationDelay = '1800s';
// setTimeout(function() {aniDelay}, 1800000);


function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    function hourFormat(format) {
        if ( format > 12 ) {
            let formatTime = format - 12;
            return formatTime;
        } else {
            return format;
        }
    }

    document.getElementById('hours').innerText = hourFormat(hours);
    document.getElementById('minutes').innerText = minutes;

    if ( minutes > 30 ) {
        document.getElementById('minutes-under').innerText = ( minutes - 30 );
    } else {
        document.getElementById('minutes-under').innerText = minutes;
    }


    if ( minutes == 0 || minutes == 30 ) {

        const innerOne = document.querySelector('.inner-1');
        innerOne.classList.add('inner-one');
        const innerTwo = document.querySelector('.inner-2');
        innerTwo.classList.add('inner-two');

    }

}
