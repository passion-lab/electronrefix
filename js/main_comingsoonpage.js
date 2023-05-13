// JavaScript page for the  Coming Soon page


(function (html) {
    
    // Variables
    // ----------------------------------
    
    const launchDate = 'August 15, 2023 00:00:00';



    // Preloader
    // ----------------------------------

    const ePreloader = function () {

        document.addEventListener("DOMContentLoaded", function () {
            setTimeout(() => {
                console.log("Loaded");
                document.getElementById('loader').style.visibility = 'hidden';
            }, 1000);
        });
    
    };




    // Countdown Timer
    // ----------------------------------

    const eCountdown = function () {

        const finalDate = new Date(launchDate).getTime();
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        let timeInterval;

        if (!(daysElement && hoursElement && minutesElement && secondsElement)) return;

        function timer() {

            const now = new Date().getTime();
            let diff = finalDate - now;

            if (diff <= 0) {
                if (timeInterval) {
                    clearInterval(timeInterval);
                };
                return;
            };

            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            let minutes = Math.floor((diff / 1000 / 60) % 60);
            let seconds = Math.floor((diff / 1000) % 60);

            if (days <= 99) {
                if (days <= 9) {
                    days = '00' + days;
                } else {
                    days = '0' + days;
                };
            };

            hours <= 9 ? hours = '0' + hours : hours;
            minutes <= 9 ? minutes = '0' + minutes : minutes;
            seconds <= 9 ? seconds = '0' + seconds : seconds;

            daysElement.textContent = days;
            hoursElement.textContent = hours;
            minutesElement.textContent = minutes;
            secondsElement.textContent = seconds;

        }

        timer();
        timeInterval = setInterval(timer, 1000);
    };



    // Functions initialization
    // -------------------------------------

    (function eInit() {

        ePreloader();
        eCountdown();

    })();

})(document.documentElement);
