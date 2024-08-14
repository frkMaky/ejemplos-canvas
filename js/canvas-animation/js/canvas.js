let canvas = document.querySelector('#lienzo');
let ctx = canvas.getContext("2d"); // Agregar contexto 2d al lienzo (area de trabajo)

console.log(ctx); // Mostrar las propiedades del contexto


// Cuadrado ----------------------------------

// Relleno
ctx.fillStyle = "cyan";
ctx.fillRect(10,10,100,100);            // ctx.fillRect(x1,y1,x2,y2);

// Contorno
ctx.linewidth = 5;                      // ancho
ctx.strokeStyle = "rgba(255,0,255,1)";  // color
ctx.rect(10,10,100,100);                // posicion
ctx.stroke();                           // habilitar el contorno


// Circulo ----------------------------------

ctx.beginPath();                        // Comenzar camino    
ctx.arc(300,300,80,0,2*Math.PI);        // ctx.arc(x1, y1, r, startAngle, finishAngle)

// Relleno
ctx.fillStyle = "green";
ctx.fill();

// Contorno 
ctx.linewidth = 5;                      // ancho
ctx.strokeStyle = "purple";             // color
ctx.stroke();                           // habilitar el contorno


// Lineas ----------------------------------

ctx.beginPath();                        // Comenzar camino    
ctx.moveTo (0,0);                       // x,y de comienzo
ctx.lineTo (200,200);                   // x,y de final
ctx.lineTo (400,200);                   // x,y de final
ctx.lineTo (600,400);                   // x,y de final
ctx.lineTo (800,200);                   // x,y de final
ctx.lineTo (1000,200);                   // x,y de final
ctx.lineTo (1000,0);                   // x,y de final

// Relleno
ctx.fillStyle = "rgb( 0 0 255 / 70%) ";
ctx.fill();

// Contorno 
ctx.linewidth = 5;                      // ancho
ctx.strokeStyle = "yellow";             // color
ctx.stroke();                           // habilitar el contorno

// Curvas ----------------------------------

ctx.beginPath();                                    // Comenzar camino    
ctx.moveTo (0,500);                                 // x,y de comienzo
ctx.bezierCurveTo(200,300,400,400,500,500);       // PLUMA curza bezier > ctx.bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x2,y2)

// Cuadros para marcar cpx1,cpy1,cpx2,cpy2 (Palancas de la pluma)
ctx.rect(200,300,10,10);                // posicion
ctx.stroke();                           // habilitar el contorno
ctx.rect(400,400,10,10);                // posicion
ctx.stroke();                           // habilitar el contorno

// Contorno 
ctx.linewidth = 5;                      // ancho
ctx.strokeStyle = "black";              // color
ctx.stroke();                           // habilitar el contorno

// Relleno
ctx.fillStyle = "rgb( 0 0 255 / 70%) ";
ctx.fill(); 

// Degradados ----------------------------------
// ctx.createLinearGradient(x1,y1,x2,y2);

let gradient = ctx.createLinearGradient(0,300,100,400);
gradient.addColorStop(0,"red");
gradient.addColorStop(1,"blue");
ctx.fillStyle = gradient;
ctx.fillRect(0,300,100,100);            // ctx.fillRect(x1,y1,x2,y2);

// Degradados circulo ----------------------------------
// ctx.createRadialGradient(x1,y1,r1,x2,y2,r2);

let gradient2 = ctx.createRadialGradient(900,350,5,900,400,120);
gradient2.addColorStop(0,"rgb(255 255 255 / 100%) ");
gradient2.addColorStop(1,"rgb(0 0 0 / 80%)");
ctx.beginPath();                        // Comenzar camino    
ctx.arc(900,400,100,0,2*Math.PI);        // ctx.arc(x1, y1, r, startAngle, finishAngle)
// Relleno
ctx.fillStyle = gradient2;
ctx.fill();
