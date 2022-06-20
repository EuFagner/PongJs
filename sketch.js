var xBolinha = 300;
var yBolinha = 200;
var diametro = 30;
var raio = 30;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  mostraBolinha();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}