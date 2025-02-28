function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	noStroke();
	fill(255);
	ellipse(200, 200, 90, 75);
    ellipse(150, 210, 75, 55);
    ellipse(250, 210, 75, 55);

	//2. a mountain in the distance
	noStroke();
	fill(120);
	triangle(512, 432, 670, 160, 750, 432);
    fill(170);
	triangle(480, 432, 590, 200, 680, 432);


	//3. a tree
	noStroke();
	fill(139, 69, 19);
	rect(850, 270, 30, 180);
    fill(0, 130, 0)
    ellipse(865, 290, 150, 200);
    

	//4. a canyon
	// the canyon should go from ground-level to the bottom of the screen
	noStroke();
	fill(60, 50, 20);
	beginShape();
        vertex(230, 432);
        vertex(260, 432);
        vertex(160, 515);
        vertex(130, 576);
        vertex(10, 576);
        vertex(90, 490);
    endShape();
    
    
    

	//5. a collectable token - eg. a jewel, fruit, coins
	noStroke();
	fill(184, 134, 11);
	ellipse(430, 400, 50, 50);
    fill(218, 165, 32);
	ellipse(430, 400, 40, 40);
}