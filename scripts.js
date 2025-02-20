let prevbutton = document.getElementById('prev');
let nextbutton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlider() {
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) itemOld.classList.remove("active");

    let dotsOld = indicator.querySelector('ul li.active');
    if (dotsOld) dotsOld.classList.remove('active');

    dots[active].classList.add('active');

    let numberIndicator = indicator.querySelector('.number');
    if (numberIndicator) {
        numberIndicator.innerHTML = '0' + (active + 1);
    }

    items[active].classList.add('active');
}

nextbutton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
};

prevbutton.onclick = () => {
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    setSlider();
};
