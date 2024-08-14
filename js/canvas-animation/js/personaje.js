let canvas = document.querySelector('#lienzo');
let ctx = canvas.getContext("2d"); // Agregar contexto 2d al lienzo (area de trabajo)
let frame = window.requestAnimationFrame || 
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.msRequestAnimationFrame;

//console.log(ctx); // Mostrar las propiedades del contexto

let numero = 40;
let posicionX  = 0;
let animacion;

// Dibujar SPRITE
var sprite = new Image();
sprite.src = 'imgs/tileset.png';

/*
sprite.onload = function(){

	// ctx.drawImage( imagen , ubicacionX, ubicacionY, recorteX, recorteY, x1, y1, x2, y2 );
	ctx.drawImage( sprite, 40, 120, 29, 41, 0, 100, 100, 100 );
	/*ctx.drawImage( sprite, 160, 120, 29, 41, 0, 100, 100, 100 )
	ctx.drawImage( sprite, 280, 120, 29, 41, 0, 100, 100, 100 );
	ctx.drawImage( sprite, 400, 120, 29, 41, 0, 100, 100, 100 );
	ctx.drawImage( sprite, 520, 120, 29, 41, 0, 100, 100, 100 );
};
*/

function tiempo() {

	if (numero >=  520) { numero = 40 } else { numero +=120 }
	for (let i=40;i<=520;i+=120) {
		if (numero >= i ) { posicionX = i }	
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage( sprite, posicionX, 120, 29, 41, 0, 100, 100, 100 );
	console.log('Hola');
	animacion = frame(tiempo);

};
tiempo();

setTimeout(function(){
	cancelAnimationFrame(animacion)
}, 5000);