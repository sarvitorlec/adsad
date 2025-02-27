function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //синие небо

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //зеленая трава

    //1. облако
    noStroke();
	fill(255);
    circle(200, 90, 70);
    circle(160, 120, 70);
    circle(240, 120, 70);
    rect(160, 120, 80, 35)





	//2. горы
    noStroke();
	fill(128, 128, 0);
    triangle(550, 100,700, 435,450 , 435)
    fill(255)
    triangle(550, 100,573, 150,533 , 155)
    


	//3. дерево
    fill(128, 128, 0)
	rect(800, 373, 20, 60)
    fill(34, 139, 34)
    circle(830, 360, 35)
    circle(810, 360, 35)
    circle(790, 360, 35)
    circle(800, 335, 35)
    circle(820, 335, 35)
    circle(810, 310, 35)

	//4. каньон
    fill(91, 102, 104)
    rect(100, 433, 70, 60)


	//5.овощ
    fill(32,156,56)
    ellipse(400,385,50,100)

	

}
