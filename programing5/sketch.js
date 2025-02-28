let gameChar_x = 300;
let gameChar_y = 280;
let charState = "standing";
let gameObjects = [];
let isFalling = false; // Флаг падения
let fallSpeed = 2; // Скорость падения

function setup() {
  createCanvas(600, 400);
  
  gameObjects = [
    { type: "mountain", x1: 0, y1: 400, x2: 200, y2: 200, x3: 400, y3: 400, fill: [139, 69, 19] },
    { type: "mountain", x1: 200, y1: 400, x2: 400, y2: 250, x3: 600, y3: 400, fill: [139, 69, 19] },
    { type: "ground", x: 0, y: 300, w: 600, h: 100, fill: [34, 139, 34] },
    { type: "pit", x: 450, y: 300, w: 50, h: 50, fill: [0, 0, 0] },
    { type: "tree_trunk", x: 150, y: 250, w: 20, h: 50, fill: [139, 69, 19] },
    { type: "tree_crown", x: 160, y: 230, w: 60, h: 60, fill: [0, 128, 0] },
    { type: "coin", x: 300, y: 280, size: 20, fill: [255, 215, 0], speed: 2 },
    { type: "cloud", x: 100, y: 100, w: 60, h: 40, fill: [255, 255, 255] },
    { type: "cloud", x: 140, y: 100, w: 80, h: 50, fill: [255, 255, 255] },
    { type: "cloud", x: 180, y: 100, w: 60, h: 40, fill: [255, 255, 255] }
  ];
}

function draw() {
  background(135, 206, 235);
  
  // Отрисовка всех игровых объектов
  for (let obj of gameObjects) {
    fill(obj.fill[0], obj.fill[1], obj.fill[2]);
    noStroke();
    
    if (obj.type === "mountain") {
      triangle(obj.x1, obj.y1, obj.x2, obj.y2, obj.x3, obj.y3);
    } else if (obj.type === "ground" , obj.type === "pit" , obj.type === "tree_trunk") {
      rect(obj.x, obj.y, obj.w, obj.h);
    } else if (obj.type === "tree_crown") {
      ellipse(obj.x, obj.y, obj.w, obj.h);
    } else if (obj.type === "coin") {
      ellipse(obj.x, obj.y, obj.size, obj.size);
      obj.x += obj.speed;
      if (obj.x > width) {
        obj.x = 0;
      }
    } else if (obj.type === "cloud") {
      ellipse(obj.x, obj.y, obj.w, obj.h);
    }
  }
  
  // Проверка падения в яму
  let pit = gameObjects.find(obj => obj.type === "pit");
  if (!isFalling && gameChar_x > pit.x && gameChar_x < pit.x + pit.w && gameChar_y >= pit.y - 25) {
    isFalling = true;
    charState = "jumpForward"; // Состояние падения похоже на прыжок
  }
  
  // Логика падения
  if (isFalling) {
    gameChar_y += fallSpeed;
    if (gameChar_y > pit.y + pit.h + 25) { // Когда персонаж полностью упал
      isFalling = false;
      gameChar_x = 300; // Возврат в начальную позицию
      gameChar_y = 280;
      charState = "standing";
    }
  }
  
  // Персонаж
  drawGameCharacter();
}

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
    ellipse(gameChar_x, gameChar_y - 25, 20, 20); // Голова не поднимается при падении
    fill(0, 0, 255);
    rect(gameChar_x - 10, gameChar_y - 15, 20, 30);
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

function keyPressed() {
  // Управление отключается при падении
  if (!isFalling) {
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
}

function keyReleased() {
  if (!isFalling) {
    charState = "standing";
  }
}