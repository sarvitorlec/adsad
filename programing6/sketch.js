let gameChar_x = 300;
let gameChar_y = 280;
let charState = "standing";
let gameObjects = [];
let isFalling = false;
let fallSpeed = 2;
let charSpeed = 3; // Скорость движения персонажа
let isJumping = false; // Флаг прыжка
let jumpSpeed = -10; // Скорость прыжка вверх
let gravity = 0.5; // Гравитация
let velocityY = 0; // Вертикальная скорость

// Переменные противника
let enemy = {
  x: 400,
  y: 280,
  size: 30,
  fill: [255, 0, 255],
  speed: 1,
  patrolRange: 100, // Диапазон патрулирования
  direction: 1, // 1 - вправо, -1 - влево
  alive: true
};

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
      if (obj.x > width) obj.x = 0;
    } else if (obj.type === "cloud") {
      ellipse(obj.x, obj.y, obj.w, obj.h);
    }
  }
  
  // Движение противника
  if (enemy.alive) {
    fill(enemy.fill[0], enemy.fill[1], enemy.fill[2]);
    ellipse(enemy.x, enemy.y, enemy.size, enemy.size);
    
    // Патрулирование
    enemy.x += enemy.speed * enemy.direction;
    if (enemy.x > 400 + enemy.patrolRange || enemy.x < 400 - enemy.patrolRange) {
      enemy.direction *= -1;
    }
    
    // Проверка столкновения с персонажем сверху
    if (gameChar_x > enemy.x - enemy.size/2 && gameChar_x < enemy.x + enemy.size/2 &&
        gameChar_y + 15 > enemy.y - enemy.size/2 && gameChar_y + 15 < enemy.y &&
        velocityY > 0) {
      enemy.alive = false; // Уничтожение противника
    }
  }
  
  // Проверка падения в яму
  let pit = gameObjects.find(obj => obj.type === "pit");
  if (!isFalling && gameChar_x > pit.x && gameChar_x < pit.x + pit.w && gameChar_y >= pit.y - 25) {
    isFalling = true;
    charState = "jumpForward";
  }
  
  // Логика падения
  if (isFalling) {
    gameChar_y += fallSpeed;
    if (gameChar_y > pit.y + pit.h + 25) {
      isFalling = false;
      gameChar_x = 300;
      gameChar_y = 280;
      charState = "standing";
    }
  }
  
  // Плавное движение и прыжок
  if (!isFalling) {
    if (keyIsDown(65)) { // A - влево
      gameChar_x -= charSpeed;
      charState = "walkLeft";
    } else if (keyIsDown(68)) { // D - вправо
      gameChar_x += charSpeed;
      charState = "walkRight";
    } else if (!isJumping) {
      charState = "standing";
    }
    
    // Прыжок
    if (isJumping) {
      gameChar_y += velocityY;
      velocityY += gravity;
      if (gameChar_y >= 280) {
        gameChar_y = 280;
        isJumping = false;
        velocityY = 0;
      }
    }
  }
  
  // Ограничение персонажа по краям экрана
  gameChar_x = constrain(gameChar_x, 0, width);
  
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
    
  } else if (charState === "jumpForward" || isJumping) {
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 25, 20, 20);
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
  }
}

function keyPressed() {
  if (!isFalling) {
    if (keyCode === 32 && !isJumping && gameChar_y === 280) { // Space - прыжок
      isJumping = true;
      velocityY = jumpSpeed;
      charState = "jumpForward";
    }
  }
}

function keyReleased() {
  if (!isFalling && !isJumping) {
    charState = "standing";
  }
}