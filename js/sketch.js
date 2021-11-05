function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

//Global Variables
var pumpkinX,pumpkinY,pumpkinHeight,pumpkinWidth,pEyeSize,pIrisSize;

function setup() {
    createCanvas(600, 600);
    
    //initialising variables that affect all of the drawn shapes
    //x,y poisition:
    pumpkinX= width/2;
    pumpkinY= height/2;
    
    //height and width of circles
    pumpkinWidth=180;
    pumpkinHeight=pumpkinWidth-60;
    
    //variables that affect eye size 
    pEyeSize= pumpkinHeight-80;
    pIrisSize= pEyeSize-30;
  }

  function draw() {
    
    background(215);


    //PUMPKIN
  
    //Create a stem with dark and light overlapping shapes
    noStroke();
    fill(7, 92, 10);
    triangle(pumpkinX-22, pumpkinY-85, pumpkinX, pumpkinY-50, pumpkinX+22, pumpkinY-85);
    fill(44, 171, 49);
    triangle(pumpkinX-13, pumpkinY-80, pumpkinX, pumpkinY-57, pumpkinX+13, pumpkinY-80);
    
  
    //back ellipse dark orange
    noStroke();
    fill(180, 52, 37);
    ellipse(pumpkinX,pumpkinY,pumpkinWidth,pumpkinHeight);
    
    //back ellipse light
    noStroke();
    fill(240, 90, 40);
    ellipse(pumpkinX,pumpkinY-3,pumpkinWidth-10,pumpkinHeight-10);
  
    //Create another dark orange middle ellipse to make it look more pumpkin-y
    noStroke();
    fill(180,52,37);
    ellipse(pumpkinX,pumpkinY,pumpkinWidth-40,pumpkinHeight+15);

    //Create another light orange middle ellipse to make it look more pumpkin-y
    noStroke();
    fill(240,90,40);
    ellipse(pumpkinX,pumpkinY-3,pumpkinWidth-55,pumpkinHeight+5);
  
    //nose
	fill(150,25,0);
  	triangle(pumpkinX-15, pumpkinY+20, pumpkinX, pumpkinY-5, pumpkinX+15, pumpkinY+20);
  
    //left eye - add a right eye here
	noStroke();
    fill(0, 0, 0);
    ellipse(pumpkinX-35,pumpkinY-20,pEyeSize,pEyeSize);
    ellipse(pumpkinX+35,pumpkinY-20,pEyeSize,pEyeSize);

  
    //eye pupils - add a left pupil here
	noStroke();
    fill(248, 239, 47);
    ellipse(pumpkinX-35,pumpkinY-20,pIrisSize,pIrisSize);
    ellipse(pumpkinX+35,pumpkinY-20,pIrisSize,pIrisSize);
}