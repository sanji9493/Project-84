canvas = document.getElementById('myCanvas');
ctx =canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
	{
		alphabetkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet key";
		console.log("alphabet key");
	}
}

function alphabetkey()
{
	//upload respective image with the message. 
 img_image="Alpkey.png";
 add()
}
if (keyPressed =48-57)
{
	
}
if (keyPressed =='37' )
{
  up() 
  console.log("up");
}
if (keyPressed =='38' )
{
  down() 
  console.log("down");
}
if (keyPressed =='39' )
{
  left() 
  console.log("left");
}
if (keyPressed =='40' )
{
  right() 
  console.log("right");
}
if (keyPressed =='17')
{
 ctrl()
console.log("ctrl");
}
if (keyPressed =='18')
{
 alt()
console.log("alt");
}
if (keyPressed =='27')
{
 esc()
console.log("esc");
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
