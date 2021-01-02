class Rectangle extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/bl1.png");
      this.Visiblity = 255;
    }
    
    display(){
      //console.log(this.body.speed);
      if(this.body.speed < 3){
       super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();

      }
    
      if (this.Visiblity < 0 && this.Visiblity > -15){
        score=score+100;
      } 
    }   
  };
  
    
     
     

  
  
  
   
  