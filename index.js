const stay = new Image();
const stayLeft = new Image();
const right1 = new Image();
const right2 = new Image();
const right3 = new Image();
const left1 = new Image();
const left2 = new Image();
const left3 = new Image();

stay.src = "/img/man/stay.png";
stayLeft.src = "/img/man/stay-left.png";

left1.src = "/img/man/left-1.png";
left2.src = "/img/man/left-2.png";
left3.src = "/img/man/left-3.png";
right1.src = "/img/man/right-1.png";
right2.src = "/img/man/right-2.png";
right3.src = "/img/man/right-3.png";

const getMan = () => ({
  stay: stay,
  stayLeft: stayLeft,
  right1: right1,
  right2: right2,
  right3: right3,
  left1: left1,
  left2: left2,
  left3: left3,
});

let keys = {
  leftPressed: false,
  rightPressed: false,
  topPressed: false,
  bottomPressed: false,
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    keys.rightPressed = true;
  }

  if (e.keyCode == 37) {
    keys.leftPressed = true;
  }

  if (e.keyCode == 38) {
    keys.topPressed = true;
  }

  if (e.keyCode == 40) {
    keys.bottomPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    keys.rightPressed = false;
  }

  if (e.keyCode == 37) {
    keys.leftPressed = false;
  }

  if (e.keyCode == 38) {
    keys.topPressed = false;
  }

  if (e.keyCode == 40) {
    keys.bottomPressed = false;
  }
}

const getKeys = () => keys;

///////// game ///////////

const man = getMan();
const ctxDOM = document.getElementById("ctx");
const ctx = ctxDOM.getContext("2d");

let index = 0;
let step = 0;
let stayState = "stay";

// ctx.scale(-1, 1);a
// ctx.translate(-40, 0);

const goLeft = ["left2", "left1", "left2", "left3"];
const goRight = ["right2", "right1", "right2", "right3"];

let manX = 0;

const draw = () => {
  let { leftPressed, rightPressed } = getKeys();
  ctx.clearRect(0, 0, ctxDOM.width, ctxDOM.height);

  ctx.fillRect(0, 0, ctxDOM.width, ctxDOM.height);
  ctx.fillStyle = "rgba(0,0,0,0.3)";

  if (rightPressed) {
    step++;
    if (step > 3) {
      step = 0;
    }

    if (manX < ctxDOM.width - 40) {
      manX = manX + 10;
    }

    ctx.drawImage(man[goRight[step]], manX, ctxDOM.height - 60, 40, 60);
    stayState = "stay";
  }

  if (leftPressed) {
    step++;
    if (step > 3) {
      step = 0;
    }

    if (manX != 0) {
      manX = manX - 10;
    }

    ctx.drawImage(man[goLeft[step]], manX, ctxDOM.height - 60, 40, 60);
    stayState = "stayLeft";
  }

  if (!leftPressed && !rightPressed) {
    step = 0;
    ctx.drawImage(man[stayState], manX, ctxDOM.height - 60, 40, 60);
  }

  index++;
};

const start = () => {
  setInterval(draw, 100);
};

start();
