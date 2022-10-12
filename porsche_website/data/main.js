var startPosition = '-1000px';
var animate;

function init() {
    imgObj = document.getElementById('porsche');
    imgObj.style.position = 'relative';
    imgObj.style.left = startPosition;
    // imgObj.style.visibility = 'hidden';
}

function startAnimation() {
    stopAnimation();
    var audio = new Audio('data/sounds/car.mp3');
    audio.play();
    imgObj.style.left = startPosition;
    animateCar()
}

function animateCar() {
    if (parseInt(imgObj.style.left) > 3000) {
        stopAnimation()
        return;
    }

    imgObj.style.left = parseInt(imgObj.style.left) + 20 + 'px';
    animate = setTimeout(animateCar, 20);
}

function stopAnimation() {
    clearTimeout(animate);
}

window.onload = function () { init(); };