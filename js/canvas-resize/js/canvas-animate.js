let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

let ctx = canvas.getContext('2d');
let x = Math.random() * innerWidth; 
let y = Math.random() * innerHeight;

var mouse = {
    x:undefined,
    y:undefined
}



let colorArray = [
    '#D0C2B0',
    '#DBCDA4',
    '#6B4945',
    '#E89275',
    '#9CBCB7'
];

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
});
window.addEventListener('resize', function(event){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 

    init();
});


function Circulo(x,y,dx,dy,radius) {
    this.x = x - radius;
    this.y = y - radius;
    this.dx = dx;
    this.dy = dy;
    this.minRadius =Math.random() * 5 + 1;
    this.maxRadius = Math.random() * 40 + 1;
    this.radius =radius;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)];

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI, false);
        ctx.strokeStyle = "blue";
        ctx.stroke(); 
        ctx.fillStyle = this.color; 
        ctx.fill();
    }
    
    this.update = function() {
        if ((this.x + this.radius> innerWidth) || (this.x - this.radius < 0))  {
            this.dx = -this.dx;
        }
        
        if ((this.y + this.radius > innerHeight) || (this.y - this.radius < 0))  {
            this.dy = -this.dy;
        }
        this.x += this.dx; // speed x -> 
        this.y += this.dy; // speed x ->
     
        // Interactivity
        if ( mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50  && mouse.y - this.y > -50) {
            if (this.radius < this.maxRadius) {
                this.radius +=1;
            }
        } else if(this.radius >  this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}


let circulosArray = [];


function init() {
    circulosArray = [];
    for (let i=0;i<800;i++) {
        let radius =Math.floor( Math.random() * 10 +1  );
        let circulo = new Circulo(
            Math.random() * innerWidth - radius,
            Math.random() * innerHeight - radius,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
            radius
        );
        circulosArray.push(circulo);
    }
    animate();
}
function animate() {    
    ctx.clearRect(0,0,innerWidth,innerHeight);
    // Circles 
    for (let i=0;i<circulosArray.length;i++) {
        circulosArray[i].update();
    }
    requestAnimationFrame(animate);
}
init();