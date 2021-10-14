const canvas = document.getElementById("CanvasCircle");
const context = canvas.getContext("2d");
// let color = 'green'

// function drawCircle1() {
//   color = color === 'green' ? 'blue' : 'green'
//   context.beginPath();
//   context.strokeStyle = color
//   context.fillStyle = color
//   context.arc(150, 150, 100, 0, 2 * Math.PI);
//   context.fill();
//   context.stroke()
// }

// drawCircle1()
// setInterval(()=> drawCircle1(),1000);

// context.beginPath();
// context.strokeStyle = color

const x_start = 5;
const y_start = 5;

let x = x_start;
let y = y_start;

let i_start = 5;
const amount = x + 5

function drawStairsRow() {
  for(i = i_start; i<=x;i++){
    context.fillRect(i* 25, y* 25, 20, 20);
  }
  x++;
  y++;
}

const drawStarisInterval = setInterval(() => {
  drawStairsRow()
  if (x === amount) {
    window.clearInterval(drawStarisInterval);
  }
}, 1000);

function animateBall(){
  
}