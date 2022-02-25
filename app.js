const btn = document.querySelector('.circle');
const kolo = document.querySelector('.circle1');
const arena = document.querySelector('.main');
const header = document.querySelector('.header');
const maxDuration = 1;
let points = 0;
let duration = 0;
let startTime;
let endTime;

btn.style.top = setTopMargin() / 2 + 'px';
btn.style.left = setleftMargin() / 2 + 'px';

btn.addEventListener('mouseover', button);
kolo.addEventListener('mouseover', mouseOver);

function button() {
    changeHeader();
    btn.style.display = 'none';
    circle();
    startTime = new Date();
}

function mouseOver() {
    endTime = new Date();
    duration = (endTime - startTime) / 1000;
    if(duration >= maxDuration) {
        lose();
        return
    }
    startTime = endTime;
    points++;
    circle();
    changeHeader();
}

function circle() {
    kolo.id = 'circle';
    kolo.style.top = random(setTopMargin()) + 'px';
    kolo.style.left = random(setleftMargin()) + 'px';
    kolo.style.backgroundColor = getColor();
}

function setTopMargin() {
    let maxHeight = arena.clientHeight - 100;
    return maxHeight;
}

function setleftMargin() {
    let maxWidth = arena.clientWidth - 100;
    return maxWidth;
}

function getColor() {
    return 'rgb('+random(255)+', '+random(255)+', '+random(255)+')';
}

function random(number) {
    min = 0;
    max = number;
    return Math.floor(Math.random() * (max - min)) + min;
}

function changeHeader() {
    header.innerHTML = '<h5>Score: '+points+'     Time it took: '+duration+'<br> Try to keep time below '+maxDuration+' s</h5>';
}

function lose() {
    header.innerHTML = '<h3 class="header">Przegrałeś. Twój wynik to: '+points+'</h3><br><button ></button>';
}

asdadsas
