const stay = new Image();
const stayLeft = new Image();
const right1 = new Image();
const right2 = new Image();
const right3 = new Image();
const left1 = new Image();
const left2 = new Image();
const left3 = new Image();

stay.src = '/img/man/stay.png';
stayLeft.src = '/img/man/stay-left.png';

left1.src = '/img/man/left-1.png';
left2.src = '/img/man/left-2.png';
left3.src = '/img/man/left-3.png';
right1.src = '/img/man/right-1.png';
right2.src = '/img/man/right-2.png';
right3.src = '/img/man/right-3.png';



export const getMan = ()=> ({
  stay: stay,
  stayLeft: stayLeft,
  right1: right1,
  right2: right2,
  right3: right3,
  left1: left1,
  left2: left2,
  left3: left3
});


