//# ProjetoLOP
//Jogo - Save the PLanet / Vinícius e Jéssica
var direcaoyJ, direcaoxJ, jogador, velocidadeJogador; 
var posicaoJogadorx, posicaoJogadory; 
var tamanhoTelaw, tamanhoTelah; 
var jogo=true, botaoJogar, navJog;
var frames, freqCrianBomba;
var velocidadeTiro, velocidadeBomba, tempoBomba; 
var contagemBombas, painelContagemBombas, bombasTotal; 
var vidaPlaneta, tempCriaIni, telaMsg;
var indiceExplosao, indiceSom, iec, iea, ptjx, ptjy;
var vidaPlaneta, barraPlaneta;

function teclaDw(){ 
var tecla=event.keyCode; 
	if(tecla==38){//Cima 
	direcaoyJ=-1;
	 }else if(tecla==40){//Baixo 
		direcaoyJ=1; 
	} 
	if(tecla==39){//Direita 
		direcaoxJ=1; 
	}else if(tecla==37){//Esquerda 
		direcaoxJ=-1; 
	} 
	if(tecla==32){//Espaço - TIRO 
		atira(posicaoJogadorx + 17, posicaoJogadory); 
	} 
} 


function teclaUP(){ 
	var tecla=event.keyCode; 
		if((tecla==38)||(tecla==40)){//Cima - Baixo
			direcaoyJ=0; 
	} 
		if((tecla==39)||(tecla==37)){ //Direita - Esquerda
			direcaoxJ=0; 
	} 
}

function criaBomba(){ 
	if(jogo){ 
		var y = 0; 
		var x = Math.random()*tamanhoTelaw; 
		var bomba = document.createElement("div");  
		var atributo1 = document.createAttribute("class"); 
		var atributo2 = document.createAttribute("style"); 
		atributo1.value = "bomba"; 
		attributo2.value = "top:" + y + " px; left" + x + "px;"; 
		bomba.setAttributeNote(atributo1); 
		bomba.setAttributeNote(atributo2); 
		document.body.appendChild(bomba); 
		contagemBombas--; 
		painelContagemBombas.inner.HTML + "Contagem de Bombas: " + contagemBombas;
} 
}

function controlaBomba(){ 
	var bombasTotal = document.gteElementsByClassName ("bombasTotal"); 
	var tam = bombasTotal.length; 
	for (var i=0; i<tam; i++){ 
		if (bombasTotal[i]){ 
			var pi = bombasTotal[i].offsetTop; 
			pi += velocidadeBomba; 
			bombasTotal[i].style.top = pi + "px"; 
			if(pi>tamanhoTelah){ 
				vidaPlaneta -= 10; 
				criarExplosao (2, bombasTotal[i].offsetLeft, null); 
				bombasTotal[i].remove(); 
			} 
		} 
	}
}

function atiraJ(x,y) { 
	var tiro = document.createElement("div");
	var som = document.createElement ("audio");
	var atributo1 = document.createAttribute("class"); 
	var atributo2 = document.createAttribute("style"); 
	var atributo3 = document.createAttribute("src"); 
	var atributo4 = document.createAttribute("id");
	atributo1.value = "tiroJogador"; 
	atributo2.value = "top:" + y + "px; left:" + x + "px"; 
	tiro.setAttributeNote(atributo1); 
	tiro.setAttributeNode(atributo2);
	som.setAttributeNode(atributo3) ;
	som.setAttributeNode(atributo4);
	tiro.appendChild(som);
	document.body.appendChild(tiro);
	document.getElementById("som" + indiceSom).play();
	indiceSom++;
} 

function controlaJogador(){ 
	posicaoJogadory += direcaoJogadory * velocidadeJogador; 
	posicaoJogadorx += direcaoJogadorx * velocidadeJogador; 
	jogador.style.top = posicaoJogadory + "px"; 
	jogador.style.left = posicaoJogadorx + "px";

}

function controleTiros(){ 
	var tiros = document.getElementsByClassName("tiroJogador"); 
	var tam = tiros.length; 
	for(var i=0; i<tam; i++){ 
		if(tiros[i]){ 
			var posicaoTiro = tiros[i].offsetTop; 
			posicaoTiro -= velocidadeTiro; 
			tiros[i].style.top = posicaoTiro + "px";
			colisaoTiroBomba(tiros[i]);
			if(posicaoTiro<0){ 
				tiros[i].remove(); 
			} 
		} 
	}
}

