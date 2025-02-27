//  переменные
let skyColor;
let grassColor;
let gameCharX, gameCharY;
let vegetableX, vegetableY;
let vegetableSpeed; // Скорость движения овоща

function setup() {
  createCanvas(1024, 576);

  // Инициализация переменных
  skyColor = color(100, 155, 255); // неба
  grassColor = color(0, 155, 0);   //  травы

  gameCharX = 128; // Начальная позиция персонажа
  gameCharY = 410; // Начальная позиция персонажа

  vegetableX = 400; // Начальная позиция овоща
  vegetableY = 385; // Начальная позиция овоща
  vegetableSpeed = 2; // Скорость движения овоща
}

function draw() {
  //  неба
  background(skyColor);

  //  травы
  noStroke();
  fill(grassColor);
  rect(0, 432, 1024, 144);

  //  облака
  noStroke();
  fill(255);
  circle(200, 90, 70);
  circle(160, 120, 70);
  circle(240, 120, 70);
  rect(160, 120, 80, 35);

  // горы
  noStroke();
  fill(128, 128, 0);
  triangle(550, 100, 700, 435, 450, 435);
  fill(255);
  triangle(550, 100, 573, 150, 533, 155);

  // дерева
  fill(128, 128, 0);
  rect(800, 373, 20, 60);
  fill(34, 139, 34);
  circle(830, 360, 35);
  circle(810, 360, 35);
  circle(790, 360, 35);
  circle(800, 335, 35);
  circle(820, 335, 35);
  circle(810, 310, 35);

  //  каньона
  fill(91, 102, 104);
  rect(100, 433, 70, 60);

  //  овоща
  fill(32, 156, 56);
  ellipse(vegetableX, vegetableY, 50, 100);

  // Движение овоща
  vegetableX += vegetableSpeed; // Обновляем позицию овоща

  // Если овощ достигает края экрана, меняем направление
  if (vegetableX > width - 25 || vegetableX < 25) {
    vegetableSpeed *= -1; // Меняем направление движения
  }

  // стояние лицом вперед
  fill(120,124,60);
  ellipse(gameCharX, gameCharY - 30, 20, 20); // Голова
  rect(gameCharX - 10, gameCharY - 10, 20, 30); // Тело

  // прыжок вперед
  // fill(120,124,60);
  // ellipse(gameCharX, gameCharY - 40, 20, 20); // Голова
  // rect(gameCharX - 10, gameCharY - 30, 20, 30); // Тело

  // ходьба влево
  // fill(120,124,60);
  // ellipse(gameCharX, gameCharY - 30, 20, 20); // Голова
  // rect(gameCharX - 10, gameCharY - 10, 20, 30); // Тело
  // ходьба вправо
  // fill(120,124,60);
  // ellipse(gameCharX, gameCharY - 30, 20, 20); // Голова
  // rect(gameCharX - 10, gameCharY - 10, 20, 30); // Тело
  // прыжок влево
  // fill(120,124,60);
  // ellipse(gameCharX, gameCharY - 40, 20, 20); // Голова
  // rect(gameCharX - 10, gameCharY - 30, 20, 30); // Тело

  // прыжок вправо
  // fill(120,124,60);
  // ellipse(gameCharX, gameCharY - 40, 20, 20); // Голова
  // rect(gameCharX - 10, gameCharY - 30, 20, 30); // Тело
}