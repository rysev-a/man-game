let keys = {
  leftPressed: false,
  rightPressed: false,
  topPressed: false,
  bottomPressed: false,
};


document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler (e) {
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

function  keyUpHandler (e) {
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

export const getKeys = ()=> keys;
