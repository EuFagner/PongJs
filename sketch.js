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
var comprimentoRaquete = 10;
var alturaRaquete = 90; 

// Variáveis raquete oponente
var xRaqueteOponente = 585;
var yRaqueteOponente = 150;
var velocidadeRaqueteOponente;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoComBorda();

  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoComMinhaRaquete();
  verificaColisaoRaqueteOponente();
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
  rect(x, y, comprimentoRaquete, alturaRaquete);
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
  if(xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaqueteOponente() {
  if(xBolinha + raio > xRaqueteOponente && yBolinha + raio < yRaqueteOponente + alturaRaquete && yBolinha > yRaqueteOponente ) {
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente() {
  
}