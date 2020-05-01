var edward;
var enemy1,enemy2,enemy3,enemy4,enemy5;
var bullet1,bullet2,bullet3,bullet4,bullet5;
var bg
var count=0
var enemy1i,enemy2i,enemy3i,enemy4i,enemy5i;

var x=0;
var wave=1;

function preload(){
bg=loadImage("bg.jpg")
enemy1i=loadImage("guard1.png")

}


function setup() {
  createCanvas(1200,600);
  edward= new Player(300,500,50,50)
  enemy1= new Enemy(1100,50,50,50)
  enemy1.sprite.addImage("guard1",enemy1i)
  enemy2= new Enemy(1100,150,50,50)
  enemy3= new Enemy(1100,250,50,50)
  enemy4= new Enemy(1100,350,50,50)
  enemy5= new Enemy(1100,450,50,50)
  bullet1= createSprite(1100,50,10,5)
  bullet2= createSprite(1100,150,10,5)
  bullet3= createSprite(1100,250,10,5)
  bullet4= createSprite(1100,350,10,5)
  bullet5= createSprite(1100,450,10,5)
}

function draw() {
  background(bg);  
  if(wave==1){

    textSize(30)
      fill ("#ffdf00")
       text("FIRST WAVE",550,50 )
    if (count==5){
      wave=2
      x=0
      
      }
  
  if(x==0){
    
    

    bullet1.velocityX=-10
    bullet2.velocityX=-15
    bullet3.velocityX=-10
    bullet4.velocityX=-18
    bullet5.velocityX=-13

    x=1
  }

  if (bullet1.x<0) {
bullet1.x=1100
bullet1.y=50
x=0

  }
  if (bullet2.x<0) {
    bullet2.x=1100
    bullet2.y=150
    x=0
    
      }
      if (bullet3.x<0) {
        bullet3.x=1100
        bullet3.y=250
        x=0
        
          }
          if (bullet4.x<0) {
            bullet4.x=1100
            bullet4.y=350
            x=0
            
              }
              if (bullet5.x<0) {
                bullet5.x=1100
                bullet5.y=450
                x=0
                
                  }





if(keyDown(RIGHT_ARROW)){

edward.sprite.x= edward.sprite.x+5

}
if(keyDown(LEFT_ARROW)){

  edward.sprite.x= edward.sprite.x-5
  
  }
  if(keyDown(UP_ARROW)){

    edward.sprite.y= edward.sprite.y-5
    
    }
    if(keyDown(DOWN_ARROW)){

      edward.sprite.y= edward.sprite.y+5
      
      }
      if (edward.sprite.collide(enemy1.sprite)) {
enemy1.sprite.destroy()
bullet1.destroy()
count=count+1

      }
      if (edward.sprite.collide(enemy2.sprite)) {
        enemy2.sprite.destroy()
        bullet2.destroy()
        count=count+1
        
              }
              if (edward.sprite.collide(enemy3.sprite)) {
                enemy3.sprite.destroy()
                bullet3.destroy()
                count=count+1
                
                      }
                      if (edward.sprite.collide(enemy4.sprite)) {
                        enemy4.sprite.destroy()
                        bullet4.destroy()
                        count=count+1
                        
                              }
                              if (edward.sprite.collide(enemy5.sprite)) {
                                enemy5.sprite.destroy()
                                bullet5.destroy()
                                count=count+1
                                
                                      }





      if(edward.sprite.collide(bullet1)||edward.sprite.collide(bullet2)||edward.sprite.collide(bullet3)||edward.sprite.collide(bullet4)||edward.sprite.collide(bullet5)){
edward.sprite.destroy()

      }
    }


    if (wave==2){

      enemy1= new Enemy(1100,50,50,50)
      enemy1.sprite.addImage("guard1",enemy1i)
      enemy2= new Enemy(1100,150,50,50)
      enemy3= new Enemy(1100,250,50,50)
      enemy4= new Enemy(1100,350,50,50)
      enemy5= new Enemy(1100,450,50,50)
      bullet1= createSprite(1100,50,10,5)
      bullet2= createSprite(1100,150,10,5)
      bullet3= createSprite(1100,250,10,5)
      bullet4= createSprite(1100,350,10,5)
      bullet5= createSprite(1100,450,10,5)

      textSize(30)
      fill ("#ffdf00")
       text("SECOND WAVE",550,50 )
    
  
  if(x==0){
    
    

    bullet1.velocityX=-10
    bullet2.velocityX=-15
    bullet3.velocityX=-10
    bullet4.velocityX=-18
    bullet5.velocityX=-13

    x=1
  }

  if (bullet1.x<0) {
bullet1.x=1100
bullet1.y=50
x=0

  }
  if (bullet2.x<0) {
    bullet2.x=1100
    bullet2.y=150
    x=0
    
      }
      if (bullet3.x<0) {
        bullet3.x=1100
        bullet3.y=250
        x=0
        
          }
          if (bullet4.x<0) {
            bullet4.x=1100
            bullet4.y=350
            x=0
            
              }
              if (bullet5.x<0) {
                bullet5.x=1100
                bullet5.y=450
                x=0
                
                  }





if(keyDown(RIGHT_ARROW)){

edward.sprite.x= edward.sprite.x+5

}
if(keyDown(LEFT_ARROW)){

  edward.sprite.x= edward.sprite.x-5
  
  }
  if(keyDown(UP_ARROW)){

    edward.sprite.y= edward.sprite.y-5
    
    }
    if(keyDown(DOWN_ARROW)){

      edward.sprite.y= edward.sprite.y+5
      
      }
      if (edward.sprite.collide(enemy1.sprite)) {
enemy1.sprite.destroy()
bullet1.destroy()
count=count+1

      }
      if (edward.sprite.collide(enemy2.sprite)) {
        enemy2.sprite.destroy()
        bullet2.destroy()
        count=count+1
        
              }
              if (edward.sprite.collide(enemy3.sprite)) {
                enemy3.sprite.destroy()
                bullet3.destroy()
                count=count+1
                
                      }
                      if (edward.sprite.collide(enemy4.sprite)) {
                        enemy4.sprite.destroy()
                        bullet4.destroy()
                        count=count+1
                        
                              }
                              if (edward.sprite.collide(enemy5.sprite)) {
                                enemy5.sprite.destroy()
                                bullet5.destroy()
                                count=count+1
                                
                                      }





      if(edward.sprite.collide(bullet1)||edward.sprite.collide(bullet2)||edward.sprite.collide(bullet3)||edward.sprite.collide(bullet4)||edward.sprite.collide(bullet5)){
edward.sprite.destroy()

      }

    }






  drawSprites();

}