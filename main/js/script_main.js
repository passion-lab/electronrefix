// CLASSES:
// show
// hide
// hovered


// Modal
// ---------------------------

body = document.querySelector('body');
modal = document.getElementById('modal');
btn = document.getElementById('modal-btn');

window.addEventListener('load', () => {
    modal.classList.add("show");
    body.style.overflow = 'hidden';
});

btn.addEventListener('click', () => {
    modal.classList.replace('show', 'hide');
    body.style.overflow = 'initial';
});


// Navigation
// ---------------------------

// let menu = document.querySelectorAll('nav ul li a');
// menu.forEach(elem => {
//     elem.addEventListener('mouseover', () => {elem.classList.add("hovered")});
//     elem.addEventListener('mouseout', () => {elem.classList.remove("hovered")});
// });


// Banner
// ---------------------------

bannerImgs = [
    "motherboard_1.png",
    "motherboard_2.png",
    "mac.png",
    "cctv_camera.png",
    "desktop.png",
    "printer.png",
    "laptop.png"
];

let num = 0;
setInterval(() => {
    num == bannerImgs.length ? num = 0 : null;
    document.getElementById('headerImg').setAttribute('src', "./main/assets/img/banner/" + bannerImgs[num]);
    num++;
}, 3000);
