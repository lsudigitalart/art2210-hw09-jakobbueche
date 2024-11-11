var car;
var speed;
var blue,cyan,gray,green,orange,pink,purple,red,turq,yellow;

 function preload () {
  blue = loadImage('blueCar.png');
  cyan = loadImage('cyanCar.png');
  gray = loadImage('grayCar.png');
  green = loadImage('greenCar.png');
  orange = loadImage('orangeCar.png');
  pink = loadImage('pinkCar.png');
  purple = loadImage('purpleCar.png');
  red = loadImage('redCar.png')
  turq = loadImage('turqCar.png');
  yellow = loadImage('yellowCar.png');

  finishLine = loadImage('FinishLine.png')
} 

let colors = [blue,cyan,gray,green,orange,pink,purple,red,turq,yellow];

function setup() {
  createCanvas(700, 500);
  car = new Car(0,30);
  car2 = new Car(0,150);
  car3 = new Car(0,280);
  car4 = new Car(0,400);
}

function draw() {
  background(220);

  image(finishLine,430,0,350,500);

  car.show();
  car.race();
  car2.show();
  car2.race();
  car3.show();
  car3.race();
  car4.show();
  car4.race();
}

function Car(tempX,tempY,tempColor) {

  this.x = tempX;
  this.y = tempY;
  this.color  = tempColor;

  let numbers = [1.5,1.66, 1.75, 1.88, 2, 2.12, 2.25,2.33, 2.5,2.66, 2.75,2.88, 3,3.12, 3.25,3.5, 4];
  let randomIndex = floor(random(0, numbers.length));
  let randomNumber = numbers[randomIndex];

  this.show = function() {

    let colors = [blue,cyan,gray,green,orange,pink,purple,red,turq,yellow];
    let randomIndex2 = floor(random(0, colors.length));
    let randomColors = colors[randomIndex2];

    image(randomColors,this.x,this.y,70,70)
  }

  this.race = function() {
    this.x += randomNumber
  }
}