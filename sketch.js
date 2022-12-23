var obstacle,tiger,bg,player,formBg
var obstacleImg,tigerImg,bgImg,formBgImg,playerImg,playerImg2
var gameState = 0
var playerCount,database,form,player,game
var girls,girl1,girl2
var girl_img1,girl_img2
function preload() {
   
    obstacleImg = loadImage ("assets/rockk-removebg-preview.png")
    tigerImg = loadImage ("assets/tiger-removebg-preview(1).png")
    bgImg = loadImage ("assets/mainbgg.webp")
    formBgImg = loadImage ("assets/formbg.jpg")
    playerImg = loadImage("assets/girl-removebg-preview.png")
}

  function setup () {
    canvas = createCanvas(400,400)
    database = firebase.database()
    game = new Game  ()
    game.start()
  }
function draw() {
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}