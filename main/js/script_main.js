// CLASSES:
// show
// hide


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
})


// Banner
// ---------------------------

bannerImgsPath = "./main/assets/img/banner/";
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
    document.getElementById('headerImg').setAttribute('src', bannerImgsPath + bannerImgs[num]);
    num++;
}, 3000);
