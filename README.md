# projeto_lop
var altura=1054,largura=520,x=100,y=100,x1=625 ,y1=74, vilao,spdX=20,spdY=4,x0,y0,bala;
alert("Para movimentar-se utilize as teclas de setas do teclado;
Para atirar, segure o botão esquerdo do mouse por 2 segundos e soute-o.")
function setup() { 
	createCanvas(1024, 500);
	 xo = x; 
     yo = -y;
	background(0);
}

function draw() {
  background("black");
  if (keyIsDown(LEFT_ARROW)){
    x-=5;
}
  if (keyIsDown(RIGHT_ARROW)){
    x+=5;
}
  if (keyIsDown(UP_ARROW)){
    y-=5;
}
  if (keyIsDown(DOWN_ARROW)){
    y+=5;
}  
if(y<0 || y>largura){
	 x=100;
	 y=100;
	}
if(x<0 || x>altura){
	x=100;
	y=100;
	}
x0 += 10
heroi = ellipse(x, y, 50, 50);
vilao = rect(x1,y1,50,50);
bala = rect(x0,y0,10,10);

if(mouseIsPressed){
	  x0=x;
	  y0=y;
   }
}

