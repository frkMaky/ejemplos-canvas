let canvas = document.querySelector('#lienzo');
let ctx = canvas.getContext("2d"); // Agregar contexto 2d al lienzo (area de trabajo)
let alfa = 1;
console.log(ctx); // Mostrar las propiedades del contexto

// Cielo 
let gradient = ctx.createLinearGradient(0,0,0,500);
gradient.addColorStop(0,"rgba(0,0,255," + alfa +")" );
gradient.addColorStop(1,"white");
ctx.fillStyle = gradient;
ctx.fillRect(0,0,1000,500);            // ctx.fillRect(x1,y1,x2,y2);

// Oceano
let gradient2 = ctx.createLinearGradient(0,400,0,500);
gradient2.addColorStop(0,"rgba(0,180,255," + alfa +")" );
gradient2.addColorStop(1,"white");
ctx.fillStyle = gradient2;
ctx.fillRect(0,400,1000,500);            // ctx.fillRect(x1,y1,x2,y2);

// Montañas -------------------------

// Montaña1 
ctx.beginPath();
ctx.fillStyle = "rgba(100,0,255," + alfa +")" ;
ctx.moveTo(0,400);
ctx.lineTo(200,100);
ctx.lineTo(400,400);
ctx.fill();

// Montaña2 
ctx.beginPath();
ctx.fillStyle = "rgba(100,50,255," + alfa +")" ;
ctx.moveTo(200,400);
ctx.lineTo(400,100);
ctx.lineTo(600,400);
ctx.fill();

// Montaña3
ctx.beginPath();
ctx.fillStyle = "rgba(100,0,255," + alfa +")" ;
ctx.moveTo(400,400);
ctx.lineTo(600,100);
ctx.lineTo(800,400);
ctx.fill();

// Montaña4 
ctx.beginPath();
ctx.fillStyle = "rgba(100,50,255," + alfa +")" ;
ctx.moveTo(600,400);
ctx.lineTo(800,100);
ctx.lineTo(1000,400);
ctx.fill();

// Nieve montaña 1
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255," + alfa +")" ;
ctx.moveTo(133,200);
ctx.lineTo(200,100);
ctx.lineTo(200,300);
ctx.fill();
// Nieve montaña 1 (espejo)
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255," + alfa +")" ;
ctx.moveTo(200,300);
ctx.lineTo(200,100);
ctx.lineTo(267,200);
ctx.fill();

// Nieve montaña 2
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255," + alfa +")" ;
ctx.moveTo(333,200);
ctx.lineTo(400,100);
ctx.lineTo(400,300);
ctx.fill();
// Nieve montaña 2 (espejo)
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255," + alfa +")" ;
ctx.moveTo(400,300);
ctx.lineTo(400,100);
ctx.lineTo(467,200);
ctx.fill();

// Nieve montaña 3
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255," + alfa +")" ;
ctx.moveTo(533,200);
ctx.lineTo(600,100);
ctx.lineTo(600,300);
ctx.fill();
// Nieve montaña 3 (espejo)
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255," + alfa +")" ;
ctx.moveTo(600,300);
ctx.lineTo(600,100);
ctx.lineTo(667,200);
ctx.fill();

// Nieve montaña 4
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255," + alfa +")" ;
ctx.moveTo(733,200);
ctx.lineTo(800,100);
ctx.lineTo(800,300);
ctx.fill();
// Nieve montaña 4 (espejo)
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255," + alfa +")" ;
ctx.moveTo(800,300);
ctx.lineTo(800,100);
ctx.lineTo(867,200);
ctx.fill();

// Monte 1 
ctx.beginPath();
ctx.fillStyle = "rgba(10,0,150," + alfa +")" ;
ctx.moveTo(0,400);
ctx.lineTo(200,300);
ctx.lineTo(200,450);
ctx.fill();
// Monte 1 (espejo)
ctx.beginPath();
ctx.fillStyle = "rgba(10,0,100," + alfa +")" ;
ctx.moveTo(200,450);
ctx.lineTo(200,300);
ctx.lineTo(400,400);
ctx.fill();

// Monte 2 
ctx.beginPath();
ctx.fillStyle = "rgba(10,0,150," + alfa +")" ;
ctx.moveTo(600,400);
ctx.lineTo(800,300);
ctx.lineTo(800,450);
ctx.fill();
// Monte 2 (espejo)
ctx.beginPath();
ctx.fillStyle = "rgba(10,0,100," + alfa +")" ;
ctx.moveTo(800,450);
ctx.lineTo(800,300);
ctx.lineTo(1000,400);
ctx.fill();

// Arbol 1
ctx.fillStyle = "rgba(100,0,20,1)" ;
ctx.fillRect(100,200,20,150);    

ctx.beginPath();  
ctx.fillStyle = "rgba(0,140,25," + alfa +")" ;
ctx.arc(140,180,40,0,2*Math.PI); 
ctx.fill();

ctx.beginPath();  
ctx.fillStyle = "rgba(0,110,25," + alfa +")" ;
ctx.arc(80,190,30,0,2*Math.PI); 
ctx.fill();

ctx.beginPath();  
ctx.fillStyle = "rgba(0,80,25," + alfa +")" ;
ctx.arc(110,200,50,0,2*Math.PI); 
ctx.fill();

ctx.beginPath();  
ctx.fillStyle = "rgba(0,50,25," + alfa +")" ;
ctx.arc(120,230,30,0,2*Math.PI); 
ctx.fill();

// Arbol 2
ctx.fillStyle = "rgba(100,0,20,1)" ;
ctx.fillRect(900,200,20,150);    

ctx.beginPath();  
ctx.fillStyle = "rgba(0,50,25," + alfa +")" ;
ctx.moveTo (850,300); 
ctx.lineTo (910,200);   
ctx.lineTo (970,300);   
ctx.fill();

ctx.beginPath();  
ctx.fillStyle = "rgba(0,80,25," + alfa +")" ;
ctx.moveTo (850,250); 
ctx.lineTo (910,150);   
ctx.lineTo (970,250);   
ctx.fill();

ctx.beginPath();  
ctx.fillStyle = "rgba(0,110,25," + alfa +")" ;
ctx.moveTo (850,200); 
ctx.lineTo (910,100);   
ctx.lineTo (970,200);   
ctx.fill();

// Tierra 1
ctx.beginPath();  
ctx.fillStyle = "rgba(0,180,10," + alfa +")" ;
ctx.arc(0,500,250,3,2*Math.PI);
ctx.fill();

// Lineas curbas
ctx.beginPath();      
ctx.fillStyle = "rgba(0,100,10," + alfa +")" ;
ctx.moveTo (0,500);
ctx.bezierCurveTo(0,470,50,470,50,500);
ctx.bezierCurveTo(50,470,100,470,100,500);
ctx.bezierCurveTo(100,470,150,470,150,500);
ctx.bezierCurveTo(150,470,200,470,200,500);
ctx.bezierCurveTo(200,470,250,470,250,500);
ctx.fill();

// Tierra 2
ctx.beginPath();  
ctx.fillStyle = "rgba(0,120,10," + alfa +")" ;
ctx.arc(900,600,250,3.15,2*Math.PI);
ctx.fill();