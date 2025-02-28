let gameChar_x = 300; // Начальная позиция X персонажа
let gameChar_y = 280; // Начальная позиция Y персонажа
let charState = "standing"; // Начальное состояние персонажа
let coin_x = 300; // Начальная позиция X монетки
let coin_y = 280; // Начальная позиция Y монетки
let coin_speed = 2; // Скорость движения монетки

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(135, 206, 235); // Голубое небо
  
  // Горы
  fill(139, 69, 19);
  noStroke();
  triangle(0, 400, 200, 200, 400, 400);
  triangle(200, 400, 400, 250, 600, 400);
  
  // Земля
  fill(34, 139, 34);
  rect(0, 300, 600, 100);
  
  // Яма
  fill(0);
  rect(450, 300, 50, 50);
  
  // Дерево
  fill(139, 100, 19);
  rect(150, 250, 20, 50);
  fill(0, 128, 0);
  ellipse(160, 230, 60, 60);
  
  // Монетка с движением
  fill(255, 215, 0);
  ellipse(coin_x, coin_y, 20, 20);
  // Движение монетки вправо
  coin_x += coin_speed;
  // Возврат в начальную позицию при достижении края
  if (coin_x > width) {
    coin_x = 0;
  }
  
  // Облако
  fill(255);
  noStroke();
  ellipse(100, 100, 60, 40);
  ellipse(140, 100, 80, 50);
  ellipse(180, 100, 60, 40);
  
  // Персонаж
  drawGameCharacter();
}

// Функция рисования персонажа в разных состояниях
function drawGameCharacter() {
  if (charState === "standing") {
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 25, 20, 20);
    fill(0, 0, 255);
    rect(gameChar_x - 10, gameChar_y - 15, 20, 30);
    line(gameChar_x - 10, gameChar_y + 15, gameChar_x - 15, gameChar_y + 25);
    line(gameChar_x + 10, gameChar_y + 15, gameChar_x + 15, gameChar_y + 25);
    line(gameChar_x - 10, gameChar_y - 5, gameChar_x - 15, gameChar_y - 15);
    line(gameChar_x + 10, gameChar_y - 5, gameChar_x + 15, gameChar_y - 15);
    
  } else if (charState === "jumpForward") {
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 35, 20, 20);
    fill(0, 0, 255);
    rect(gameChar_x - 10, gameChar_y - 25, 20, 30);
    line(gameChar_x - 10, gameChar_y + 5, gameChar_x - 15, gameChar_y - 5);
    line(gameChar_x + 10, gameChar_y + 5, gameChar_x + 15, gameChar_y - 5);
    line(gameChar_x - 10, gameChar_y + 15, gameChar_x, gameChar_y + 25);
    line(gameChar_x + 10, gameChar_y + 15, gameChar_x, gameChar_y + 25);
    
  } else if (charState === "walkLeft") {
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 25, 20, 20);
    fill(0, 0, 255);
    rect(gameChar_x - 10, gameChar_y - 15, 20, 30);
    line(gameChar_x - 10, gameChar_y + 15, gameChar_x - 20, gameChar_y + 20);
    line(gameChar_x + 10, gameChar_y + 15, gameChar_x, gameChar_y + 25);
    line(gameChar_x - 10, gameChar_y - 5, gameChar_x - 20, gameChar_y);
    line(gameChar_x + 10, gameChar_y - 5, gameChar_x + 15, gameChar_y - 15);
    
  } else if (charState === "walkRight") {
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 25, 20, 20);
    fill(0, 0, 255);
    rect(gameChar_x - 10, gameChar_y - 15, 20, 30);
    line(gameChar_x + 10, gameChar_y + 15, gameChar_x + 20, gameChar_y + 20);
    line(gameChar_x - 10, gameChar_y + 15, gameChar_x, gameChar_y + 25);
    line(gameChar_x + 10, gameChar_y - 5, gameChar_x + 20, gameChar_y);
    line(gameChar_x - 10, gameChar_y - 5, gameChar_x - 15, gameChar_y - 15);
    
  } else if (charState === "jumpLeft") {
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 35, 20, 20);
    fill(0, 0, 255);
    rect(gameChar_x - 10, gameChar_y - 25, 20, 30);
    line(gameChar_x - 10, gameChar_y + 5, gameChar_x - 20, gameChar_y);
    line(gameChar_x + 10, gameChar_y + 5, gameChar_x, gameChar_y - 5);
    line(gameChar_x - 10, gameChar_y + 15, gameChar_x - 20, gameChar_y + 25);
    line(gameChar_x + 10, gameChar_y + 15, gameChar_x, gameChar_y + 25);
    
  } else if (charState === "jumpRight") {
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 35, 20, 20);
      fill(0, 0, 255);
    rect(gameChar_x - 10, gameChar_y - 25, 20, 30);
    line(gameChar_x + 10, gameChar_y + 5, gameChar_x + 20, gameChar_y);
    line(gameChar_x - 10, gameChar_y + 5, gameChar_x, gameChar_y - 5);
    line(gameChar_x + 10, gameChar_y + 15, gameChar_x + 20, gameChar_y + 25);
    line(gameChar_x - 10, gameChar_y + 15, gameChar_x, gameChar_y + 25);
  }
}

// Управление клавишами
function keyPressed() {
  if (key === 's' || key === 'S') charState = "standing";
  if (key === 'j' || key === 'J') charState = "jumpForward";
  if (key === 'a' || key === 'A') {
    charState = "walkLeft";
    gameChar_x -= 5;
  }
  if (key === 'd' || key === 'D') {
    charState = "walkRight";
    gameChar_x += 5;
  }
  if (key === 'q' || key === 'Q') {
    charState = "jumpLeft";
    gameChar_x -= 5;
  }
  if (key === 'e' || key === 'E') {
    charState = "jumpRight";
    gameChar_x += 5;
  }
}

function keyReleased() {
  charState = "standing";
}