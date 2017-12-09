let keys = {
  leftPressed: false,
  rightPressed: false
};


document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler (e) {
  if (e.keyCode == 39) {
    keys.rightPressed = true;
  }
  else if (e.keyCode == 37) {
    keys.leftPressed = true;
  }
}

function  keyUpHandler (e) {
  if (e.keyCode == 39) {
    keys.rightPressed = false;
  }
  else if (e.keyCode == 37) {
    keys.leftPressed = false;
  }
}

export const getKeys = ()=> keys;
