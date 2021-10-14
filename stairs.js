const canvas = document.getElementById("Canvas");
const context = canvas.getContext("2d");
const ball = canvas.getContext("2d");
const ballColor = 'green'

const x_start = 5;
const y_start = 5;

let x = x_start;
let y = y_start;

let i_start = 5;
const amount = x + 5

class Stair {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
};

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
};

let stairs = []

function drawStairsRow() {
  for (i = i_start; i <= x; i++) {
    const newStair = new Stair(i * 25,y * 25);
    context.fillRect(newStair.x, newStair.y, 20, 20);
    stairs.push(newStair)
  }
  x++;
  y++;
}

var circle_x = x_start*25+7.5
var circle_y = (y_start-1) * 25 + 10

const drawStarisInterval = setInterval(() => {
  drawStairsRow()
  if (x === amount) {
    window.clearInterval(drawStarisInterval);
    
    //changing ball collor for better to looks better when bouncing
    ball.strokeStyle = ballColor
    ball.fillStyle = ballColor

    var BallMain = new Ball(x_start*25+7.5,(y_start-1) * 25 + 10)

    setInterval(()=> {
      drawCircle(BallMain)
      if(BallMain.x < y*25){
        BallMain = goDown(BallMain);
        console.log(BallMain)
      }
    }, 500); 
  }
}, 10);

function drawCircle(BallMain) {
  ball.beginPath();
  ball.arc(BallMain.x, BallMain.y, 10, 0, 2 * Math.PI);
  ball.fill();
  ball.stroke()
  ball.closePath();
}

function goDown(BallMain){

  while(BallMain.x< 100){
    ball.clearRect(BallMain.x,BallMain.y,10, 2 * Math.PI);
    BallMain = new Ball(BallMain.x+25,BallMain.y)
    console.log(BallMain.y)
    drawCircle(BallMain)
  }

  BallMain = new Ball(BallMain.x+25,BallMain.y)

  while(BallMain.y< 25){
    ball.clearRect(BallMain.x,BallMain.y,10, 2 * Math.PI);
    BallMain = new Ball(BallMain.x,BallMain.y+25)
    console.log(BallMain.y)
    drawCircle(BallMain)
  }

  BallMain = new Ball(BallMain.x,BallMain.y+25)

  return BallMain;
}



//! PHYSIC TESTING

// // Velocity x
// var vx = 5.0;
// // Velocity y - randomly set
// var vy;

// var gravity = 0.5;  
// var bounce = 0.7; 
// var xFriction = 0.1;

// function ballMovement(BallMain) {
//   BallMain.x += vx;
//   BallMain.y += vy;
//   vy += gravity;

//   //If either wall is hit, change direction on x axis

//   for (const element of theArray) {
//     // ...use `element`...
//   }


//   if (BallMain.x + BallMain.radius !=  canvas.width || BallMain.x - BallMain.radius < 0) {
//     vx *= -1;
//   }

//   // Ball hits the floor
//   if (BallMain.y + BallMain.radius > canvas.height) {// ||

//     // Re-positioning on the base
//     BallMain.y = canvas.height - BallMain.radius;
//     //bounce the ball
//     vy *= -bounce;
//     //do this otherwise, ball never stops bouncing
//     if (vy < 0 && vy > -2.1)
//       vy = 0;
//     //do this otherwise ball never stops on xaxis
//     if (Math.abs(vx) < 1.1)
//       vx = 0;
//     if (vx > 0)
//       vx = vx - xFriction;
//     if (vx < 0)
//       vx = vx + xFriction;

//   }
// }