let canvas = document.querySelector('canvas');

/* canvas.width = window.innerWidth;
canvas.height = window.innerHeight; */
canvas.width = innerWidth;
canvas.height = innerHeight;

let ctx = canvas.getContext('2d');


// Rectangle > ctx.fillRect(x,y,width,height);
ctx.fillStyle = "rgb(150 255 255 / 70%)";
ctx.fillRect(100,100,100,100);
ctx.fillStyle = "rgb(150 200 255 / 70%)";
ctx.fillRect(400,20,100,100);
ctx.fillStyle = "rgb(150 255 200 / 70%)";
ctx.fillRect(600,80,100,100);

// Line 
ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(20,20);
ctx.lineTo(20,30);
ctx.lineTo(30,30);
ctx.lineTo(40,20);
ctx.strokeStyle = "red";
ctx.stroke();

// Circles 
/* ctx.beginPath();
ctx.arc(30,30,30,0,2*Math.PI, false);
ctx.strokeStyle = "blue";
ctx.stroke(); */


for (let i=0; i < 2000; i++) {
    let x=Math.random() * 800;
    let y=Math.random() * 400;
    ctx.beginPath();
    ctx.arc(x,y,30,0,Math.PI*2,false);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
}