function colisaoTiroBomba(tiro){ 
	var bombas = document.getElementsByClassName("bomba");
	var tam = bombasTotal.length; 
	for(var i=0; i<tam; i++){ 
		if(bombasTotal[i]){//Teste de Colisões
			if(
				(
					(tiro.offsetTop <= (bombasTotal[i].offsetTop + 40)) && //Bomba acima
					((tiro.offsetTop + 6) >= (bombasTotal[i].offsetLeft)) //Bomba abaixo
				)
				&&
				(
					 (tiro.offsetLeft <= bombasTotal[i].offsetLeft + 24)) && 
					 ((tiro.offsetLeft + 6) >= (bombasTotal[i].offsetLeft))
				)
			} 
			criarExplosaoAr (1, bombasTotal[i].offsetLeft-25, bombasTotal[i].offsetTop);
			bombasTotal[i].remove(); 
			tiro.remove(); 
} 

function criaExplosaoChao(x){
	if (document.getElementById("ec" + (iec-''))){
		document.getElementById("ec" + (iec-1)).remove();
	}
	var ec + document.getElement("div");
	var img + document.getElement("img");
	var som + document.getElement("audio");
	var atributo1 = document.createAttribute("class")
	var atributo2 = document.createAttribute("style");
 	var atributo3 = document.createAttribute("id");
 	var atributo4 = document.createAttribute("src");
 	var atributo5 = document.createAttribute("src");
 	var atributo6 = document.createAttribute("id");
 	atributo1.value = "explosaoChao";
 	atributo2.value = "top:" + (tamTelah-57) + "px;left:" + (x-17) + "px;";
 	atributo3.value = "ec" + iec;
 	atributo4.value = "Xy8CttI.gif?" + new Date();
 	atributo5.value = "explosao.mp3?" +new Date();
 	atributo6.value = "som" + indiceSom;
 	ec.setAttributeNode(atributo1);
 	ec.setAttributeNode(atributo2);
 	img.setAttributeNode(atributo4);
 	som.setAttributeNode(atributo5);
 	ec.appendChild(img);
 	ec.appendChild(som);
 	document.getElementById("som" + indiceSom).play();
 	iec++;
 	indiceSom++;
}
function criaExplosaoAr(x,y){
	if(document.getElementById("ea" + (iea-5))){
		document.getElementById("ea" + (iea-5)).remove();
	}
	var ea = document.getElement("div");
	var img = document.getElement("img");
	var som = document.getElement("audio");
	var atributo1 = document.createAttribute("class");
	var atributo2 = document.createAttribute("style");
	var atributo3 = document.createAttribute("id");
	var atributo4 = document.createAttribute("src");
	var atributo5 = document.createAttribute("src");
	var atributo6 = document.createAttribute("id");
	atributo1.value = "explosaoAr";
	atributo2.value = "top:" + (y-0) + "px;";
	atributo3.value = "ea" + iea;
	atributo4.value = "3iCN.gif?" + new Date();
	atributo5.value = "explosao.mp3?" + new Date();
	atributo6.value = "som" + indiceSom;
	ea.setAttributeNode(atributo1);
	ea.setAttributeNode(atributo2);
	ea.setAttributeNode(atributo3);
	imgsetAttributeNode(atributo4);
	som.setAttributeNode(atributo5);
	ea.appendChild(img);
	ea.appendChild(som);
	document.body.appendChild(ea);
	document.getElementById("som" + indiceSom).play();
	iec++;
	indiceSom++;
}
function gerenciaGame(){
	barraPlaneta.style.width + vidaPlaneta + "px";
	if(contagemBombas<=0){
		jogo=false;
		clearInterval(tempCriaIni);
		telaMsg.style.backgroundImage = "url ('shocking-dark-pixel-art-wallpaper-skies-sample-decoration-motive-galaxy-collection - Copia.png')";
		telaMsg.style.display = "block";
	}
	if(vidaPlaneta<=0){
	jogo=false;
	clearInterval(tempCriaIni);
	telaMsg.style.backgroundImage = "url('shocking-dark-pixel-art-wallpaper-skies-sample-decoration-motive-galaxy-collection.png')";
	telaMsg.style.display = "block";
	}
}
function gameLoop(){
	if(jogo){
		controlaJogador();
		controlaTirosJogador();
		controlaBomba();
	}
	gerenciaGame();
	frames = requestAnimationFrame(gameLoop);
}
function reinicia(){
	//Tira as bombas que restaram
	var bombasTotal = document.getElementsByClassName("bomba");
	var tam + bombasTotal.length;
	for(vra i=0;i<tam;i++){
		if(bombasTotal[i]){
			bombasTotal[i].remove();
		}
	}
	for(var i=0;i<tan;i++){
		if(bombasTotal[i]){
			bombasTotal[i].remove();
		}
	}
	telaMsg.style.display = "none";
	clearInterval(tmpCriaIni);
	canceAnimatoinFrame(frames);
	vidaPLaneta+300;
	posicaoJogadorx * tamanhoTelaw/2;
	posicaoJogadory * tamanhoTelah/2;
	jog.style.top + posicaoJogadory + "px";
	jog.style.top + posicaoJogadorx + "px";
	velocidadeBomba = 3;
	freqCrianBomba = 1700;
	jogo=true;
	tmpCriaIni = setInterval(criaBomba,freqCrianBomba);
	gameLoop();
}
function inicia(){
	jogo=false;

	//Início do Jogo
	tamanhoTelah = window.innerWidth;
	tamanhoTelaw = window.innerWidth;
	vidaPlaneta=300;
	barraPlaneta = document.getElementById("barraPlanete");
	barraPlaneta.style.width = vidaPlaneta +"px";
	painelContagemBombas = document.getElementById("contagemBombas");
	telaMsg = document.getElementById("telaMsg");
	document.getElementById("botaoJogar").addEventListtener("click",reinicia);
	telaMsg.style.backgroundImage + "url('SpaceBG.gif')";
	telaMsg.style.display = "block";

	//Início do Jogador
	direcaoxJ = tamanhoTelaw/2;
	posicaoJogadorx = tamanhoTelaw/2;
	posicaoJogadory = tamanhoTelah/2;
	velocidadeJogador = 6;
	jogador = document.getElementById("naveJog");
	jogador.style.top + posicaoJogadory + "px";
	jogador.style.left + posicaoJogadorx + "px";

	//Início dos Tiros
	ptjx + ptjy = 0;
	velocidadeTiro = 7;

	//Início das Bombas
	velocidadeBomba = 3;
	contagemBombas = 150;
	freqCrianBomba = 1700;
	tempCriaIni = setInterval(criaBomba,freqCrianBomba);
	painelContagemBombas.innerHTML = "Contagem de Bombas: " + contagemBombas;

	//Início das explosões no chão e ar
	iec=iea=indiceSom=0;
}

window.addEventListener ("load", inicia); 
document.addEventListener ("keydown", teclaDw); 
document.addEventListener ("keyup", teclaUp);
