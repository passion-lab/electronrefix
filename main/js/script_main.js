
// Banner

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
