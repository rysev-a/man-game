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
let manY = ctxDOM.height - 60;

let changeX = 10;

const draw = ()=> {
  let { leftPressed, rightPressed, topPressed, bottomPressed } = getKeys();
  ctx.clearRect(0, 0, ctxDOM.width, ctxDOM.height);

  ctx.fillRect(0, 0, ctxDOM.width, ctxDOM.height);
  ctx.fillStyle = 'rgba(0,0,0,0.3)';

  console.log(topPressed, bottomPressed);

  if (topPressed) {
    if (manY != 60) {
      manY = manY - 10;
    }
  }

  if (bottomPressed) {
    if (manY < 260) {
      manY = manY + 10;
    }
  }

  console.log(manY);


  if (rightPressed) {
    step++;
    if (step > 3) {
      step = 0;
    };

    if (manX < ctxDOM.width - 40) {
      manX = manX + changeX;
    }

    ctx.drawImage(man[goRight[step]], manX, manY, 40, 60);
    stay = 'stay';
  }

  if (leftPressed) {
    step++;
    if (step > 3) {
      step = 0;
    };

    if (manX != 0) {
      manX = manX - changeX;
    }

    ctx.drawImage(man[goLeft[step]], manX, manY, 40, 60);
    stay = 'stayLeft';
  }

  if (!leftPressed && !rightPressed) {
    step = 0;
    ctx.drawImage(man[stay], manX, manY, 40, 60);
  }
  
  index++;
};

export const start = ()=> {
  setInterval(draw, 100);
}
