import { getMan } from './man'
import { getKeys } from './control'


const man = getMan();
const ctxDOM = document.getElementById('ctx');
const ctx = ctxDOM.getContext('2d');

let index = 0;
let step = 0;
let stay = 'stay';

// ctx.scale(-1, 1);a
// ctx.translate(-40, 0);

const goLeft = ['left2', 'left1', 'left2', 'left3'];
const goRight = ['right2', 'right1', 'right2', 'right3'];


let manX = 0;

const draw = ()=> {
  let { leftPressed, rightPressed } = getKeys();

  if (rightPressed) {
    step++;
    if (step > 3) {
      step = 0;
    };

    if (manX < ctxDOM.width - 40) {
      manX = manX + 10;
    }

    ctx.clearRect(0, 0, ctxDOM.width, ctxDOM.height);
    ctx.drawImage(man[goRight[step]], manX, ctxDOM.height - 60, 40, 60);
    stay = 'stay';
  }

  if (leftPressed) {
    step++;
    if (step > 3) {
      step = 0;
    };

    if (manX != 0) {
      manX = manX - 10;
    }

    ctx.clearRect(0, 0, ctxDOM.width, ctxDOM.height);
    ctx.drawImage(man[goLeft[step]], manX, ctxDOM.height - 60, 40, 60);
    stay = 'stayLeft';
  }

  if (!leftPressed && !rightPressed) {
    step = 0;
    ctx.clearRect(0, 0, ctxDOM.width, ctxDOM.height);
    ctx.drawImage(man[stay], manX, ctxDOM.height - 60, 40, 60);
  }
  
  index++;
};

export const start = ()=> {
  setInterval(draw, 100);
}
