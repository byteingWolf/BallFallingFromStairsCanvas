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

stairs = []

function drawStairsRow() {
  for (i = i_start; i <= x; i++) {
    const newStair = new Stair(i * 25,y * 25);
    context.fillRect(newStair.x, newStair.y, 20, 20);
    stairs.push(newStair)
  }
  x++;
  y++;
}

const drawStarisInterval = setInterval(() => {
  drawStairsRow()
  if (x === amount) {
    window.clearInterval(drawStarisInterval);
    
    //changing ball collor for better to looks better when bouncing
    ball.strokeStyle = ballColor
    ball.fillStyle = ballColor
    drawCircle();
    // setInterval(draw, 1000/35); 
  }
}, 1000);

function drawCircle() {
  ball.beginPath();
  ball.arc(x_start*25+7.5, (y_start-1) * 25 + 10, 10, 0, 2 * Math.PI);
  ball.fill();
  ball.stroke()
  ballMovement()
}

// Velocity x
var vx = 5.0;
// Velocity y - randomly set
var vy;

var gravity = 0.5;  
var bounce = 0.7; 
var xFriction = 0.1;

function ballMovement() {
  ball.x += vx;
  ball.y += vy;
  vy += gravity;

  //If either wall is hit, change direction on x axis
  if (ball.x + ball.radius !=  canvas.width || ball.x - ball.radius < 0) {
    vx *= -1;
  }

  // Ball hits the floor
  if (ball.y + ball.radius > canvas.height) {// ||

    // Re-positioning on the base
    ball.y = canvas.height - ball.radius;
    //bounce the ball
    vy *= -bounce;
    //do this otherwise, ball never stops bouncing
    if (vy < 0 && vy > -2.1)
      vy = 0;
    //do this otherwise ball never stops on xaxis
    if (Math.abs(vx) < 1.1)
      vx = 0;
    xF();

  }
}

function xF() {
  if (vx > 0)
    vx = vx - xFriction;
  if (vx < 0)
    vx = vx + xFriction;
}

function draw() {
  ball.clearRect(0,0,canvas.width, canvas.height); 
  //draw cirlce
  ball.beginPath();
  ball.arc(ball.x, ball.y, , 0, Math.PI*2, false);
  ball.fillStyle = ball.color;
  ball.fill();
  ball.closePath();
  
  ballMovement();

}