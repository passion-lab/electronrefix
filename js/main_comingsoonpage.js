// JavaScript page for the  Coming Soon page


(function (html) {
    
    // Variables
    // ----------------------------------
    
    const launchDate = 'August 15, 2023 00:00:00',
    startDate = 'May 8, 2023 12:44:41';

    var isAboutPopup = false;
    var isSocialBtns = false;
    var isNotifyWindow = false;
    var isSubscribed = false;



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



    // About Popup Window
    // ----------------------------------

    const eAboutPopup = function () {

        const aboutBtn = document.getElementById('about-btn'),
        aboutWindow = document.getElementById('about-popup'),
        exitBtn = document.getElementById('exit-about');

        const refixBtn = document.getElementById('refix-btn'),
        socialBtns = document.getElementById('social-btns'),
        allSocialBtns = document.querySelectorAll('#about-popup #social-btns a');
        

        // Open and close window

        aboutBtn.addEventListener('click', () => {
            if (!isAboutPopup) {
                aboutWindow.classList.remove('out');
                aboutWindow.classList.add('appear');
                isAboutPopup = true;
            };
        });

        exitBtn.addEventListener('click', () => {
            if (isAboutPopup) {
                aboutWindow.classList.add('out');
                aboutWindow.classList.remove('appear');
                isAboutPopup = false;
            };
            if (isSocialBtns) {
                refixBtn.classList.remove('active');
                isSocialBtns = false;
                socialBtns.classList.remove('appear');
            };
        });

        window.addEventListener('click', function (e) {
            if (e.target == aboutWindow) {
                aboutWindow.classList.add('out');
                aboutWindow.classList.remove('appear');
                isAboutPopup = false;
            };
        })

        
        // Button activation

        refixBtn.addEventListener('click', () => {
            if (!isSocialBtns) {
                socialBtns.classList.remove('out')
                socialBtns.classList.add('appear');
                isSocialBtns = true;
                refixBtn.classList.add('active');
            } else {
                socialBtns.classList.add('out');
                socialBtns.classList.remove('appear');
                isSocialBtns = false;
                refixBtn.classList.remove('active');
            };
        });
        
        allSocialBtns.forEach(element => {
            element.addEventListener('click', () => {
                socialBtns.classList.add('out');
                socialBtns.classList.remove('appear');
                isSocialBtns = false;
                refixBtn.classList.remove('active');
            })
        });

    };



    // Notify Me Window
    // ----------------------------------

    const eNotifyMeWindow = function () {
        
        const notifyBtn = document.getElementById('notify-btn'),
        notifyWindow = document.getElementById('notify-popup-back'),
        exitNotify = document.getElementById('not-now');

        const mainContent = document.querySelector('#image-content .hologram-logo');


        notifyBtn.addEventListener('click', () => {
            if (!isNotifyWindow) {
                notifyWindow.classList.remove('out');
                notifyWindow.classList.add('appear');
                isNotifyWindow = true;
                isSubscribed === false ? mainContent.classList.add('no-animation') : none;
            };
        });
        
        exitNotify.addEventListener('click', () => {
            if (isNotifyWindow) {
                notifyWindow.classList.add('out');
                notifyWindow.classList.remove('appear');
                isNotifyWindow = false;
                isSubscribed === false ? mainContent.classList.remove('no-animation') : none;
            };
        });

    };



    // Countdown Timer
    // ----------------------------------

    const eCountdown = function () {

        const finalDate = new Date(launchDate).getTime();
        const initialDate = new Date(startDate).getTime();

        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        const progressElement = document.querySelector('#progress-bar');

        let timeInterval;

        if (!(daysElement && hoursElement && minutesElement && secondsElement)) return;

        function timer() {

            const now = new Date().getTime();
            let timeDiff = finalDate - now;
            let timeRange = finalDate - initialDate;
            let timePercent = 100 - (timeDiff / timeRange * 100)

            if (timeDiff <= 0) {
                if (timeInterval) {
                    clearInterval(timeInterval);
                };
                return;
            };

            let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
            let minutes = Math.floor((timeDiff / 1000 / 60) % 60);
            let seconds = Math.floor((timeDiff / 1000) % 60);

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
            progressElement.style.setProperty('--progress-width', timePercent + '%');

        };

        timer();
        timeInterval = setInterval(timer, 1000);
    };



    // Functions initialization
    // -------------------------------------

    (function eInit() {

        ePreloader();
        eAboutPopup();
        eNotifyMeWindow();
        eCountdown();

    })();

})(document.documentElement);
