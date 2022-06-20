// Variáveis para a bolinha
var xBolinha = 300;
var yBolinha = 200;
var diametro = 30;
var raio = diametro /2;

// Velocidade da bolinha
var velocidadeXBolinha = 8;
var velocidadeYBolinha = 8;

// Variáveis da raquete
var xRaquete = 5;
var yRaquete = 150;
var comprimentoMinhaRaquete = 10;
var alturaMinhaRaquete = 90; 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoComBorda();

  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoComMinhaRaquete();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoComBorda() {
  if(xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }

  if(yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  rect(x, y, comprimentoMinhaRaquete, alturaMinhaRaquete);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }

  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoComMinhaRaquete() {
  if(xBolinha - raio < xRaquete + comprimentoMinhaRaquete) {
    velocidadeXBolinha *= -1;
  }
}