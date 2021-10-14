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