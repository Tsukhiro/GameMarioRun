const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pipeTwo = document.querySelector('.pipeTwo')
const GameOver = document.querySelector('.GameOver')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

    mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pipeTwo.style.animation = 'none';
        pipeTwo.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '../image/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        GameOver.style.display = "block"

        clearInterval(loop);
    }

},10);

document.addEventListener('keydown', jump);

document.addEventListener("keydown", event => {
    const { key } = event
    if (key.toLowerCase() === "r") {
      location.reload()
    }
  })