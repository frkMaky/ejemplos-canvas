const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const scoreEl = document.querySelector('#scoreEl')
const startGamebtn = document.querySelector('#startGamebtn')
const modalEl = document.querySelector('#modalEl')
const bigScoreEl = document.querySelector('#bigScoreEl')

// Create Player ------------------------------------------------------------
class Player {

    constructor(x, y, radius, color){
        this.x = x
        this.y = y
        this.radius = radius 
        this.color = color
    }

    draw(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }

}

// Proyectile ------------------------------------------------------------

class Proyectile {

    constructor(x, y, radius, color, velocity){
        this.x = x
        this.y = y
        this.radius = radius 
        this.color = color
        this.velocity = velocity
    }

    draw(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }

    update(){
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
        
    } 
 }
// Enemy ------------------------------------------------------------

class Enemy {

    constructor(x, y, radius, color, velocity){
        this.x = x
        this.y = y
        this.radius = radius 
        this.color = color
        this.velocity = velocity
    }

    draw(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }

    update(){
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
        
    } 
 }

 const friction = 0.99
 class Particle {

    constructor(x, y, radius, color, velocity){
        this.x = x
        this.y = y
        this.radius = radius 
        this.color = color
        this.velocity = velocity
        this.alpha = 1
    }

    draw(){
        c.save()
        c.globalAlpha = this.alpha
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
        c.restore()
    }

    update(){
        this.draw()
        this.velocity.x *= friction
        this.velocity.y *= friction
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
        this.alpha -= 0.01
    } 
 }
//-----------------------------------------------------------------

let x = canvas.width/2
let y = canvas.height/2
let radius = 10
let color = `white`
let player = new Player(x,y,radius,color)
let proyectile = new Proyectile(canvas.width/2,canvas.height/2,5,'red',{
    x:1,
    y:1
})
let proyectiles = []
let enemies = []
let particles = []

function init(){
     player = new Player(x,y,radius,color)
     proyectiles = []
     enemies = []
     particles = []
     score = 0
     scoreEl.innerHTML = score
     bigScoreEl.innerHTML = score
}

function spawnEnemies() {
    setInterval(()=>{
        const radius =Math.random()*(30-5+1)+5

        let x
        let y 
        if (Math.random() < 0.5 ){
            x = Math.random() < 0.5 ? 0 - radius: canvas.width + radius  
            y = Math.random() * canvas.height
        } else {
            x = Math.random() * canvas.width  
            y = Math.random() < 0.5 ? 0 - radius: canvas.height + radius
        }
        const color = `hsl(${Math.random()*360},50%,50%)`
        const angle = Math.atan2(canvas.height/2 - y ,canvas.width/2 - x)

        const velocity = {
            x:Math.cos(angle),
            y:Math.sin(angle)
        }
        enemies.push(new Enemy(x,y,radius,color,velocity))
    },1000)
}
let animationId
let score = 0

function animate(){
    animationId = requestAnimationFrame(animate)
    c.fillStyle = 'rgba(0,0,0,0.1)'
    c.fillRect(0,0,canvas.width,canvas.height)
    player.draw()
    particles.forEach( (particle, particleIndex)=>{
        if (particle.alpha < 0) {
            particles.splice(particleIndex,1)
        } else {
            particle.update();
        }
    })
    proyectiles.forEach((proyectile,indexProyectile)=>{
            proyectile.update()

            // Eliminar disparos fuera de la pantalla
            if (proyectile.x + proyectile.radius < 0 ||
                proyectile.x - proyectile.radius > canvas.width ||
                proyectile.y + proyectile.radius < 0 ||
                proyectile.y - proyectile.radius > canvas.height 
            ) {
                setTimeout(()=>{
                    proyectiles.splice(indexProyectile, 1)   
                },0)
            }
        }
    )
    enemies.forEach((enemy,indexEnemy)=>{
        enemy.update()

        // distancia al jugador (end game)
        const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y)
        if (dist -enemy.radius -player.radius < 1) {
            cancelAnimationFrame(animationId)
            bigScoreEl.innerHTML = score
            modalEl.style.display = 'flex'
        }

        // distancia a los proyectiles
        proyectiles.forEach((proyectile,indexProyectile)=>{
            const dist = Math.hypot(proyectile.x - enemy.x, proyectile.y - enemy.y)
            
            // Colision proyectil-enemigo
            if (dist -enemy.radius -proyectile.radius < 1) {

        

                // Explosions
                for (let i = 0; i < 8; i++) {
                    particles.push(
                        new Particle(
                            proyectile.x,
                            proyectile.y,
                            Math.random()*4,
                            enemy.color,
                            {
                                x:(Math.random() - 0.5) * (Math.random()*6),
                                y:(Math.random() - 0.5) * (Math.random()*6)
                            }
                        )
                    )
                    
                }
                setTimeout(()=>{
                    if (enemy.radius - 10 > 5) {
                        // Puntuacion
                        score += 100
                        scoreEl.innerHTML = score
                        gsap.to(enemy, {
                            radius: enemy.radius-10
                        })
                    } else {
                        // Puntuacion
                        score += 250
                        scoreEl.innerHTML = score
                        enemies.splice(indexEnemy, 1)
                    }
                    proyectiles.splice(indexProyectile, 1)
                },0)
            }
        
        })
    }
)
}
// Shoots !!
addEventListener('click',(event)=>{

    const angle = Math.atan2(event.clientY- canvas.height/2,event.clientX- canvas.width/2)

    // Velocidad de los disparos
    const velocity = {
        x:Math.cos(angle) * 5,
        y:Math.sin(angle) * 5
    }
    proyectiles.push(new Proyectile(canvas.width/2,canvas.height/2,3,'white',velocity))
})

// MAIN -------
startGamebtn.addEventListener('click',()=>{
    init()
    animate()
    spawnEnemies()
    modalEl.style.display = 'none'
})