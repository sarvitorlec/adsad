let gameChar_x = 300; // Начальная позиция X
let gameChar_y = 280; // Начальная позиция Y
let charState = "standing"; // Начальное состояние

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
  
  // Монетка
  fill(255, 215, 0);
  ellipse(300, 280, 20, 20);
  
  // Облако
  fill(255);
  noStroke();
  ellipse(100, 100, 60, 40);
  ellipse(140, 100, 80, 50);
  ellipse(180, 100, 60, 40);
  
  // Персонаж
  drawGameCharacter();
}

//  рисования персонажа в разных состояниях
function drawGameCharacter() {
  if (charState === "standing") {
    // Стоя лицом
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 25, 20, 20); // Голова
    fill(0, 0, 255);
    rect(gameChar_x - 10, gameChar_y - 15, 20, 30); // Тело
    line(gameChar_x - 10, gameChar_y + 15, gameChar_x - 15, gameChar_y + 25); // Левая нога
    line(gameChar_x + 10, gameChar_y + 15, gameChar_x + 15, gameChar_y + 25); // Правая нога
    line(gameChar_x - 10, gameChar_y - 5, gameChar_x - 15, gameChar_y - 15); // Левая рука
    line(gameChar_x + 10, gameChar_y - 5, gameChar_x + 15, gameChar_y - 15); // Правая рука
    
  } else if (charState === "jumpForward") {
    // Прыжок лицом вперед
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 35, 20, 20); // Голова вверх
    fill(0, 0, 255);
    rect(gameChar_x - 10, gameChar_y - 25, 20, 30); // Тело
    line(gameChar_x - 10, gameChar_y + 5, gameChar_x - 15, gameChar_y - 5); // Левая рука вверх
    line(gameChar_x + 10, gameChar_y + 5, gameChar_x + 15, gameChar_y - 5); // Правая рука вверх
    line(gameChar_x - 10, gameChar_y + 15, gameChar_x, gameChar_y + 25); // Левая нога согнута
    line(gameChar_x + 10, gameChar_y + 15, gameChar_x, gameChar_y + 25); // Правая нога согнута
    
  } else if (charState === "walkLeft") {
    // Ходьба влево
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 25, 20, 20);
    fill(0, 0, 255);
    rect(gameChar_x - 10, gameChar_y - 15, 20, 30);
    line(gameChar_x - 10, gameChar_y + 15, gameChar_x - 20, gameChar_y + 20); // Левая нога вперед
    line(gameChar_x + 10, gameChar_y + 15, gameChar_x, gameChar_y + 25); // Правая нога назад
    line(gameChar_x - 10, gameChar_y - 5, gameChar_x - 20, gameChar_y); // Левая рука
    line(gameChar_x + 10, gameChar_y - 5, gameChar_x + 15, gameChar_y - 15); // Правая рука
    
  } else if (charState === "walkRight") {
    // Ходьба вправо
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 25, 20, 20);
    fill(0, 0, 255);
    rect(gameChar_x - 10, gameChar_y - 15, 20, 30);
    line(gameChar_x + 10, gameChar_y + 15, gameChar_x + 20, gameChar_y + 20); // Правая нога вперед
    line(gameChar_x - 10, gameChar_y + 15, gameChar_x, gameChar_y + 25); // Левая нога назад
    line(gameChar_x + 10, gameChar_y - 5, gameChar_x + 20, gameChar_y); // Правая рука
    line(gameChar_x - 10, gameChar_y - 5, gameChar_x - 15, gameChar_y - 15); // Левая рука
    
  } else if (charState === "jumpLeft") {
    // Прыжок влево
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 35, 20, 20);
    fill(0, 0, 255);
    rect(gameChar_x - 10, gameChar_y - 25, 20, 30);
    line(gameChar_x - 10, gameChar_y + 5, gameChar_x - 20, gameChar_y); // Левая рука в сторону
    line(gameChar_x + 10, gameChar_y + 5, gameChar_x, gameChar_y - 5); // Правая рука вверх
    line(gameChar_x - 10, gameChar_y + 15, gameChar_x - 20, gameChar_y + 25); // Левая нога
    line(gameChar_x + 10, gameChar_y + 15, gameChar_x, gameChar_y + 25); // Правая нога
      } else if (charState === "jumpRight") {
    // Прыжок вправо
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 35, 20, 20);
    fill(0, 0, 255);
    rect(gameChar_x - 10, gameChar_y - 25, 20, 30);
    line(gameChar_x + 10, gameChar_y + 5, gameChar_x + 20, gameChar_y); // Правая рука в сторону
    line(gameChar_x - 10, gameChar_y + 5, gameChar_x, gameChar_y - 5); // Левая рука вверх
    line(gameChar_x + 10, gameChar_y + 15, gameChar_x + 20, gameChar_y + 25); // Правая нога
    line(gameChar_x - 10, gameChar_y + 15, gameChar_x, gameChar_y + 25); // Левая нога
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
  charState = "standing"; // Возврат к стоянию при отпускании клавиши
}
