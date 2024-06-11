function randomInt(n, m) {
  return Math.floor(Math.random() * (m - n) + n);
}

function randomDec(n, m) {
  return Math.random() * (m - n) + n;
}

// collision detection betwee 2 rectangle objects.
// rectangle objects must each have x,y,w, and h keys representing their locations and size.
// Returns true if the 2 rectangles overlap.

function rectCollide(rect1, rect2) {}

function jump() {
  if (player.onGround) {
    player.y = player.y - player.gravity;
    player.onGround = false;
    player.gravity--;
  } else {
    //player is in mid-jump
    player.y = player.y - player.gravity;
    player.gravity--;

    //check if back on ground
    if (player.y + player.h >= 400) {
      player.y = cnv.height - player.h;
      player.onGround = true;
      player.gravity = 20;
      wPressed = false;
    }
  }
}

function createStar() {
  let colors = ["black", "blue", "green", "orange", "red", "yellow"];
  // colors[randomInt];
  let oneStar = {
    y: -40,
    x: randomInt(0, 360),
    w: 40,
    h: 40,
    ySpeed: randomDec(1, 4),
    color: colors[randomInt(0, 6)],
  };

  return oneStar;
}

// function rectCollide(r1, r2) {
//   //r1 hits top of r2
//   if (r1.y + r1.h < r2.y) {
//     return true;
//   }
//   //r1 hits bottom of r2
//   if (r1.y < r2.y + r2.h) {
//     return true;
//   }

//   //r1 hits left side of r2
//   if (r1.x + r1.w > r2.x) {
//     return true;
//   }

//   //r1 hits right side of r2
//   if (r1.x < r2.x + r2.w) {
//     return true;
//   }

//   return false;
// }

function rectCollide(rect1, rect2) {
  if (
    rect1.x + rect1.w > rect2.x &&
    rect1.x < rect2.x + rect2.w &&
    rect1.y + rect1.h > rect2.y &&
    rect1.y < rect2.y + rect2.h
  ) {
    return true;
  } else {
    return false;
  }
}
