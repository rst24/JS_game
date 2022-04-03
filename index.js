const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0,0, canvas.width, canvas.height)

const gravity = 0.7

const background = new Sprite({
    position:{
        x: 0,
        y: 0
    },
    imageSrc: './img/background.png'
})

const shop = new Sprite({
    position: {
        x: 600,
        y: 128
    },
    imageSrc: './img/shop.png',
    scale: 2.75,
    framesMax: 6
})

const player = new Fighter({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x:0,
        y:0
    },
    offset: {
      x: 0,
      y: 0
    },
    imageSrc: './img/samuraiMack/Idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
      x: 215,
      y: 157
    },
    sprites: {
      idle: {
        imageSrc: './img/samuraiMack/Idle.png',
        framesMax: 8
      },
      run: {
        imageSrc: './img/samuraiMack/Run.png',
        framesMax: 8
      },
      jump: {
        imageSrc: './img/samuraiMack/Jump.png',
        framesMax: 2
      },
      fall: {
        imageSrc: './img/samuraiMack/Fall.png',
        framesMax: 2
      },
      attack1: {
        imageSrc: './img/samuraiMack/Attack1.png',
        framesMax: 6
      },
      takeHit: {
        imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
        framesMax: 4
      },
      death: {
        imageSrc: './img/samuraiMack/Death.png',
        framesMax: 6
      }
    },
    attackBox: {
      offset: {
        x: 100,
        y: 50
      },
      width: 160,
      height: 50
    }
})