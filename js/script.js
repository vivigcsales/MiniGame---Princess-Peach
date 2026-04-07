const peach = document.querySelector('.peach');
const pipe = document.querySelector('.pipe');

const jump = () => {
    peach.classList.add('jump');

    setTimeout(() => {
    peach.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

console.log('loop');

    const pipePosition = pipe.offsetLeft;
    
    const peachPosition = +window.getComputedStyle(peach).bottom.replace('px', '');
    console.log(peachPosition);

    if (pipePosition <= 120 && pipePosition > 0 && peachPosition< 105) {

        pipe.style.animation = 'none';
    pipe.style.left = '${pipePosition}px';

    peach.style.animation = 'none';
    peach.style.bottom = '${peachPosition}px';

    peach.src = '../images/gameover-princess.png';
    peach.style.width = '160px';
    peach.style.marginLeft = '-25px';

    clearInterval(loop);
}

}, 10);

document.addEventListener('keydown', jump);